import React from 'react'
import useConversation from '../zustand/useConversation'

const Conversation = ({conversation}) => {

    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    return (
        <>
                <li className={`flex items-center text-sm text-gray-300 hover:text-white cursor-pointer mt-6
                    ${isSelected ? "bg-teal-700 rounded px-0.5 py-0.5" : ""}`} onClick={() => setSelectedConversation(conversation)}>
                    <span className="relative inline-block mr-4">
                        <img
                        src={conversation.profilePic}
                        className="w-10 h-10 p-1 rounded-full border-2 border-gray-300"
                        />
                        <span className="h-3 w-3 rounded-full bg-green-600 block absolute bottom-1 right-0"></span>
                    </span>
                    {conversation.firstname} {conversation.lastname}
                    <span className="bg-red-500 min-w-[20px] min-h-[20px] px-1 flex items-center justify-center text-white text-[11px] font-bold rounded-full ml-auto">
                        1
                    </span>
                </li>
        </>
    )
}

export default Conversation