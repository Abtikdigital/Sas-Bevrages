import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      console.error("Error While Submit Contact Form");
    }
  };

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
  const [mapRef, mapInView] = useInView({ threshold: 0.2, triggerOnce: true });
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

      {/* Map Section */}
      <motion.section
        ref={mapRef}
        initial="hidden"
        animate={mapInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="px-5 md:px-10 py-5 md:py-10"
      >
        <motion.div
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
          variants={elementFadeIn}
          custom={0}
          className="bg-[#82B3D1] min-h-94 rounded-4xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8071.6500495948085!2d72.5352335011682!3d23.02993900223287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8535bcea7565%3A0xa6cc80b678e015cb!2sKaffa%20Coffee%20Roasters!5e0!3m2!1sen!2sin!4v1751544390946!5m2!1sen!2sin"
            height="450"
            className="border-0 w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={sectionFadeIn}
        className="flex flex-col md:flex-row px-5 md:px-10 py-5 md:py-10 gap-6"
      >
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h2
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={elementFadeIn}
            custom={0}
            className="heading1 !text-left"
          >
            Contact Details
          </motion.h2>
          <motion.h3
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={elementFadeIn}
            custom={1}
            className="heading2 !text-left"
          >
            The night is dark and full of terrors. What is dead may never die.
            And now his watch is ended. All men must die.
          </motion.h3>
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={elementFadeIn}
            custom={2}
            className="flex flex-col space-y-3"
          >
            <div className="flex gap-3">
              <div className="bg-gradient-to-r cursor-pointer from-[#00EA87] to-[#78CBFF] text-white p-1.5 rounded-lg">
                <Phone className="text-white w-5 h-5 " />
              </div>
              <a className="heading2 cursor-pointer !text-sm">+91 9638689279</a>
            </div>
            <div className="flex gap-3">
              <div className="bg-gradient-to-r cursor-pointer from-[#00EA87] to-[#78CBFF] text-white p-1.5 rounded-lg">
                <Mail className=" w-5 h-5" />
              </div>
              <a className="heading2 cursor-pointer !text-sm">sasbevrages@gmail.com</a>
            </div>
            <div className="flex gap-3">
              <div className="bg-gradient-to-r cursor-pointer from-[#00EA87] to-[#78CBFF] text-white p-1.5 rounded-lg">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <a className="heading2 cursor-pointer !text-sm">
                104, shilp corporate Park, Iscon Ahmedabad
              </a>
            </div>
          </motion.div>
        </div>
        <motion.form
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={sectionFadeIn}
          className="bg-[#82B3D1] p-8 w-full md:w-1/2 rounded-4xl flex flex-col gap-3 justify-evenly"
          onSubmit={handleSubmit(onSubmit)}
        >
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={elementFadeIn}
            custom={3}
          >
            <input
              className="bg-[#141414] heading-2 w-full text-[#BEBEBE] p-2.5 rounded-lg"
              placeholder="Enter Your Name"
              type="text"
              {...register("name", {
                required: "* Name Is Required",
              })}
            />
          </motion.div>
          {errors?.name && (
            <div


              className="heading2 !text-red-500 !text-left"
            >
              {errors?.name?.message}
            </div>
          )}
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={elementFadeIn}
            custom={5}
          >
            <input
              className="bg-[#141414] heading-2 w-full text-[#BEBEBE] p-2.5 rounded-lg"
              placeholder="Enter Your Email"
              type="text"
              {...register("email", {
                required: "* Email Is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "* Please enter a valid email address",
                },
              })}
            />
          </motion.div>
          {errors?.email && (
            <div
            
              className="heading2 !text-red-500 !text-left"
            >
              {errors?.email?.message}
            </div>
          )}
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={elementFadeIn}
            custom={7}
          >
            <textarea
              className="w-full bg-[#141414] heading-2 text-[#BEBEBE] p-2.5 rounded-lg"
              placeholder="Enter Your Message"
              type="text"
              rows={3}
              {...register("message")}
            ></textarea>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={elementFadeIn}
            custom={8}
          >
            <button className="linear-green-blue-btn" type="submit">
              Submit
            </button>
          </motion.div>
        </motion.form>
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;