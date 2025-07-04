import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import OurProducts from "../Sections/OurProducts";
import TeamMember from "../Sections/TeamMember";
import AboutUsImage from "../assets/Products/Product1.png";
import HeroImage from "../assets/Hero/Image1.png";
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
  return (
    <>
      {/* Navbar Section */}
      <Navbar />
      {/* Hero Section */}
      <section className="px-10 flex flex-col space-y-10 py-10 justify-center items-center">
        <h1 className="heading1">Build your landings in minutes</h1>
        <h2 className="heading2">
          The night is dark and full of terrors. What is dead may never die. And
          now his watch is ended. All men must die.
        </h2>
        <div className="flex justify-center items-center">
          <button className="linear-green-blue-btn ">Contact Us</button>
        </div>
      </section>
      {/* Image Section */}
      <div className="px-10 py-10">
        <img src={HeroImage} className="rounded-4xl" />
      </div>

      {/* About Us */}
      <section className="px-10 py-10 space-y-10">
        <h2 className="heading1">About Us</h2>
        <h3 className="heading2">
          The night is dark and full of terrors. What is dead may never die. And
          now his watch is ended. All men must die.
        </h3>
        <div className="flex flex-col md:flex-row gap-10 ">
          {[
            { img: AboutUsImage, name: "Name1", position: "Position1" },
            { img: AboutUsImage, name: "Name1", position: "Position1" },
            { img: AboutUsImage, name: "Name1", position: "Position1" },
          ].map((ele) => (
            <div className=" w-full md:w-1/3 rounded-lg">
              <img src={ele.img} className="w-full" />
              <h2 className="heading2">{ele.name}</h2>
              <h3 className="heading2">{ele.position}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <OurProducts />
      {/* Team Member Section */}
      <TeamMember />
      {/* Contact Section */}
      <section className="px-10 py-10 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8071.6500495948085!2d72.5352335011682!3d23.02993900223287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8535bcea7565%3A0xa6cc80b678e015cb!2sKaffa%20Coffee%20Roasters!5e0!3m2!1sen!2sin!4v1751544390946!5m2!1sen!2sin"
            height="450"
            className="border-0 w-full"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
            &nbsp;
          </iframe>
        </div>

        <form className="bg-[#82B3D1] p-8 w-full md:w-1/2 rounded-4xl flex flex-col gap-3 justify-evenly" onSubmit={handleSubmit(onSubmit)}>
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
          <div>
            <textarea
              className="w-full bg-[#141414] heading-2 text-[#BEBEBE] p-2.5 rounded-lg"
              placeholder="Enter Your Message "
              rows={3}
              {...register("message")}
            ></textarea>
          </div>
          <div>
            <button className="linear-green-blue-btn" type="submit">Submit</button>
          </div>
        </form>
      </section>
      {/* Footer Section */}
      <Footer />
    </>
  );
};
export default Home;
