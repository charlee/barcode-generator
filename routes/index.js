
/*
 * GET home page.
 */

var dl = require('../core/aamva');

exports.index = function(req, res){

  if (req.method == "POST") {

    var lastName    = req.body.inputLastName,
        firstName   = req.body.inputFirstName,
        street      = req.body.inputStreet,
        city        = req.body.inputCity,
        state       = req.body.inputState,
        postalCode  = req.body.inputPostalCode,
        country     = req.body.inputCountry,
        number      = req.body.inputNumber,
        issueDate   = req.body.inputIssue,
        expireDate  = req.body.inputExpire,
        dd          = req.body.inputDD,
        height      = req.body.inputHeight,
        heightUnit  = req.body.inputHeightUnit,
        sex         = req.body.inputSex,
        cls         = req.body.inputClass,
        rest        = req.body.inputRestrictions;


    var doc = dl.getDocument({
      DCA: cls,
      DCB: rest,
      DBA: expireDate,
      DCS: lastName,
      DAC: firstName,
      DBD: issueDate,
      DBC: sex,
      DAY: 'NONE',
      DAU: height + ' ' + heightUnit,
      DAG: street,
      DAI: city,
      DAJ: state,
      DAK: postalCode,
      DAQ: number,
      DCF: dd,
      DCG: country
    });

    res.render('index', { title: 'Driver\'s License', doc: doc });
  } else {
    res.render('index', { title: 'Driver\'s License' });
  }


};
