import mongoose from "mongoose";
import Event from './event';
const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required:[true,"please enter the name"],
        unique: true,
    },
    email:{
        type : String,
        required:[true,"please enter the email"],
        unique: true,
    },
    college:{
        type : String,
        required:[true,"please enter the college"],
    },
    phone:{
        type : Number,
        required:[true,"please enter the name"],
        unique: true,
    },
    event: [
        {type: mongoose.Schema.Types.ObjectId,
        ref:Event,
    },]      
});

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;