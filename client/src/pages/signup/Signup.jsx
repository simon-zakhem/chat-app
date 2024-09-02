import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../components/UserContext';
import authService from '../../services/auth.service';
import toast from 'react-hot-toast';

const Signup = () => {
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const userInfo = await authService.signup(input.firstname, input.lastname, input.username, input.email, input.password, input.confirmPassword);

      if(userInfo){
        setRedirect(true);
        setUserInfo(userInfo);
      } else {
        toast.error("Username or Email already exist.")
      }
    } catch (error) {
      console.error('Error signing up:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else {
        console.error('Error message:', error.message);
      }
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

        {/* Form Section */}
        <div className="flex items-center justify-center p-6 h-screen w-full">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-teal-500 md:text-3xl text-2xl font-extrabold text-center">
                Register an Account
              </h3>
            </div>

            {/* First Name Field */}
            <div className="mb-4">
              <label className="text-gray-800 text-xs block mb-2">First Name</label>
              <div className="relative flex items-center">
                <input
                  name="firstname"
                  type="text"
                  required
                  className="w-full text-black bg-transparent text-sm border-b border-gray-300 focus:border-teal-500 px-2 py-3 outline-none"
                  placeholder="Enter first name"
                  value={input.firstname}
                  onChange={(e) => setInput({ ...input, firstname: e.target.value })}
                />
              </div>
            </div>

            {/* Last Name Field */}
            <div className="mb-4">
              <label className="text-gray-800 text-xs block mb-2">Last Name</label>
              <div className="relative flex items-center">
                <input
                  name="lastname"
                  type="text"
                  required
                  className="w-full text-black bg-transparent text-sm border-b border-gray-300 focus:border-teal-500 px-2 py-3 outline-none"
                  placeholder="Enter last name"
                  value={input.lastname}
                  onChange={(e) => setInput({ ...input, lastname: e.target.value })}
                />
              </div>
            </div>

            {/* Username Field */}
            <div className="mb-4">
              <label className="text-gray-800 text-xs block mb-2">Username</label>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  className="w-full text-black bg-transparent text-sm border-b border-gray-300 focus:border-teal-500 px-2 py-3 outline-none"
                  placeholder="Enter username"
                  value={input.username}
                  onChange={(e) => setInput({ ...input, username: e.target.value })}
                />
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

            {/* Password Field */}
            <div className="mb-4">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-black bg-transparent text-sm border-b border-gray-300 focus:border-teal-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                  value={input.password}
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label className="text-gray-800 text-xs block mb-2">Confirm Password</label>
              <div className="relative flex items-center">
                <input
                  name="confirmpassword"
                  type="password"
                  required
                  className="w-full text-black bg-transparent text-sm border-b border-gray-300 focus:border-teal-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                  value={input.confirmPassword}
                  onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-teal-600 hover:bg-teal-700 text-white focus:outline-none"
              >
                Register
              </button>
              <p className="text-sm mt-6 text-gray-800">
                Already have an account?
                <Link to={'/login'} className="text-teal-500 font-semibold hover:underline ml-1">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
