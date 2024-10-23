import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
{
    Fname : String,
    Lname : String,
    email:String,
    mobile:Number,
    password:String,
    newsletter:Boolean
},
{
    collection:'userModel'
}
)

export default mongoose.model('userModel',userSchema);