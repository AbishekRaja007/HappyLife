import React from "react";
import c from "../../assets/images/c.jpg";
import "./Homepage.css"; // Import CSS file

const categories = [
  {
    title: "Venues",
    description: "Banquet Halls, Marriage Garden / Lawn...",
    image: "/images/venue.jpg", // Replace with actual image path
    bgColor: "bg-blue-100",
  },
  {
    title: "Photographers",
    description: "Photographers",
    image: "/images/photographers.jpg",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Makeup",
    description: "Bridal Makeup, Family Makeup",
    image: "/images/makeup.jpg",
    bgColor: "bg-red-100",
  },
  {
    title: "Pre Wedding Shoot",
    description: "Pre Wedding Shoot Locations, Pre Wed...",
    image: "/images/pre-wedding.jpg",
    bgColor: "bg-purple-100",
  },
  {
    title: "Planning & Decor",
    description: "Wedding Planners, Decorators",
    image: "/images/decor.jpg",
    bgColor: "bg-orange-100",
  },
  {
    title: "Bridal Wear",
    description: "Bridal Lehengas, Kanjeevaram / Silk Sa...",
    image: "/images/bridal-wear.jpg",
    bgColor: "bg-green-100",
  },
];

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Background Image */}
      <div className="img1">
        <img src={c} alt="Wedding Celebration" />
      </div>

      {/* Wedding Categories Section */}
      <div className="container mx-auto px-6 py-8">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Wedding Categories</h2>
          <a href="#" className="text-pink-500 text-sm font-semibold">
            View all Categories &gt;
          </a>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex items-center rounded-lg overflow-hidden ${category.bgColor} shadow-lg`}
            >
              {/* Text Content */}
              <div className="p-6 w-2/3">
                <h3 className="text-lg font-semibold">{category.title} ⌄</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>

              {/* Image */}
              <div className="w-1/3">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
