import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/travel1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">
          <h4 className="text-4xl md:text-6xl font-bold text-white">
            Contact Us
          </h4>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 mr-2" />
              <p>speedview@gmail.com.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-500 mr-2" />
              <p>+918888888888</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkedAlt className="text-blue-500 mr-2" />
              <p>
                Speed View,Near Manikoth Juma
                Masjid,Manikoth,Kanhangad,Kasaragod
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">
              Contact Our Travel Experts
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="Name">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="Email">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="Message">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Write Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded"
              >
                Send Your Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
