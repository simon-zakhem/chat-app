import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstname:{ type: String, required: true },
    lastname:{ type: String, required: true },
    username:{ type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true },
    password:{ type: String, required: true, minlength: 6 },
    profilePic: { type: String, default: "" },
}, {timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;