import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import authService from '../../services/auth.service';
import toast from 'react-hot-toast';

const Login = () => {

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userInfo = await authService.login(input.username, input.email, input.password);
      
      if (userInfo) {
        setUserInfo(userInfo);
        setRedirect(true);
      } else {
        toast.error('Wrong username/password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="font-thin bg-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Image Section: Visible only on medium and larger screens */}
        <div className="hidden md:block bg-teal-700">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="w-full h-full object-contain" 
            alt="login-image"
          />
        </div>

        {/* Login Form Section */}
        <div className="flex items-center justify-center p-6 h-screen w-full">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-teal-500 md:text-3xl text-2xl font-extrabold text-center">Login</h3>
            </div>

            <div className="mb-4">
              <label className="text-gray-800 text-xs block mb-2">Username</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full text-black bg-transparent text-sm border-b border-gray-300 focus:border-teal-500 px-2 py-3 outline-none"
                  placeholder="Enter username"
                  value={input.username}
                  onChange={(e) => setInput({ ...input, username: e.target.value })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full text-black bg-transparent text-sm border-b border-gray-300 focus:border-teal-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                  value={input.email}
                  onChange={(e) => setInput({ ...input, email: e.target.value })}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-black bg-transparent 
                  text-sm border-b border-gray-300 
                  focus:border-teal-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                  value={input.password}
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-teal-600 hover:bg-teal-700 text-white focus:outline-none"
              >
                Login
              </button>
              <p className="text-sm mt-6 text-gray-800">
                Don't have an account?{' '}
                <Link
                  to={'/signup'}
                  className="text-teal-500 font-semibold hover:underline ml-1"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
