import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Palette } from '@mui/icons-material';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API}/login`, { email, password })
.then((result) => {
  console.log(result.data);

  if (result.data.message === 'Login successful') {
    // ✅ Save token and user in localStorage
    localStorage.setItem('token', result.data.token);
    localStorage.setItem('user', JSON.stringify(result.data.user));

    // ✅ Set Axios default header
    axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

    // ✅ Tell app user is logged in
    setIsLoggedIn(true);

    // ✅ Redirect
    navigate('/');
  } else {
    alert(result.data.message || 'Login failed');
  }
})

      .catch((err) => {
        console.error('Login error:', err);
        alert('Login failed. Please check your credentials.');
      });
  };

  return (
    <section className="min-h-screen bg-[#FFE8CD] flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
        
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/20/72/bf/2072bf31916fe07aa69fed32a9319372.jpg"
            alt="login visual"
            className="h-[80vh] w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">
              <div className="flex items-center space-x-2 justify-center">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Snoopyydoodles</span>
              </div>
            </h2>
            <p className="text-lg text-gray-500">Sign into your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
            >
              Login
            </button>

            <p className="mt-6 text-sm text-center text-gray-700">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-amber-600 font-medium hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
