import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import OurProducts from "../Sections/OurProducts";
import TeamMember from "../Sections/TeamMember";

import HeroImage from "../assets/Hero/105349.jpg";
import AboutUsImage from "../assets/Products/Product1.png";
import Image1 from "../assets/Hero/Slider/Image1.jpeg"
import Image2 from "../assets/Hero/Slider/Image2.jpeg"
import Image3 from "../assets/Hero/Slider/Image3.jpeg"
import Image4 from "../assets/Hero/Slider/Image3.jpeg"



// Animation Variants
const sectionFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const elementFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.2 },
  }),
};

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderImages = [Image1,Image2,Image3,Image4];

  // Auto Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const onSubmit = async (formData) => {
    try {
      let res = await axios.post("/api/contactApis.js", formData);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          text: "Your Response Has Been Submitted",
          draggable: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Error While Inserting Data",
          draggable: true,
        });
      }
    } catch (error) {
      
      Swal.fire({
        icon: "error",
        text: error?.response?.data?.message || "Error While Inserting Data",
        draggable: true,
      });
      console.error("error occured",error)
    }
  };

  // View Observer Hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [productsRef, productsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });

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
        <motion.h1 variants={elementFadeIn} custom={0} className="heading1 tracking-wider">
          Build your landings in minutes
        </motion.h1>
        <motion.h2 variants={elementFadeIn} custom={1} className="heading2">
          The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.
        </motion.h2>
        <motion.div variants={elementFadeIn} custom={2}>
          <button className="linear-green-blue-btn" >
            Contact Us
          </button>
        </motion.div>
      </motion.section>

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
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto max-h-[80vh]" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Arrows */}
          <div className="md:hidden">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="hidden md:flex justify-center mt-6 space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* About Us */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="px-5 md:px-10 py-5 md:py-10 space-y-5 md:space-y-10"
      >
        <h2 className="heading1">About Us</h2>
        <h3 className="heading2">
          The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.
        </h3>
        <div className="flex flex-col md:flex-row gap-10">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={elementFadeIn}
              className="w-full md:w-1/3 rounded-lg space-y-2"
            >
              <img
                src={AboutUsImage}
                className="w-full hover:-translate-y-2.5 transition-all cursor-pointer duration-300"
              />
              <h2 className="heading2 !text-black !text-xl !font-extrabold">Name{index + 1}</h2>
              <h3 className="heading2">Position{index + 1}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Products */}
      <motion.div ref={productsRef} initial="hidden" animate={productsInView ? "visible" : "hidden"} variants={sectionFadeIn}>
        <OurProducts />
      </motion.div>

      {/* Team */}
      <motion.div ref={teamRef} initial="hidden" animate={teamInView ? "visible" : "hidden"} variants={sectionFadeIn}>
        <TeamMember />
      </motion.div>

      {/* Contact Form */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="px-5 md:px-10 py-5 md:py-10 flex flex-col md:flex-row gap-6"
      >
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29381.20767399553!2d72.47270400000001!3d22.9998592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aee6c89a621%3A0x872df2d55fbb0008!2sLJ%20University!5e0!3m2!1sen!2sin!4v1751706409503!5m2!1sen!2sin"
            height="450"
            className="border-0 w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#82B3D1] p-4 py-8 md:p-8 w-full md:w-1/2 rounded-4xl flex flex-col gap-3 justify-evenly"
        >
          <input
            className="bg-[#141414] heading-2 w-full text-[#BEBEBE] p-2.5 rounded-lg"
            placeholder="Enter Your Name"
            type="text"
            {...register("name", { required: "* Name Is Required" })}
          />
          {errors.name && <div className="heading2 !text-red-500 !text-left">{errors.name.message}</div>}
          <input
            className="bg-[#141414] heading-2 w-full text-[#BEBEBE] p-2.5 rounded-lg"
            placeholder="Enter Your Mail"
            {...register("email", {
              required: "* Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "* Please enter a valid email address",
              },
            })}
          />
          {errors.email && <div className="heading2 !text-red-500 !text-left">{errors.email.message}</div>}
          <textarea
            className="w-full bg-[#141414] heading-2 text-[#BEBEBE] p-2.5 rounded-lg"
            placeholder="Enter Your Message"
            rows={3}
            {...register("message")}
          ></textarea>
          <button className="linear-green-blue-btn text-white w-fit" type="submit" >
            Submit
          </button>
        </form>
      </motion.section>

      <Footer />
    </>
  );
};

export default Home;
