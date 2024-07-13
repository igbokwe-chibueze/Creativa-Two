import { useState, useEffect, useRef, useCallback } from "react";
import { testimonialsData } from "../constants/Data";
import { QuotationIcon } from "../constants/Icons";

const Testimonials = () => {
  // State to track the selected testimonial subject and text
  const [selectedTestimonial, setSelectedTestimonial] = useState({
    subject: testimonialsData[0].subject,
    body: testimonialsData[0].body,
  });
  // State to track the starting index of visible testimonials
  const [startIndex, setStartIndex] = useState(0);
  // Interval for auto-scrolling
  const scrollInterval = 6000; // seconds
  // Reference to store the auto-scroll timer
  const scrollTimer = useRef(null);

  // Callback to handle the "previous" button click
  const handlePrev = useCallback(() => {
    // Update the start index to show the previous set of testimonials
    setStartIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  // Callback to handle the "next" button click
  const handleNext = useCallback(() => {
    // Update the start index to show the next set of testimonials
    setStartIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  // Function to get the currently visible testimonials based on startIndex
  const getVisibleTestimonials = useCallback(() => {
    return testimonialsData.slice(startIndex, startIndex + 3).concat(
      testimonialsData.slice(0, Math.max(0, startIndex + 3 - testimonialsData.length))
    );
  }, [startIndex]);

  // Function to start the auto-scroll timer
  const startAutoScroll = useCallback(() => {
    // Set an interval to automatically call handleNext every scrollInterval milliseconds
    scrollTimer.current = setInterval(handleNext, scrollInterval);
  }, [handleNext, scrollInterval]);

  // Function to stop the auto-scroll timer
  const stopAutoScroll = useCallback(() => {
    // Clear the interval if it exists
    if (scrollTimer.current) {
      clearInterval(scrollTimer.current);
    }
  }, []);

  // Effect to start auto-scrolling when the component mounts and stop it when it unmounts
  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [startAutoScroll, stopAutoScroll]);

  // Effect to update the selected testimonial when the startIndex changes
  useEffect(() => {
    setSelectedTestimonial({
      subject: testimonialsData[startIndex].subject,
      body: testimonialsData[startIndex].body,
    });
  }, [startIndex]);

  return (
    <section id="testimonials" className="min-h-screen">
      <div className="max-w-screen-xl mx-auto text-center px-4 lg:px-12 py-8 lg:py-16">
        {/* Container for the testimonials with mouse events to control auto-scroll */}
        <div 
          className="grid grid-cols-1 md:grid-cols-8 md:gap-4 lg:gap-12 p-4 hover:shadow-md"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {/* Sidebar with the list of testimonials */}
          <div className=" hidden md:flex md:col-span-4 lg:col-span-3 md:space-y-4 md:flex-col justify-center items-center">
            {/* Button to show the previous set of testimonials */}
            <button 
              onClick={handlePrev} 
              className="btn-carousel"
            >
              ^
            </button>

            {/* Render the currently visible testimonials */}
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={`flex items-center p-4 w-full h-20 rounded-lg shadow-md 
                  ${ index === 0 ? ' bg-skin-fill-tertiary' : ' border border-skin-border' }`
                }
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className=" text-start font-normal space-y-1 ">
                  <h4 className=" text-base lg:text-lg font-extrabold tracking-tight leading-none text-skin-main">{testimonial.author}</h4>
                  <p className=" text-sm lg:text-base text-skin-muted">{testimonial.position}</p>
                </div>
              </div>
            ))}

            <button 
              onClick={handleNext} 
              className="btn-carousel"
            >
              v
            </button>
          </div>
          
          {/* Main section to display the selected testimonial subject and text */}
          <div className=" md:col-span-4 lg:col-span-5 flex flex-col justify-center items-start h-full">
            <QuotationIcon className="text-skin-icon mb-4" />
            {selectedTestimonial && (
              <blockquote className="text-start space-y-4">
                <h3 className="text-2xl lg:text-4xl font-bold text-skin-main">{selectedTestimonial.subject}</h3>
                <p className="text-lg lg:text-3xl font-normal text-skin-muted">&quot;{selectedTestimonial.body}&quot;</p>
              </blockquote>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
