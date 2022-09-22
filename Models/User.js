
var mongoose = require('mongoose')

const Attendence =new mongoose.Schema({
attendence:{
    type:String,
}
    })
    module.exports=mongoose.model('Attendence',Attendence)