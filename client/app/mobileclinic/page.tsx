"use client"
import React, { useState } from 'react';

const MobileClinic = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // const nextClinicDate = new Date(2024, 10, 30).toLocaleDateString();

  const handleServiceSelect = (service: React.SetStateAction<string>) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  const handleSubmit = () => {
    if (selectedService) {
      setShowSuccess(true);
      setSelectedService('');
      setNotes('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 p-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-800">Next Mobile Clinic Visit</h2>
          <p className="text-lg text-blue-600 mt-2 font-medium">October 30, 2024</p>
        </div>
      </div>

      <div className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 pt-24 pb-20">
        {showSuccess && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm">
            <div className="mx-4 bg-green-100 border border-green-500 text-green-700 px-4 py-3 rounded relative">
              <span className="block sm:inline">Booking successful!</span>
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
              >
                <span className="text-green-700">&times;</span>
              </button>
            </div>
          </div>
        )}

        <div className="relative w-full">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-5 py-2.5 rounded-lg text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-600 flex justify-between items-center"
          >
            {selectedService || 'Select Service Type'}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-white" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" />
            </svg>
          </button>

          {isDropdownOpen && (
            <ul className="absolute w-full mt-2 shadow-lg bg-white py-2 rounded-lg max-h-96 overflow-auto z-50">
              {['General Checkup', 'Vaccination', 'Health Screening'].map((service) => (
                <li
                  key={service}
                  onClick={() => handleServiceSelect(service)}
                  className="py-2.5 px-5 hover:bg-blue-50 text-gray-800 text-sm cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
            Additional Notes
          </label>
          <textarea id="message" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write any additional information here..."
          />
        </div>

        <button type="button" onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
          Confirm Booking
        </button>
      </div>
    </section>
  );
};

export default MobileClinic;