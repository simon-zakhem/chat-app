import React from 'react'

const Input = () => {
  return (
    <>
    {/* Chat Input */}
    <div className="p-4 bg-teal-800">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-full bg-white text-black placeholder-gray-400"
          />
    </div>
    </>
  )
}

export default Input