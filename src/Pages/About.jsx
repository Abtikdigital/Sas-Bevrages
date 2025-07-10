import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import TeamMember from "../Sections/TeamMember";
import Slider from "../Sections/Slider";

const about = () => {
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

  // Hooks for section visibility
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [companyRef, companyInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="px-5 md:px-10 flex flex-col space-y-5 py-5 md:space-y-10 md:py-10 justify-center items-center"
      >
        <motion.h1
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={0}
          className="heading1"
        >
          Build your landings in minutes
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={1}
          className="heading2"
        >
          The night is dark and full of terrors. What is dead may never die. And
          now his watch is ended. All men must die.
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={2}
          className="flex justify-center items-center"
        >
          <button className="linear-green-blue-btn">Contact Us</button>
        </motion.div>
      </motion.section>

      {/* Image Section */}
    <Slider/>

      {/* About Company Section */}
      <motion.section
        ref={companyRef}
        initial="hidden"
        animate={companyInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="px-5 md:px-10 py-5 md:py-10 flex flex-col md:flex-row space-y-10"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <motion.h2
            initial="hidden"
            animate={companyInView ? "visible" : "hidden"}
            variants={elementFadeIn}
            custom={0}
            className="heading1"
          >
            About Company
          </motion.h2>
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mauris nec ante iaculis iaculis eget et urna. Mauris pellentesque aliquam lacus, non interdum nunc facilisis sit amet.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mauris nec ante iaculis iaculis eget et urna. Mauris pellentesque aliquam lacus, non interdum nunc facilisis sit amet.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mauris nec ante iaculis iaculis eget et urna. Mauris pellentesque aliquam lacus, non interdum nunc facilisis sit amet.",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={companyInView ? "visible" : "hidden"}
              variants={elementFadeIn}
              custom={index + 1}
              className="heading2"
            >
              {text}
            </motion.div>
          ))}
        </div>
        <div className="grid w-full md:w-1/2 gap-3 grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2">
          {["12", "12", "12"].map((content, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={companyInView ? "visible" : "hidden"}
              variants={elementFadeIn}
              custom={index + 4} // Start after text paragraphs
              className={`rounded-lg bg-[#82B3D1] ${index === 2 ? "md:col-span-2" : ""}`}
            >
              {content}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <TeamMember />
      <Footer />
    </>
  );
};

export default about;