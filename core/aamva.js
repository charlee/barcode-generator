var elements = [

  // ------ Mandatory Elements ------------
  { id: 'DCA', type: 'DL', rule: 'V6ANS' },       // Jurisdiction-specific vehicle class
  { id: 'DCB', type: 'DL', rule: 'V12ANS' },      // Jurisdiction-specific restriction codes
  { id: 'DCC', type: 'DL', rule: 'V5ANS' },       // Jursdiction-specific endorsement codes
  { id: 'DBA', type: 'Both', rule: 'F8N' },       // Document Expiration Date: MMDDCCYY for US, CCYYMMDD for Canada
  { id: 'DCS', type: 'Both', rule: 'V40ANS' },    // Customer Family Name
  { id: 'DCT', type: 'Both', rule: 'V40ANS' },    // Customer First Name (??? XXX)
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
  { id: 'DDG', type: 'Both', rule: 'F1A' },       // Middle name trunction: truncated(T), not been truncated(N), unknown(U)

  // ------ Optional Elements ------------

  { id: 'DAH', type: 'Both', rule: 'V35ANS' },    // Address - Street 2
  { id: 'DAZ', type: 'Both', rule: 'V12A' },      // Hair color
  { id: 'DCH', type: 'Both', rule: 'F3A' },       // ??? XXX
  { id: 'DCI', type: 'Both', rule: 'V33A' },      // Place of birth
  { id: 'DCJ', type: 'Both', rule: 'V25ANS' },    // Audit information
  { id: 'DCK', type: 'Both', rule: 'V25ANS' },    // Inventory control number
  { id: 'DBN', type: 'Both', rule: 'V10ANS' },    // Alias / AKA Family Name
  { id: 'DBG', type: 'Both', rule: 'V15ANS' },    // Alias / AKA Given Name
  { id: 'DBS', type: 'Both', rule: 'V15ANS' },    // Alias / AKA Suffix Name
  { id: 'DCU', type: 'Both', rule: 'V5ANS' },     // Name Suffix (JR, SR, I, II, III, IV, V, VI, VII, VIII, IX)
  { id: 'DCE', type: 'Both', rule: 'F1N' },       // Physical Description - Weight Range
                                                  //   0 = up to 31 kg (up to 70 lbs)
                                                  //   1 = 32 - 45 kg (71 - 100 lbs)
                                                  //   2 = 46 - 59 kg (101 - 130 lbs)
                                                  //   3 = 60 - 70 kg (131 - 160 lbs)
                                                  //   4 = 71 - 86 kg (161 - 190 lbs)
                                                  //   5 = 87 - 100 kg (191 - 220 lbs) 
                                                  //   6 = 101 - 113 kg (221 - 250 lbs) 
                                                  //   7 = 114 - 127 kg (251 - 280 lbs)
                                                  //   8 = 128 - 145 kg (281 - 320 lbs)
                                                  //   9 = 146+ kg (321+ lbs)
  { id: 'DCL', type: 'Both', rule: 'F3A' },       // Race / ethnicity (ANSI D20)
  { id: 'DCM', type: 'DL', rule: 'F4AN' },        // Standard vehicle classification (ANSI D20)
  { id: 'DCN', type: 'DL', rule: 'F5AN' },        // Standard endorsement code (ANSI D20)
  { id: 'DCO', type: 'DL', rule: 'F12AN' },       // Standard restriction code (ANSI D20)
  { id: 'DCP', type: 'DL', rule: 'V50ANS' },      // Jurisdiction-specific vehicle classification description
  { id: 'DCQ', type: 'DL', rule: 'V50ANS' },      // Jurisdiction-specific encorsement code description
  { id: 'DCR', type: 'DL', rule: 'V50ANS' },      // Jurisdiction-specific restriction code description
  { id: 'DDA', type: 'Both', rule: 'F1A' },       // Compliance Type ('M' = materially compliant 'F' = fully compliant 'N' = non-compliant)
  { id: 'DDB', type: 'Both', rule: 'F8N' },       // Card Revision Date
  { id: 'DDC', type: 'DL', rule: 'F8N' },         // HAZMAT Endorsement Expiration Date (MMDDCCYY for US, CCYYMMDD for Canada)
  { id: 'DDD', type: 'Both', rule: 'F1N' },       // Limited Duration Document Indicator
  { id: 'DAW', type: 'Both', rule: 'F3N' },       // Weight (pounds, ex. 185 lb = "185")
  { id: 'DAX', type: 'Both', rule: 'F3N' },       // Weight (kilograms, ex. 84 kg = "084")
  { id: 'DDH', type: 'Both', rule: 'F8N' },       // Date on which the cardholder turns 18 years old (MMDDCCYY for US, CCYYMMDD for Canada)
  { id: 'DDI', type: 'Both', rule: 'F8N' },       // Under 19 Until
  { id: 'DDJ', type: 'Both', rule: 'F8N' },       // Under 21 Until
  { id: 'DDK', type: 'Both', rule: 'F1N' },       // Organ Donor Indicator (1 = the cardholder is an organ donor)
  { id: 'DDL', type: 'Both', rule: 'F1N' }        // Veteran Indicator (1 = the cardholder is a veteran)

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
  if (p > 0) str += Array(p + 1).join(ch ? ch : ' ');
  return str;
}

function lpad(str, len, ch) {
  var p = len - str.length;
  if (p > 0) str = Array(p + 1).join(ch ? ch : ' ')  + str;
  return str;
}


exports.getDocument = function(data) {

  var body = 'DL';
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i],
        k = e.id;

    if (k in data) {
      var rule = parseRule(e.rule);
      body += k + (rule.fixed ? rpad(data[k], rule.length) : data[k]) + LF;
    }
  }

  body += CR;

  var subfile = "DL0000" + lpad("" + body.length, 4, '0') + body;

  var header = "@" + LF + RS + CR + "ANSI " + inn + "030001";

  return header + subfile;
};
