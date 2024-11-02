import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/travel1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">
          <h4 className="text-4xl md:text-6xl font-bold text-white">About</h4>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="/Images/travel3.png"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              At Speed View, we are passionate about crafting unforgettable
              travel experiences tailored just for you. With a team of dedicated
              travel enthusiasts, we believe that every journey tells a story,
              and we’re here to help you write yours. Whether you're seeking a
              relaxing beach getaway, an adventurous trek through the mountains,
              or a cultural exploration in a bustling city, we take the time to
              understand your unique preferences and create personalized
              itineraries that exceed your expectations. Our extensive network
              of local partners and expertise in travel logistics ensures that
              you can explore the world with confidence, knowing that we’ve
              taken care of every detail. Join us in discovering the beauty of
              travel—your next adventure awaits!
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              At Speed View, our mission is to inspire and empower travelers to
              explore the world with confidence and joy. We strive to provide
              exceptional service, personalized itineraries, and meaningful
              experiences that foster connections with people, cultures, and the
              environment. Through our commitment to sustainability and local
              partnerships, we aim to create memorable journeys that enrich
              lives and promote responsible travel. Together, let’s discover the
              world, one adventure at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
