
/*
 * GET home page.
 */

var dl = require('../core/aamva'),
    fs = require('fs'),
    barcode = require('../core/barcode'),
    __ = require('../lib/underscore-min');

exports.index = function(req, res){

  if (req.method == "POST") {

    var params = __.pick(req.body, 
      'lastName', 'firstName', 'street', 'city',
      'state', 'postalCode', 'country', 'number',
      'issue', 'expire', 'dd', 'height',
      'heightUnit', 'sex', 'cls', 'rest'
    );

    console.log(params);

    var doc = dl.getDocument({
      DCA: params.cls,
      DCB: params.rest,
      DBA: params.expire,
      DCS: params.lastName,
      DAC: params.firstName,
      DBD: params.issue,
      DBC: params.sex,
      DAY: 'NONE',
      DAU: params.height + ' ' + params.heightUnit,
      DAG: params.street,
      DAI: params.city,
      DAJ: params.state,
      DAK: params.postalCode,
      DAQ: params.number,
      DCF: params.dd,
      DCG: params.country
    });

    barcode.pdf417(doc, function(s) {
      var filename = "barcode-" + Math.random().toString(36).substring(2, 10) + ".png";
      console.log('writing file');
      fs.writeFile('./public/barcode/' + filename, s, 'binary', function(err) {
        res.render('index', { title: 'Driver\'s License', doc: doc, params: params, img: '/barcode/' + filename });
      });
    });


  } else {
    // generate form only
    res.render('index', { title: 'Driver\'s License', doc: '', params: {}, img: ''  });
  }


};
