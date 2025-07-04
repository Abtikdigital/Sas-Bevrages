import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import OurProducts from "../Sections/OurProducts";
import TeamMember from "../Sections/TeamMember";
import AboutUsImage from "../assets/Products/Product1.png";
import HeroImage from "../assets/Hero/105349.jpg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      let res = await axios.post("/api/contactApis.js", formData);
      if (res.status == 201) {
        Swal.fire({
          icon: "success",
          text: "You Response Has Been Submitted",
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
      });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Hook for each section
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [productsRef, productsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="px-10 flex flex-col space-y-10 py-10 justify-center items-center"
      >
        <h1 className="heading1  tracking-wider "  >Build your landings in minutes</h1>
        <h2 className="heading2">
          The night is dark and full of terrors. What is dead may never die. And
          now his watch is ended. All men must die.
        </h2>
        <div className="flex justify-center items-center">
          <button className="linear-green-blue-btn" style={{fontFamily:"Lilita One"}}>Contact Us</button>
        </div>
      </motion.section>

      {/* Image Section */}
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="px-10 py-10"
      >
        <img src={HeroImage} className="rounded-4xl  " />
      </motion.div>
      

      {/* About Us */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="px-10 py-10 space-y-10"
      >
        <h2 className="heading1">About Us</h2>
        <h3 className="heading2">
          The night is dark and full of terrors. What is dead may never die. And
          now his watch is ended. All men must die.
        </h3>
        <div className="flex flex-col md:flex-row gap-10">
          {[
            { img: AboutUsImage, name: "Name1", position: "Position1" },
            { img: AboutUsImage, name: "Name1", position: "Position1" },
            { img: AboutUsImage, name: "Name1", position: "Position1" },
          ].map((ele, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }
                }
              }}
              className="w-full md:w-1/3 rounded-lg space-y-2"
            >
              <img src={ele.img} className="w-full" />
              <h2 className="heading2">{ele.name}</h2>
              <h3 className="heading2">{ele.position}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.div
        ref={productsRef}
        initial="hidden"
        animate={productsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <OurProducts />
      </motion.div>

      {/* Team Member Section */}
      <motion.div
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <TeamMember />
      </motion.div>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="px-10 py-10 flex flex-col md:flex-row gap-6"
      >
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8071.6500495948085!2d72.5352335011682!3d23.02993900223287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8535bcea7565%3A0xa6cc80b678e015cb!2sKaffa%20Coffee%20Roasters!5e0!3m2!1sen!2sin!4v1751544390946!5m2!1sen!2sin"
            height="450"
            className="border-0 w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form
          className="bg-[#82B3D1] p-8 w-full md:w-1/2 rounded-4xl flex flex-col gap-3 justify-evenly"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              className="bg-[#141414] heading-2 w-full text-[#BEBEBE] p-2.5 rounded-lg"
              placeholder="Enter Your Name"
              type="text"
              {...register("name", {
                required: "* Name Is Required",
              })} 
            />
          </div>
          {errors?.name && <div className="heading2 !text-red-500  !text-left">{errors?.name?.message}</div>}
          <div>
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
          </div>
          {errors?.email && <div className="heading2 !text-red-500 !text-left ">{errors?.email?.message}</div>}
          <div>
            <textarea
              className="w-full bg-[#141414] heading-2 text-[#BEBEBE] p-2.5 rounded-lg"
              placeholder="Enter Your Message"
              rows={3}
              {...register("message")}
            ></textarea>
          </div>
          <div>
            <button className="linear-green-blue-btn text-white" type="submit"
            style={{fontFamily:"Lilita One"}}
            >
              Submit
            </button>
          </div>
        </form>
      </motion.section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;