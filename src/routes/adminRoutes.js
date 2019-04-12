const express=require('express');
const Bookdata=require('../model/bookdata');
const adminRouter=express.Router();
function router(nav){



adminRouter.route('/')      //routing
.get((req,res)=>{
    res.render('addbook',
    {nav,title:"form"});
});
adminRouter.route('/add')
.get((req,res)=>{
    var item = {
        title:req.param('title'),
        author:req.param('author'),
        genre:req.param('genre')
    }
    var book=new Bookdata(item);
    book.save();
    res.redirect('/books');

});



//module.exports=booksRouter;
return adminRouter;
}
module.exports=router;