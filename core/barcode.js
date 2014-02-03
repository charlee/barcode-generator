var fs = require('fs'),
    vm = require('vm'),
    Png = require('png').Png,
    Buffer = require('buffer').Buffer,
    __ = require('../lib/underscore-min');

function load(path) {
  var text = fs.readFileSync("./lib/bwip-js/" + path);
  if (!text)
    throw new Error(path + ": could not read file");
  vm.runInThisContext(text, path);
}

load("bwip.js");

BWIPJS.load = load;

var bitmap = {

  colors: [],
  currentColor: 0,

  minX: 999999,
  minY: 999999,
  maxX: 0,
  maxY: 0,

  data: null,

  color: function(r, g, b) {
    var c = { r: r, g: g, b: b };
    for (var i = 0; i < this.colors.length; i++) {
      if (__.isEqual(this.colors[i], c)) {
        this.currentColor = i;
        break;
      }
    }

    this.colors[i] = c;
    this.currentColor = i;
  },

  set: function(x, y) {
    x = Math.floor(x);
    y = Math.floor(y);

    if (x > this.maxX) this.maxX = x;
    if (x < this.minX) this.minX = x;
    if (y > this.maxY) this.maxY = y;
    if (y < this.minY) this.minY = y;

    if (!this.data) { this.data = []; }
    if (!this.data[y]) { this.data[y] = []; }
    this.data[y][x] = this.currentColor;
  },

  render: function(bgcolor, callback) {

    var w = this.maxX - this.minX + 1,
        h = this.maxY - this.minY + 1,
        buffer = new Buffer(w * h * 3);

    for (var y = this.minY; y <= this.maxY; y++) {
      for (var x = this.minX; x <= this.maxX; x++) {
        var c = (typeof(this.data[y][x]) == "undefined") ? bgcolor: this.colors[this.data[y][x]],
        offset = (y * w + x) * 3;

        buffer[offset] = c.r;
        buffer[offset + 1] = c.g;
        buffer[offset + 2] = c.b;
      }
    }

    var png = new Png(buffer, w, h, 'rgb');
    
    png.encode(function(data, err) {
      if (err) {
        console.error("Error: " + err.toString());
      } else {
        callback(data.toString('binary'));
      }
    });
  }

};


/**
 * Generate pdf417 barcode
 * pdf417(text, [scale], callback(binary))
 */
exports.pdf417 = function(text, scale, callback) {

  // deal with optional parameter
  if (__.isFunction(scale)) {
    callback = scale;
    scale = 2;      // default value for scale
  }

  var bw = new BWIPJS;
  bw.bitmap(bitmap);

  bw.scale(scale, scale);

  var opts = {
    eclevel: 5
  };

  bw.push(text);
  bw.push(opts);

  bw.call('pdf417');
  bw.bitmap().render({ r: 255, g: 255, b: 255 }, callback);
}
