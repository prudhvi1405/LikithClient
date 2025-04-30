import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white border border-blue-100 shadow-xl rounded-2xl p-10 space-y-10">
        <div className="text-center">
          <div className="inline-block bg-green-100 p-4 rounded-full">
            <ShieldCheck className="text-green-600 w-8 h-8" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-blue-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            You’re successfully logged in. Choose a section to continue.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => handleNavigate('/interactive')}
            className="py-3 px-6 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition font-medium shadow"
          >
            Webpage
          </button>

          <button
            onClick={() => handleNavigate('/dashdashboard')}
            className="py-3 px-6 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition font-medium shadow"
          >
            Dashboard
          </button>

          <button
            onClick={() => handleNavigate('/chatbot')}
            className="py-3 px-6 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition font-medium shadow"
          >
            Chatbot
          </button>

          <button
            onClick={() => handleNavigate('/mlmodel')}
            className="py-3 px-6 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition font-medium shadow"
          >
            ML Model
          </button>

          <button
            onClick={() => handleNavigate('/predictions')}
            className="py-3 px-6 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition font-medium shadow col-span-full"
          >
            Predictions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;