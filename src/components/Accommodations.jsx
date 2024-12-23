import React, { useState } from 'react';

const Accommodations = () => {
  const [isMapView, setIsMapView] = useState(false);

  const toggleView = () => {
    setIsMapView(!isMapView);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Living apartment that enhances your life
          </h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
         
          <div className="flex items-center space-x-4 mb-6">
            <input
              type="text"
              placeholder="Location"
              className="flex-1 p-2 border rounded shadow-sm focus:outline-none"
            />
            <select className="p-2 border rounded shadow-sm">
              <option>Apartment type</option>
            </select>
            <input
              type="text"
              placeholder="Price range"
              className="p-2 border rounded shadow-sm focus:outline-none"
            />
            <button className="p-2 bg-black text-white rounded shadow">Search</button>
          </div>

          <div className="text-right mb-4">
            <button
              onClick={toggleView}
              className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
              {isMapView ? 'See List view' : 'See Map view'}
            </button>
          </div>

         
          {isMapView ? (
            <div className="w-full h-96 bg-gray-200 flex justify-center items-center">
              <iframe
                title="Map"
                className="w-full h-full border rounded"
                src="https://www.google.com/maps/embed"
              ></iframe>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className="border rounded shadow-sm p-4 bg-white">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Apartment"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <div className="text-gray-700 font-medium">GRA, Port-Harcourt, Rivers state</div>
                  <div className="text-gray-500 text-sm">4 bedrooms | Swimming pool | Gym house</div>
                  <div className="text-black font-bold mt-2">N500,000.00/yr</div>
                  <button className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    View details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Accommodations;
