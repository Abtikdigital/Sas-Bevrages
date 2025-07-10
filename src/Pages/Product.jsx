import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import OurProductionProcess from "../Sections/OurProductionProcess";
import OurProducts from "../Sections/OurProducts";
import ProductHeroImage from "../assets/Hero/Image1.png";
import Slider from "../Sections/Slider";



const Product = () => {
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
  const [productionRef, productionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [productsRef, productsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      {/* Navbar Section */}
      <Navbar />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="px-5 md:px-10 flex flex-col space-y-5 md:space-y-10 py-5 md:py-10 justify-center items-center"
      >
        <motion.h1
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={0}
          className="heading1 "
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
          <button className="linear-green-blue-btn" >Contact Us</button>
        </motion.div>
      </motion.section>

      {/* Image Section */}
 <Slider/>

      {/* Our Production Process Section */}
      <motion.section
        ref={productionRef}
        initial="hidden"
        animate={productionInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
      >
        <OurProductionProcess />
      </motion.section>

      {/* Our Product Section */}
      <motion.section
        ref={productsRef}
        initial="hidden"
        animate={productsInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
      >
        <OurProducts />
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Product;