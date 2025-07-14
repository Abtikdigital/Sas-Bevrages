import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/Products/Product1.jpeg";
import Image2 from "../assets/Products/Product2.jpeg"
import Image3 from "../assets/Products/Product3.jpeg"
import Image4 from "../assets/Products/Product4.jpeg"
import Image5 from "../assets/Products/Product5.jpeg"
import Image6 from "../assets/Products/Product6.jpeg"
import Image7 from "../assets/Products/Product7.jpeg"

import { Star } from "lucide-react";

const OurProducts = () => {
  // Animation variants for section
  const sectionFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for card elements
  const cardElementFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  };

  // Hook for section visibility
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // State to manage flip for each card
  const [flipped, setFlipped] = React.useState({});

  // Toggle flip state for a specific card (used for small screens)
  const toggleFlip = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Handle hover start (used for large screens)
  const handleHoverStart = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: true }));
  };

  // Handle hover end (used for large screens)
  const handleHoverEnd = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionFadeIn}
      className="px-5 md:px-10 py-5 space-y-5 md:py-10 md:space-y-10 bg-gray-100"
    >
      <motion.h2
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={cardElementFadeIn}
        custom={0}
        className="heading1"
      >
        Our Products
      </motion.h2>
      <motion.h3
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={cardElementFadeIn}
        custom={1}
        className="text-lg font-semibold text-center text-[#757575] max-w-2xl mx-auto"
      >
        Explore our carefully curated selection of premium bottled water and refreshing sodas — crafted to deliver purity, taste, and satisfaction for every lifestyle.
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            img: Image1,
            title: "Premium Widget",
            description: "A versatile widget designed for seamless performance and durability.",
            price: "10",
            star: 4,
            details: "Made with eco-friendly materials, this widget offers unmatched reliability and style.",
          },
          {
            img: Image2,
            title: "Elite Gadget",
            description: "Compact and powerful, perfect for everyday use.",
            price: "12",
            star: 5,
            details: "Featuring cutting-edge technology, this gadget ensures top performance.",
          },
          {
            img: Image3,
            title: "Smart Tool",
            description: "Innovative design for enhanced productivity.",
            price: "15",
            star: 4,
            details: "Engineered for precision, this tool is a must-have for professionals.",
          },
          {
            img: Image4,
            title: "Classic Device",
            description: "Timeless design with modern functionality.",
            price: "8",
            star: 3,
            details: "Combines elegance with practicality for a unique user experience.",
          },
          {
            img: Image5,
            title: "Pro Accessory",
            description: "Enhance your setup with this sleek accessory.",
            price: "20",
            star: 5,
            details: "High-quality materials ensure longevity and style.",
          },
          {
            img: Image6,
            title: "Eco-Friendly Item",
            description: "Sustainable and stylish for the modern user.",
            price: "18",
            star: 4,
            details: "Crafted with sustainability in mind, perfect for eco-conscious consumers.",
          },
        ].map((ele, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={cardElementFadeIn}
            custom={index + 2}
            className="relative w-full h-96 group [perspective:1000px] cursor-pointer md:hover:[transform:none]"
            onClick={() => toggleFlip(index)} // Click event for small screens
            onMouseEnter={() => window.innerWidth >= 768 && handleHoverStart(index)} // Hover for md and above
            onMouseLeave={() => window.innerWidth >= 768 && handleHoverEnd(index)} // Hover for md and above
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] bg-white border-white rounded-xl shadow-lg ${flipped[index] ? "[transform:rotateY(180deg)]" : ""} md:group-hover:[transform:rotateY(180deg)]`}
            >
              {/* Front of the card */}
              <div className="absolute w-full h-full bg-white rounded-xl overflow-hidden [backface-visibility:hidden]">
                <motion.img
                  src={ele.img}
                  className="w-full h-60 object-cover rounded-t-xl"
                  initial="hidden"
                  animate={sectionInView ? "visible" : "hidden"}
                  variants={cardElementFadeIn}
                  custom={index + 2}
                />
                <div className="p-4 space-y-2"> 
                  <motion.div
                    className="flex flex-col space-y-2 items-start md:flex-row md:justify-between text-lg font-semibold "
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    variants={cardElementFadeIn}
                    custom={index + 3}
                  >
                    <span>Price: ${ele.price}</span>
                    <div className="flex">
                      {Array.from({ length: ele.star }).map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          initial="hidden"
                          animate={sectionInView ? "visible" : "hidden"}
                          variants={cardElementFadeIn}
                          custom={index + 3 + (starIndex + 1) * 0.1}
                        >
                          <Star fill="#FFD700" stroke="none" className="w-5 h-5" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.h2
                    className=" heading2 text-xl font-bold  !text-left"
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    variants={cardElementFadeIn}
                    custom={index + 4}
                  >
                    {ele.title}
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 text-left text-sm truncate"
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    variants={cardElementFadeIn}
                    custom={index + 5}
                  >
                    {ele.description}
                  </motion.p>
                </div>
              </div>
              {/* Back of the card */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-[#82B3D1] to-[#4A90E2] text-white p-6 rounded-xl flex flex-col justify-center items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                <h3 className="text-2xl font-bold mb-4">{ele.title}</h3>
                <p className="text-lg">{ele.details}</p>
                <p className="mt-4 font-semibold">{window.innerWidth >= 768 ? "Hover out to return" : "Click to return"}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurProducts;