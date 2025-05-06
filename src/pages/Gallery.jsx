import { useState } from "react";
import { GalleryPage } from "../assets/assets";

const Gallery = () => {
  const itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < GalleryPage.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const currentItems = GalleryPage.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="min-h-screen px-6 py-10 bg-white"> 
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-600 mb-8">
        🎨 My Design Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((item, idx) => (
          <div
            key={idx}
            className=" dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center text-gray-700 dark:text-gray-200">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          style={{ backgroundColor: "rgb(33, 40, 53)" }}
          className="text-white px-5 py-2 rounded-full shadow-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 active:brightness-125"
        >
          ← Prev
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= GalleryPage.length}
          style={{ backgroundColor: "rgb(33, 40, 53)" }}
          className="text-white px-5 py-2 rounded-full shadow-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 active:brightness-125"
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default Gallery;