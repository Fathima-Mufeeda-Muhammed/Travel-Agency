import React from "react";

const destinations = [
  {
    image: "/Images/travel6.jpg",
    title: "Paris,France",
    description:
      "Discover the enchanting city of Paris, where iconic landmarks like the Eiffel Tower and the Louvre await you. Immerse yourself in rich culture, exquisite cuisine, and charming neighborhoods for an unforgettable getaway!",
  },
  {
    image: "/Images/travel7.jpg",
    title: "Bali,Indonesia",
    description:
      "Experience the magic of Bali, Indonesia, where pristine beaches meet lush rice terraces and vibrant culture. Discover ancient temples, indulge in local cuisine, and unwind in this tropical paradise!",
  },
  {
    image: "/Images/travel8.jfif",
    title: "New York,USA",
    description:
      "Explore the bustling streets of New York City, where iconic landmarks like Times Square and Central Park await. Immerse yourself in a vibrant cultural scene, world-class dining, and endless entertainment in the city that never sleeps!",
  },
  {
    image: "/Images/travel9.webp",
    title: "Tokiyo,Japan",
    description:
      "Discover the captivating blend of tradition and innovation in Tokyo, Japan, from serene temples to dazzling skyscrapers. Indulge in exquisite cuisine, vibrant neighborhoods, and a rich cultural tapestry that makes every visit unforgettable!",
  },
];

const Destination = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Destinations
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.title}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{city.title}</h3>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
