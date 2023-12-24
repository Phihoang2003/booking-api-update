import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  country:{
    type:String,
    require:true
  },
  img:{
    type:String,
    
  },
  city:{
    type:String,
    require:true
  },
  phone:{
    type:String,
    require:true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,

    default: false,
  },
},{timestamps:true});

export default mongoose.model("User", userSchema);
