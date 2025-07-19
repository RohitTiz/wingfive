import './App.css';
import React from 'react';
function App() {
  return (
    <div className="p-8 text-center">
      {/* Tailwind CSS Test Elements */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Tailwind CSS Test
      </h1>
      
      <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md mx-auto">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Test Button
        </button>
        <p className="mt-4 text-gray-700">
          If these styles appear, Tailwind is working!
        </p>
      </div>

      {/* Grid/Color Test (Optional) */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-red-500 h-12"></div>
        <div className="bg-green-500 h-12"></div>
        <div className="bg-yellow-500 h-12"></div>
      </div>
    </div>
  );
}

export default App;