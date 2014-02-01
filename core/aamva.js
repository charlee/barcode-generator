var mandatoryElements = [
  { id: 'DCA', type: 'DL', rule: 'V6ANS' },       // Jurisdiction-specific vehicle class
  { id: 'DCB', type: 'DL', rule: 'V12ANS' },      // Jurisdiction-specific restriction codes
  { id: 'DCC', type: 'DL', rule: 'V5ANS' },       // Jursdiction-specific endorsement codes
  { id: 'DBA', type: 'Both', rule: 'F8N' },       // Document Expiration Date: MMDDCCYY for US, CCYYMMDD for Canada
  { id: 'DCS', type: 'Both', rule: 'V40ANS' },    // Customer Family Name
  { id: 'DAC', type: 'Both', rule: 'V40ANS' },    // Customer First Name
  { id: 'DAD', type: 'Both', rule: 'V40ANS' },    // Customer Middle Name(s): multiple names should be separated by ','
  { id: 'DBD', type: 'Both', rule: 'F8N' },       // Document Issue Date: MMDDCCYY for US, CCYYMMDD for Canada
  { id: 'DBB', type: 'Both', rule: 'F8N' },       // Date of Birth: MMDDCCYY for US, CCYYMMDD for Canada
  { id: 'DBC', type: 'Both', rule: 'F1N' },       // Physical Description - Sex: 1 = male, 2 = female
  { id: 'DAY', type: 'Both', rule: 'F3A' },       // Physical Description - Eye Color: ANSI D-20 codes
  { id: 'DAU', type: 'Both', rule: 'F6AN' },      // Physical Description - Height, unit: 'in' or 'cm'
  { id: 'DAG', type: 'Both', rule: 'V35ANS' },    // Address - Street 1
  { id: 'DAI', type: 'Both', rule: 'V20ANS' },    // Address - City
  { id: 'DAJ', type: 'Both', rule: 'F2A' },       // Address - Jurisdiction Code (State)
  { id: 'DAK', type: 'Both', rule: 'F11AN' },     // Address - Postal Code
  { id: 'DAQ', type: 'Both', rule: 'V25ANS' },    // Customer ID Number
  { id: 'DCF', type: 'Both', rule: 'V25ANS' },    // Document Discriminator
  { id: 'DCG', type: 'Both', rule: 'F3A' },       // Country Identification
  { id: 'DDE', type: 'Both', rule: 'F1A' },       // Family name truncation: truncated(T), not been truncated(N), unknown(U)
  { id: 'DDF', type: 'Both', rule: 'F1A' },       // First name truncation: truncated(T), not been truncated(N), unknown(U)
  { id: 'DDG', type: 'Both', rule: 'F1A' }        // Middle name trunction: truncated(T), not been truncated(N), unknown(U)
];


var LF = '\x0a', CR = '\x0d', RS = '\x1e';

var inn = "636012"; 

/**
 * Parse field rule
 */
function parseRule(rule) {

  var m = rule.match(/([FV])(\d+)([ANS]+)/);
  if (m) {
    return {
      fixed: (m[1] == 'F'),
      length: parseInt(m[2]),
      alpha: (m[3].indexOf('A') != -1),
      numeric: (m[3].indexOf('N') != -1),
      special: (m[3].indexOf('S') != -1)
    };
  } else {
    // invalid rule
    return null;
  }
}

function rpad(str, len, ch) {
  var p = len - str.length;
  if (p > 0) str += Array(p).join(ch ? ch : ' ');
  return str;
}

function lpad(str, len, ch) {
  var p = len - str.length;
  if (p > 0) str = Array(p).join(ch ? ch : ' ')  + str;
  return str;
}


exports.getDocument = function(data) {

  var body = 'DL';
  for (var i = 0; i < mandatoryElements.length; i++) {
    var e = mandatoryElements[i],
        k = e.id;

    if (k in data) {
      var rule = parseRule(e.rule);
      body += k + (rule.fixed ? rpad(data[k], rule.length) : data[k]);
    }
  }

  body += CR;

  var subfile = "DL0000" + lpad("" + body.length, 4, '0') + body;

  var header = "@" + LF + RS + CR + "ANSI " + inn + "030001";

  return header + subfile;
};
