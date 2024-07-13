/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

const Carousel = ({ data, interval = 3000, onChange }) => {
  const [startIndex, setStartIndex] = useState(0);
  const scrollTimer = useRef(null);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % data.length);
  };

  const getVisibleItems = () => {
    let visibleItems = [];
    for (let i = 0; i < 3; i++) {
      visibleItems.push(data[(startIndex + i) % data.length]);
    }
    return visibleItems;
  };

  const startAutoScroll = () => {
    scrollTimer.current = setInterval(() => {
      handleNext();
    }, interval);
  };

  const stopAutoScroll = () => {
    if (scrollTimer.current) {
      clearInterval(scrollTimer.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(startIndex);
    }
  }, [startIndex, onChange]);

  return (
    <div className="relative">
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">
        &lt;
      </button>
      {getVisibleItems().map((item, index) => (
        <button
          key={index}
          onClick={() => {
            if (onChange) {
              onChange((startIndex + index) % data.length);
            }
          }}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          className={`flex items-center p-4 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 ${
            (startIndex + index) % data.length === startIndex ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <img
            src={item.image}
            alt={item.author}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-semibold">{item.author}</p>
            <p className="text-gray-500">{item.position}</p>
          </div>
        </button>
      ))}
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
