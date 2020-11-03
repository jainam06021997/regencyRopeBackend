var express = require('express');
var router = express.Router();

router.list = (req) => {
  return new Promise((resolve, reject) => {
    MySQL.query('select * from contactus', (err, result) => {
      if (err) {
        const msg = {
          message: 'db error',
          error: err,
        };
        reject(msg);
      } else {
        resolve(result);
      }
    });
  });
};

router.contactus = (data) => {
  return new Promise((resolve, reject) => {
    MySQL.query('insert into contactus set ? ', data, (err, res) => {
      if (err) {
        const msg = {
          message: 'db error',
          error: err,
        };
        reject(msg);
      } else {
        const msg = {
          message: 'Record Added Successfully',
        };
        resolve(msg);
      }
    });
  });
};

module.exports = router;
