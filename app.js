const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('pubic'));
app.set('view engine','ejs');

const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

app.use('/',homeRouter);
app.use('/about',aboutRouter);
app.use('/contact',contactRouter);
app.use('/',express.static('./public'));

//error
app.use((req,res,next)=>{
    res.status(404).render('error500.ejs');
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).render('error500.ejs');
});

// const PORT = process.env.PORT || 5000

// portal
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})