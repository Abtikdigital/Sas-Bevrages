import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo/Logo.png"
import { Facebook, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
    const nav = useNavigate()
    return (
        <div className="bg-[#82B3D1] px-5 md:px-10 py-8">
            <div className="flex py-6 flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                    <div className="mb-6 text-lg font-semibold text-black">
                        <img src={Logo} className="w-32 h-32" />
                    </div>
                    <div className="flex   gap-3">
                        <input
                            placeholder="Enter Mail"
                            className="bg-[#141414] heading-2 text-[#BEBEBE] p-2.5 px-4 rounded-lg  min-w-0"
                        />
                        <button className="linear-green-blue-btn whitespace-nowrap"

                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-1">
                        <h2 className="heading2 !text-black !text-left mb-4 !font-extrabold !text-xl">
                            Quick Links
                        </h2>
                        <ul className="heading2 !text-left  space-y-2 !text-sm ">
                            <li className="relative group w-fit cursor-pointer text-black/50 hover:opacity-90 hover:text-black/90  text-sm font-medium"
                                onClick={() => {
                                    nav("/")
                                }}>
                                Home
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                            <li className="w-fit relative group cursor-pointer  text-sm font-medium text-black/50 hover:opacity-90 hover:text-black/90"
                                onClick={() => {
                                    nav("/product")
                                }}
                            >
                                Product
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                            <li className="w-fit relative group cursor-pointer  text-sm font-medium text-black/50 hover:opacity-90 hover:text-black/90"
                                onClick={() => {
                                    nav("/contact-us")
                                }}
                            >
                                Contact
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h2 className="heading2 !text-black !text-left mb-4 !font-extrabold !text-xl">
                            Company
                        </h2>
                        <ul className="heading2 !text-left space-y-2 !text-sm">
                            <li className="group relative w-fit cursor-pointer text-sm font-medium text-black/50 hover:opacity-90 hover:text-black/90"
                                onClick={() => {
                                    nav("/about-us")
                                }}
                            >
                                About Us
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                            <li className="group relative w-fit text-sm font-medium cursor-pointer text-black/50 hover:opacity-90 hover:text-black/90"
                                onClick={() => {
                                    nav("/team")
                                }}
                            >
                                Team
                                <div className="w-0 h-[2.1px] group-hover:w-full duration-500 absolute bg-gradient-to-r from-gray-400 to-gray-700"></div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1  ">
                        <h2 className="heading2 !text-black  b !font-extrabold !text-xl !text-left mb-4">
                            Social Links
                        </h2>
                        <ul className="heading2 !text-left  space-y-2 !text-sm px-2">
                            <li className="relative group  w-fit text-sm font-medium   cursor-pointer text-black/50 hover:opacity-90 hover:text-black/90">

                                <Facebook className="rounded-full p-1.5 text-white bg-gray-500 w-9 h-9" />
                            </li>
                            <li className="relative group w-fit text-sm font-medium cursor-pointer text-black/50 hover:opacity-90 hover:text-black/90">

                                <Linkedin className="rounded-full p-1.5 text-white bg-gray-500 w-9 h-9"  />
                            </li>
                            <li className="relative group w-fit text-sm font-medium cursor-pointer text-black/50 hover:opacity-90 hover:text-black/90">
                                <Instagram className="rounded-full p-1.5 text-white bg-gray-500 w-9 h-9" />

                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#333333] h-0.5 w-full my-6"></div>

            <div className="heading2 text-center md:text-left  !text-sm !font-bold !text-black/80">
                ©2025 abtik.Design - All rights reserved.
            </div>
        </div>
    );
};

export default Footer;