import mongoose from "mongoose";
import Joi from "joi"

const User = mongoose.model('User', new mongoose.Schema({
    // user:{
    //     type:String,
    //     required:true
    // }, 
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    vendortype:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    }, 
    number:{
        type:String,
        required:true
    }
}));
  
function validateUser(user) {
  const schema = Joi.object({
//   id:Joi.string().required(),
  email:Joi.string().required(),
  password:Joi.string().required(),
  name:Joi.string().required(), 
  vendortype:Joi.string().required(),
  pincode:Joi.string().required(),
  number:Joi.string().required(),
    //  status:Joi.string().required(),
    //  number:Joi.string().required(),
    //  type:Joi.string().required(),
    //  rto:Joi.string().required(),
  });

  return schema.validate(user);
}
export default User ;
export {validateUser};