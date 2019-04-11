const express=require('express');
const chalk=require('chalk');
const path=require('path')
var app=express();
const booksRouter=express.Router();
app.use(express.static(path.join(__dirname,"/public")))  //for style sheets
app.set('views','./src/views');   //setting path - html is in view folder
app.set('view engine','ejs');  //ejs engine is using here
booksRouter.route('/')      //routing
.get((req,res)=>{
    res.render('books',{nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}],title:"Books"});
});

booksRouter.route('/single')
.get((req,res)=>{
    res.send("Hello single book")
});
app.use('/books',booksRouter);
app.get('/',(req,res)=>{    //=app.get('/',function(rq,res))
    //res.send("hello world");
    res.render('index',{nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}],title:"library"});   // data passing on the time of index calling
});



app.listen(3000,function(){
    console.log('listening to port'+chalk.red('3000'));
});