import React from 'react'
import Header from './Header'
import Input from './Input'
import MessageContainer from './messages/MessageContainer'

const Chat = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
    {/* Chat Section */}
    <div
        className={`flex h-screen flex-col flex-1 ${isSidebarOpen ? 'hidden' : ''} md:flex ml-0 md:ml-[25%]`}
      >
        <Header toggleSidebar={toggleSidebar} />

        <MessageContainer />

        <Input />
      </div>
    </>
  )
}

export default Chat