import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const verifyToken = async (req, res, next) => {
    try {

        // check if token is available and extract it
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ error: "Unauthorized - No Token Found" });
        }

        // verify that the token extracted is the correct one
        const verification = jwt.verify(token, process.env.JWT_SECRET_KEY); 

        if(!verification){
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        // find the logged user carrying this token
        const user = await User.findById(verification.userId).select("-password");

        if(!user){
            return res.status(404).json({ error: "Error - User Not Found" });            
        }

        // store the user data in the user sent by request
        req.user = user;

        // call next function
        next();

    } catch (error) {
        console.error("Error in verifyToken middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default verifyToken;