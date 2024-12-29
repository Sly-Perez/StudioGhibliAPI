const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(async(req, res)=>{
    res.status(200);
    res.render('index');
}));
router.get('/home', asyncHandler(async(req, res)=>{
    res.status(200);
    res.render('index');
}));
router.get('/index', asyncHandler(async(req, res)=>{
    res.status(200);
    res.render('index');
}));


module.exports = router;