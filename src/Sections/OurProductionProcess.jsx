import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProcessImage from "../assets/Products/Product1.png";

const OurProductionProcess = () => {
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

  // Animation variants for sub-elements
  const elementFadeIn = {
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
      className="space-y-10"
    >
      <motion.h2
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={elementFadeIn}
        custom={0}
        className="heading1"
      >
        Our Production Process
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={elementFadeIn}
        custom={1}
        className="heading2"
      >
        The night is dark and full of terrors. What is dead may never die. And
        now his watch is ended. All men must die.
      </motion.p>
      <motion.div
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-10 p-10"
      >
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={2}
          className="md:row-span-2"
        >
          <img src={ProcessImage} className="h-full w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={3}
        >
          <img src={ProcessImage} className="h-full w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={4}
          className="md:row-span-2"
        >
          <img src={ProcessImage} className="h-full w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={5}
        >
          <img src={ProcessImage} className="h-full w-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OurProductionProcess;