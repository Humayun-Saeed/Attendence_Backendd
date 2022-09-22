const User = require('../Models/User')
var user = require('../Models/User')

module.exports.Add_User = async({attendence})=>{
    const add =  new user({attendence})
   return  await add.save()
}

module.exports.Upadate_user = async({id,attendence})=>{
 return await User.findByIdAndUpdate(id,{attendence})
}
//Delete by id
module.exports.Delete_user = async ({id})=>{
   return await User.findByIdAndDelete({id})
}
module.exports.get_all = async()=>{
   return await User.find({})
}