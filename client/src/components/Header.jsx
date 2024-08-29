import React from 'react'

const Header = ({ toggleSidebar }) => {
  return (
    <>
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
    </>
  )
}

export default Header