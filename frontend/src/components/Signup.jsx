'use client';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios.post(`${API}/signup`, { name, email, password })
      .then(result => {
        console.log(result.data);
        alert("Signup successful!");
        navigate('/login');
      })
      .catch(err => {
        console.error("Signup error:", err);
        alert("Signup failed. Try again.");
      });
  };

  return (
    <section className="min-h-screen bg-[#FFDCDC] flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
        
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/a1/a0/c8/a1a0c88b8c107fc819c1a79d5fd24650.jpg"
            alt="signup visual"
            className="h-[80vh] w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Signup</h2>
            <p className="text-sm text-gray-500">Create your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
            >
              Register
            </button>

            <p className="mt-6 text-sm text-center text-gray-700">
              Already have an account?{' '}
              <Link to="/login" className="text-amber-600 font-medium hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
