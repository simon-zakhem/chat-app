import React, { useState } from 'react';

const Home = () => {
  // State to manage the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <nav
        className={`bg-gray-850 shadow-lg h-screen fixed top-0 left-0 w-full md:w-1/4 py-6 px-4 font-[sans-serif] flex flex-col overflow-auto transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Close Button for Sidebar */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={toggleSidebar}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-wrap items-center cursor-pointer">
          <div className="relative">
            <img
              src="https://readymadeui.com/profile_2.webp"
              className="w-12 h-12 p-1 rounded-full border-2 border-gray-300"
            />
            <span className="h-3 w-3 rounded-full bg-green-600 block absolute bottom-1 right-0"></span>
          </div>
          <div className="ml-6">
            <p className="text-xs text-gray-300">Hello</p>
            <h6 className="text-base text-white">John Doe</h6>
          </div>
        </div>

        <hr className="border-gray-300 mt-8" />

        {/* Teams Section */}
        <div className="my-8 flex-1">
          <h6 className="text-sm text-white inline-block">Teams</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            className="w-[15px] h-[15px] float-right cursor-pointer ml-auto"
            viewBox="0 0 118.783 118.783"
          >
            <path
              d="M115.97 101.597 88.661 74.286a47.75 47.75 0 0 0 7.333-25.488c0-26.509-21.49-47.996-47.998-47.996S0 22.289 0 48.798c0 26.51 21.487 47.995 47.996 47.995a47.776 47.776 0 0 0 27.414-8.605l26.984 26.986a9.574 9.574 0 0 0 6.788 2.806 9.58 9.58 0 0 0 6.791-2.806 9.602 9.602 0 0 0-.003-13.577zM47.996 81.243c-17.917 0-32.443-14.525-32.443-32.443s14.526-32.444 32.443-32.444c17.918 0 32.443 14.526 32.443 32.444S65.914 81.243 47.996 81.243z"
              data-original="#000000"
            ></path>
          </svg>

          {/* List of team members */}
          <ul className="mt-6 space-y-6">
            <li className="flex items-center text-sm text-gray-300 hover:text-white cursor-pointer">
              <span className="relative inline-block mr-4">
                <img
                  src="https://readymadeui.com/profile_3.webp"
                  className="w-10 h-10 p-1 rounded-full border-2 border-gray-300"
                />
                <span className="h-3 w-3 rounded-full bg-green-600 block absolute bottom-1 right-0"></span>
              </span>
              Peter Taylor
              <span className="bg-red-500 min-w-[20px] min-h-[20px] px-1 flex items-center justify-center text-white text-[11px] font-bold rounded-full ml-auto">
                1
              </span>
            </li>
            {/* More team members... */}
          </ul>
        </div>
      </nav>

      {/* Chat Section */}
      <div
        className={`flex h-screen flex-col flex-1 ${isSidebarOpen ? 'hidden' : ''} md:flex ml-0 md:ml-[25%]`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 bg-teal-800 text-white">
          <div className="flex items-center">
            <div className="relative">
              <img
                src="https://readymadeui.com/profile_2.webp"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
                alt="profile"
              />
              <span className="h-3 w-3 rounded-full bg-green-600 block absolute bottom-1 right-0"></span>
            </div>

            {/* Person being texted */}
            <div className="ml-4">
              <h6 className="text-lg">John Doe</h6>
              <p className="text-sm text-gray-300">Online</p>
              <hr className="border-teal-900 w-max" />
            </div>

            {/* Burger Menu Icon */}
            <div className="md:hidden pl-64">
              <button onClick={toggleSidebar}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-950">
          {/* Messages */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi 
              <time className="text-xs opacity-50 pl-3">12:45</time>
            </div>
            <div className="chat-bubble chat-bubble-success">
              You have been given a great honor.
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50 pl-3">12:46</time>
            </div>
            <div className="chat-bubble chat-bubble-success">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-teal-800">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-full bg-white text-black placeholder-gray-400"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
