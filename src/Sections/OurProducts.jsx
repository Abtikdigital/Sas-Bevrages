import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Product1 from "../assets/Products/Product1.png";
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
        delay: i * 0.2, // Stagger delay for each element
      },
    }),
  };

  // Hook for section visibility
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionFadeIn}
      className="px-10 py-10 space-y-10"
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
        className="heading2"
      >
        The night is dark and full of terrors. What is dead may never die. And
        now his watch is ended. All men must die.
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { img: Product1, title: "Title", description: "Description Added ", price: "10", star: 4 },
          { img: Product1, title: "Title", description: "Description Added ", price: "10", star: 4 },
          { img: Product1, title: "Title", description: "Description Added ", price: "10", star: 4 },
          { img: Product1, title: "Title", description: "Description Added ", price: "10", star: 4 },
          { img: Product1, title: "Title", description: "Description Added ", price: "10", star: 4 },
          { img: Product1, title: "Title", description: "Description Added ", price: "10", star: 4 },
        ].map((ele, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={cardElementFadeIn}
            custom={index + 2} // Start after section title and description
          >
            <motion.img
              src={ele.img}
              className="w-full"
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={cardElementFadeIn}
              custom={index + 2}
            />
            <div className="p-3 space-y-2">
              <motion.div
                className="flex flex-col space-y-2 items-start md:flex-row md:justify-between heading2"
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={cardElementFadeIn}
                custom={index + 3}
              >
                Price: {ele.price}/-
                <div className="flex">
                  {Array.from({ length: ele.star }).map((_, starIndex) => (
                    <motion.div
                      key={starIndex}
                      initial="hidden"
                      animate={sectionInView ? "visible" : "hidden"}
                      variants={cardElementFadeIn}
                      custom={index + 3 + (starIndex + 1) * 0.1} // Stagger stars within price section
                    >
                      <Star fill="#FFDF28" stroke="none" className="outline-0 ring-0" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.h2
                className="heading2 !text-left"
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={cardElementFadeIn}
                custom={index + 4}
              >
                {ele.title}
              </motion.h2>
              <motion.p
                className="heading2 !text-left"
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={cardElementFadeIn}
                custom={index + 5}
              >
                {ele.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurProducts;