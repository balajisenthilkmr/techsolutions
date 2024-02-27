const express = require('express');
const router = express.Router();

// sample data
const teamMembers = [
    {name:'mani',position:'asst manager'},
    {name:'dinesh',position:'app developer'},
    {name:'vasi',position:'web developer'}
]

router.get('/',(req,res)=>{
    res.render("about.ejs",{
        route: 'about',
        teamMembers
    });
});

module.exports = router;