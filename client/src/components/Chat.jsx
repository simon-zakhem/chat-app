import React from 'react'
import Header from './Header'
import Content from './Content'
import Input from './Input'

const Chat = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
    {/* Chat Section */}
    <div
        className={`flex h-screen flex-col flex-1 ${isSidebarOpen ? 'hidden' : ''} md:flex ml-0 md:ml-[25%]`}
      >
        <Header toggleSidebar={toggleSidebar} />

        <Content />

        <Input />
      </div>
    </>
  )
}

export default Chat