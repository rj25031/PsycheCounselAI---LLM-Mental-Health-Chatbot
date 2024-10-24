import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
{
    name : String,
    email: String,
    phone: Number,
    password: String,
    age: Number,
    address: String
},
{
    collection:'userModel'
}
)

export default mongoose.model('userModel',userSchema);