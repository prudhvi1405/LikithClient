import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://likithserver.onrender.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-white flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-10 border border-blue-200">
        <div className="mb-8 text-center">
          <div className="inline-block bg-blue-100 p-3 rounded-full mb-3">
            <UserPlus className="text-blue-500 w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-blue-800">Sign Up</h1>
          <p className="text-gray-500 text-sm mt-1">Create a new account below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-600 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition"
          >
            Create Account
          </button>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full py-2 mt-2 border border-blue-500 text-blue-600 hover:bg-blue-100 rounded-md transition"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
