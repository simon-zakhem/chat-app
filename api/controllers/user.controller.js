import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {

        const loggedUser = req.user._id;
        const allUsers = await User.find({ _id: { $ne: loggedUser } }).select(["-password", "-email"] );

        res.status(200).json(allUsers);
        
    } catch (error) {
        console.error("Error in getUsers controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}