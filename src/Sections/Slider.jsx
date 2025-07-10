import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image1 from "../assets/Hero/Slider/Image1.jpeg";
import Image2 from "../assets/Hero/Slider/Image2.jpeg";
import Image3 from "../assets/Hero/Slider/Image3.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Slider = () => {
  const sliderImages = [Image1, Image2, Image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animation Variants
  const sectionFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Auto Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  const goToSlide = (index) => setCurrentSlide(index);

  const [imageRef, imageInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      {/* Image Slider */}
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="px-5 md:px-10 py-5 md:py-10"
      >
        <div className="relative">
          <div className="overflow-hidden rounded-4xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto max-h-[80vh]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Arrows */}
          <div className="">
            <button
              onClick={prevSlide}
              className="absolute left-4 cursor-pointer top-1/2 transform -translate-y-1/2 bg-black/80 bg-opacity-50 text-white p-2 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-black/80 bg-opacity-50 text-white p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="hidden md:flex justify-center mt-6 space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Slider;
