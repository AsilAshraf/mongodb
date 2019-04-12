const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/madatabase');
const Schema=mongoose.Schema;

var NewBookSchema=new Schema({
    title:String,
    author:String,
    genre:String
});

var Bookdata=mongoose.model('Book-Data',NewBookSchema);   //model created
module.exports=Bookdata;