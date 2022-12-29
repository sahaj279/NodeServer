//createing a notes model
//step1 :define schema Note: id,userid,title, desc, dateadded
//step2 :create model name :Note

const mongoose=require('mongoose');

const noteschema=mongoose.Schema({
    id:{
        type:String,
        required: true,
        unique: true
    },
    userid:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String
    },
    dateadded:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model("Note", noteschema);//exporting the model created st that it could be used from outside too