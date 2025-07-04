import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Member1Image from "../assets/Team/Member1.png";

const TeamMember = () => {
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
    <>
      {/* Our Experts Teams */}
      <motion.section
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
          Our Team Experts
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
        <div className="flex flex-col md:flex-row gap-10">
          {[
            { img: Member1Image, name: "Name1", position: "Position1" },
            { img: Member1Image, name: "Name1", position: "Position1" },
            { img: Member1Image, name: "Name1", position: "Position1" },
          ].map((ele, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={cardElementFadeIn}
              custom={index + 2} // Start after section title and description
              className="w-full md:w-1/3 rounded-lg"
            >
              <motion.img
                src={ele.img}
                className="w-full"
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={cardElementFadeIn}
                custom={index + 2}
              />
              <motion.h2
                className="heading2"
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={cardElementFadeIn}
                custom={index + 3}
                style={{fontFamily:"Lilita One"}}
              >
                {ele.name}
              </motion.h2>
              <motion.h3
                className="heading2"
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={cardElementFadeIn}
                custom={index + 4}
                style={{fontFamily:"Lilita One"}}

              >
                {ele.position}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default TeamMember;