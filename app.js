const express=require('express');
const chalk=require('chalk');
const path=require('path')


//const booksRouter=express.Router();
const authorsRouter=express.Router();
var app=express();
app.use(express.static(path.join(__dirname,"/public")))  //for style sheets

app.set('views','./src/views');   //setting path - html is in view folder
app.set('view engine','ejs');  //ejs engine is using here
app.use('/authors',authorsRouter);

const nav=[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'},{link:'addbook',title:'admin'}];
const booksRouter=require('./src/routes/bookRoutes')(nav);  //nav passing
app.use('/books',booksRouter);

const adminRouter=require('./src/routes/adminRoutes')(nav);
app.use('/addbook',adminRouter)
app.get('/',(req,res)=>{    //=app.get('/',function(rq,res))
    //res.send("hello world");
    res.render('index',{nav,title:"library"});   // data passing on the time of index calling
});



authorsRouter.route('/')      //routing
.get((req,res)=>{
    res.render('authors',{nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}],title:"Authors"});
});






app.listen(3000,function(){
    console.log('listening to port'+chalk.red('3000'));
});