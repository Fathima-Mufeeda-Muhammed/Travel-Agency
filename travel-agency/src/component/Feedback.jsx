import React from "react";
import {
  FaConciergeBell,
  FaHotel,
  FaPlane,
  FaUmbrellaBeach,
} from "react-icons/fa";

const feedbacks = [
  {
    name: "Muhammed",
    image: "/Images/client1.jfif",
    text: "My trip was unforgettable! The seamless booking process made everything stress-free.",
    destination: "New York, USA",
  },
  {
    name: "Muhsin",
    image: "/Images/client2.jpg",
    text: "I loved every moment of my journey! The personalized service exceeded my expectations.",
    destination: "London, UK",
  },
  {
    name: "Munavver",
    image: "/Images/client3.webp",
    text: "A fantastic experience from start to finish! Every detail was taken care of perfectly.",
    destination: "Sydney, Australia",
  },
];

const Feedback = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <img
                src={feedback.image}
                className="w-24 h-24 rounded-full mx-auto mb-4 "
              />
              <h3 className="text-xl font-bold mb-2">{feedback.name}</h3>
              <p className="text-gray-600">{feedback.destination}</p>
              <p className="text-gray-600 italic">{feedback.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
