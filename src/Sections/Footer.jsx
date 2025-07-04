import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#82B3D1] px-6 sm:px-10 py-8">
            <div className="flex py-8 flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                    <div className="mb-6 text-lg font-semibold text-black">
                        Logo Sas Beverages
                    </div>
                    <div className="flex   gap-3">
                        <input
                            placeholder="Enter Mail"
                            className="bg-[#141414] heading-2 text-[#BEBEBE] p-2.5 px-4 rounded-lg  min-w-0"
                        />
                        <button className="linear-green-blue-btn whitespace-nowrap"
                        style={{fontFamily:"Lilita One"}}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-1">
                        <h2 className="heading2 !text-black !text-left mb-4">
                            Products
                        </h2>
                        <ul className="heading2 !text-left space-y-2">
                            <li className="relative group w-fit cursor-pointer" >
                                Beverages
                                <div className="w-0 h-0.5 group-hover:w-full duration-500 absolute bg-gradient-to-r from-[#00EA87] to-[#78CBFF]"></div>
                            </li>
                            <li className="w-fit relative group cursor-pointer">
                                Specialties
                                <div className="w-0 h-0.5 group-hover:w-full duration-500 absolute bg-gradient-to-r from-[#00EA87] to-[#78CBFF]"></div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="flex-1">
                        <h2 className="heading2 !text-black !text-left mb-4">
                            Company
                        </h2>
                        <ul className="heading2 !text-left space-y-2">
                            <li className="group relative w-fit cursor-pointer">
                                About Us
                                <div className="w-0 h-0.5 group-hover:w-full duration-500 absolute bg-gradient-to-r from-[#00EA87] to-[#78CBFF]"></div>
                            </li>
                            <li className="group relative w-fit cursor-pointer">
                                Careers
                                <div className="w-0 h-0.5 group-hover:w-full duration-500 absolute bg-gradient-to-r from-[#00EA87] to-[#78CBFF]"></div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="flex-1">
                        <h2 className="heading2 !text-black !text-left mb-4">
                            Support
                        </h2>
                        <ul className="heading2 !text-left space-y-2">
                            <li className="relative group w-fit cursor-pointer">
                                Contact Us
                                <div className="w-0 h-0.5 group-hover:w-full bg-gradient-to-r from-[#00EA87] to-[#78CBFF] absolute duration-500"></div>
                            </li>
                            <li className="relative group w-fit cursor-pointer">
                                Help Center
                                <div className="w-0 h-0.5 group-hover:w-full bg-gradient-to-r from-[#00EA87] to-[#78CBFF] absolute duration-500"></div>
                            </li>
                            <li className="relative group w-fit cursor-pointer">
                                Privacy Policy
                                <div className="w-0 h-0.5 group-hover:w-full bg-gradient-to-r from-[#00EA87] to-[#78CBFF] absolute duration-500"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-[#333333] h-0.5 w-full my-6"></div>
            
            <div className="heading2 text-center md:text-left">
                ©2025 abtik.Design - All rights reserved.
            </div>
        </div>
    );
};

export default Footer;