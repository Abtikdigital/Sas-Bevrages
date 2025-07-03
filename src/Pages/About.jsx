import Navbar from "../Sections/Navbar";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Sections/Footer";
import TeamMember from "../Sections/TeamMember";

const about = () => {
    return (
        <>
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
            <section className="px-10 py-10 ">
                <div className="bg-[#82B3D1]  min-h-94 rounded-4xl">check</div>
            </section>

            {/* About Company Section */}
            <section className="px-10 py-10 flex flex-col md:flex-row space-y-10">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="heading1">About Company</h2>
                    <div className="heading2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        ut mauris nec ante iaculis iaculis eget et urna. Mauris pellentesque
                        aliquam lacus, non interdum nunc facilisis sit amet.
                    </div>
                    <div className="heading2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        ut mauris nec ante iaculis iaculis eget et urna. Mauris pellentesque
                        aliquam lacus, non interdum nunc facilisis sit amet.
                    </div>
                    <div className="heading2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        ut mauris nec ante iaculis iaculis eget et urna. Mauris pellentesque
                        aliquam lacus, non interdum nunc facilisis sit amet.
                    </div>
                </div>
                <div
                    className="grid w-full md:w-1/2 gap-3 grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2
                "
                >
                    <div className="  rounded-lg    bg-[#82B3D1]">12</div>
                    <div className=" rounded-lg   bg-[#82B3D1]">12</div>
                    <div className=" rounded-lg   bg-[#82B3D1] md:col-span-2">12</div>
                </div>
            </section>

            {/* Team Section */}
            <TeamMember />
            <Footer />
        </>
    );
};
export default about;
