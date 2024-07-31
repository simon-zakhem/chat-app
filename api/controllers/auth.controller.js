import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndCookie from "../utils/generateToken.js";

export const SignupUser = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password, confirmPassword } = req.body;

        // check passwords
        if(password !== confirmPassword){
            return res.status(400).json({ error: "Passwords Don't Match" });
        }

        // check if neither the email or username were already used
        const user = await User.findOne({
            $or: [
              { username },
              { email },
            ]
        });

        if(user){
            return res.status(400).json({ error: "Username or Email Already Exists" });
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // generate default profile picture
        const defaultProfilePic = `https://ui-avatars.com/api/?name=${firstname}+${lastname}&background=0D8ABC&color=fff`;

        // create new user object
        const newUser = new User({
            firstname,
            lastname,
            username,
            email, 
            password: hashedPassword,
            profilePic: defaultProfilePic
        });

        // if the object was created successfully, add it to the db
        if(newUser){
            // generate cookie
            generateTokenAndCookie(newUser._id, res);
            
            await newUser.save();
            res.status(200).json({ 
                _id: newUser._id, 
                firstname: newUser.firstname, 
                lastname: newUser.lastname,
                username: newUser.username,
                email: newUser.email, 
                password: newUser.password, 
                profilePic: newUser.profilePic 
            });
        } else {
            return res.status(400).json({ error: "Invalid User Data" });
        }

    } catch(error) {
        console.error("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // check if there is a user with this username or email
        const user = await User.findOne({
            $and: [
              { username },
              { email },
            ]
        });

        if(user) {
            // compare logged password to the hashed password
            const checkPassword = await bcryptjs.compare(password, user.password);

            if(checkPassword){

                // generate cookie
                generateTokenAndCookie(user._id, res);
                res.status(200).json({ 
                    _id: user._id,
                    username: user.username,
                    profilePic: user.profilePic
                });
            } else {
                return res.status(400).json({ error: "Invalid Password" });
            }
        } else {
            return res.status(400).json({ error: "Invalid Username or Email" });
        }

    } catch (error) {
        console.error("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const LogoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge:0 });
        res.status(200).json({ message: "Successfully Logged Out" });
        
    } catch (error) {
        console.error("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};