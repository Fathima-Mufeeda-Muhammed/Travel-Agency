import React from "react";

const images = [
  "/Images/travel7.jpg",
  "/Images/travel6.jpg",
  "/Images/travel8.jfif",
  "/Images/travel9.webp",
  "/Images/travel5.jpg",
  "/Images/travel2.webp",
  "/Images/travel4.jpg",
  "/Images/travel10.jfif",
];

const Gallery = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/travel1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">
          <h4 className="text-4xl md:text-6xl font-bold text-white">Gallery</h4>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4 ">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <div className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
              <img src={image} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
