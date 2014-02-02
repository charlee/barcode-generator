
/*
 * GET home page.
 */

var dl = require('../core/aamva'),
    __ = require('../lib/underscore-min');

exports.index = function(req, res){

  if (req.method == "POST") {

    var params = __.pick(req.body, 
      'lastName', 'firstName', 'street', 'city',
      'state', 'postalCode', 'country', 'number',
      'issue', 'expire', 'dd', 'height',
      'heightUnit', 'sex', 'class', 'restrictions'
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

    res.render('index', { title: 'Driver\'s License', doc: doc, params: params });

  } else {
    // generate form only
    res.render('index', { title: 'Driver\'s License', doc: '', params: {}  });
  }


};
