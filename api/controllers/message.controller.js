import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {

        // take message as input, receiverId as parameter, and senderId from cookie
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // find the conversation between the 2 participants
        let convo = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        // create one if it is the first time they chat
        if(!convo){
            convo = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        // create the new message and push it into the conversation
        const newMessage = new Message({ senderId, receiverId, message });

        if(newMessage){
            convo.messages.push(newMessage._id);
        }

        await Promise.all([convo.save(), newMessage.save()]);
        res.status(200).json({ newMessage });

    } catch (error) {
        console.error("Error in sendMessage controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}