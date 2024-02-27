const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('contact.ejs',{
        route: 'contact'
    });
});

// submission form
router.post('/successpage',(req,res)=>{
    console.log(req.body);

// render success message
    res.render('successpage.ejs',{docTitle:'Contact',success:true, ...req.body});
});

module.exports = router;