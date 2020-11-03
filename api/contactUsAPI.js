var express = require('express');
var router = express.Router();
var contactUsCtrl = require('./../ctrl/contactUsCtrl');

router.get('/list', async (req, res) => {
  try{
    const response = await contactUsCtrl.list(req);
    res.status(200).json({success: true, data: response});
  }
  catch(error){
    res.status(500).json({success: false, error});
  }
});

router.post('/contactus', async (req, res) => {
  try{
    const response = await contactUsCtrl.contactus(req.body);
    res.status(200).json({success: true, data: response});
  }
  catch(error){
    res.status(500).json({success: false, error});
  }
});

module.exports = router;
