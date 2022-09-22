 const User = require('../Services/User_Service')

module.exports.ADD = async(req,res)=>{

const data = await User.Add_User(req.body)
res.json(data)
console.log(data);

}

module.exports.GET=async(req,res)=>{
    const data = await User.get_all()
    console.log(data);
    res.json(data)
}

module.exports.Update = async(req,res)=>{
    const data =  await User.Upadate_user(req.body)
    res.json(data)
    console.log("update"+data);
}
module.exports.Delete = async(req,res)=>{
    const data = await User.Delete_user(req.body)
     console.log(data);
}
