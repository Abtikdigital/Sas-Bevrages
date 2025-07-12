import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
const Footer = () => {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async () => {
        try {
            let res = await axios.post("/api/contactApis.js")
            if (res?.status == 201) {
                Swal.fire({
                    icon: "success",
                    text: res?.data?.message || "Email Subscribed Successfully"
                })
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Error While Subscribing Email"
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: error?.response?.data?.message || "Error While Inserting Mail"
            })
        }
    }

    return (
        <div className="bg-[#82B3D1] px-5 md:px-10 py-8">
            {/* Link Section */}
            <div className="flex py-6 flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Logo and Newsletter Section */}
                <div className="w-full lg:w-1/3">
                    <div className="mb-6 text-lg font-semibold text-black">
                        <img src={Logo} className="w-32 h-32" alt="Logo" />
                    </div>
                    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="Enter Mail"
                            {...register("email", {
                                required: "* Email Is Required"
                            })}
                            className="bg-[#141414] heading-2 text-[#BEBEBE] p-2.5 px-4 rounded-lg min-w-0 flex-1"
                        />
                        <button className="linear-green-blue-btn whitespace-nowrap"

                        >
                            Submit
                        </button>
                    </form>
                    {errors?.email&&<div className="heading2 pt-1 !text-left !text-red-500 ">{errors?.email?.message}</div>}
                </div>

                {/* Links and Contact Section */}
                <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Contact Section */}
                    <div className="flex-1">
                        <h2 className="heading2 !text-black !text-left mb-4 !font-extrabold !text-xl">
                            Contact Us
                        </h2>
                        <ul className="heading2 !text-left space-y-3 !text-sm">
                            <li className="group w-fit cursor-pointer text-sm font-medium text-black/50 hover:text-black/90 flex items-center gap-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 w-5 h-5" />
                                <span className="relative">
                                    info@abtik.design
                                    <div className="absolute bottom-0 h-[2.1px] w-full hidden group-hover:block bg-gradient-to-r from-gray-400 to-gray-700"></div>
                                </span>
                            </li>
                            <li className="group w-fit cursor-pointer text-sm font-medium text-black/50 hover:text-black/90 flex items-center gap-3">
                                <FontAwesomeIcon icon={faPhone} className="text-gray-600 w-5 h-5" />
                                <span className="relative">
                                    +1 (555) 123-4567
                                    <div className="absolute bottom-0 h-[2.1px] w-full hidden group-hover:block bg-gradient-to-r from-gray-400 to-gray-700"></div>
                                </span>
                            </li>
                            <li className="group w-fit cursor-pointer text-sm font-medium text-black/50 hover:text-black/90 flex items-start gap-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 w-5 h-5 mt-0.5" />
                                <span className="relative">
                                    123 Design Street<br />Creative City, CC 12345
                                    <div className="absolute bottom-0 h-[2.1px] w-full hidden group-hover:block bg-gradient-to-r from-gray-400 to-gray-700"></div>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex-1">
                        <h2 className="heading2 !text-black !text-left mb-4 !font-extrabold !text-xl">
                            Quick Links
                        </h2>
                        <ul className="heading2 !text-left space-y-2 !text-sm">
                            <li
                                className="relative group w-fit cursor-pointer text-black/50 hover:opacity-90 hover:text-black/90 text-sm font-medium"
                                onClick={() => {
                                    nav("/");
                                }}
                            >
                                Home
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                            <li
                                className="w-fit relative group cursor-pointer text-sm font-medium text-black/50 hover:opacity-90 hover:text-black/90"
                                onClick={() => {
                                    nav("/product");
                                }}
                            >
                                Product
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                            <li
                                className="w-fit relative group cursor-pointer text-sm font-medium text-black/50 hover:opacity-90 hover:text-black/90"
                                onClick={() => {
                                    nav("/contact-us");
                                }}
                            >
                                Contact
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex-1">
                        <h2 className="heading2 !text-black !text-left mb-4 !font-extrabold !text-xl">
                            Company
                        </h2>
                        <ul className="heading2 !text-left space-y-2 !text-sm">
                            <li
                                className="group relative w-fit cursor-pointer text-sm font-medium text-black/50 hover:opacity-90 hover:text-black/90"
                                onClick={() => {
                                    nav("/about-us");
                                }}
                            >
                                About Us
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                            <li
                                className="group relative w-fit text-sm font-medium cursor-pointer text-black/50 hover:opacity-90 hover:text-black/90"
                                onClick={() => {
                                    nav("/team");
                                }}
                            >
                                Team
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Social Links Section */}
            <div className="flex justify-end mt-6">
                <div className="flex gap-3">
                    <div className="group cursor-pointer">
                        <div className="text-white bg-gray-500 hover:bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faFacebookF} className="!w-4 !h-4" />
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="text-white bg-gray-500 hover:bg-blue-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faLinkedinIn} className="!w-4 !h-4" />
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="text-white bg-gray-500 hover:bg-pink-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faInstagram} className="!w-5 !h-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#333333] h-0.5 w-full my-6"></div>

            <div className="heading2 text-center md:text-left !text-sm !font-bold !text-black/80">
                ©2025 abtik.Design - All rights reserved.
            </div>
        </div>
    );
};

export default Footer;