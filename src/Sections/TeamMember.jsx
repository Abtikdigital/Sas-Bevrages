import React from "react";
import Member1Image from "../assets/Team/Member1.png";
const TeamMember = () => {
    return (
        <>
            {/* Our Experts Teams */}
            <section className="px-10 py-10 space-y-10">
                <h2 className="heading1">Our Team Experts</h2>
                <h3 className="heading2">
                    The night is dark and full of terrors. What is dead may never die. And
                    now his watch is ended. All men must die.
                </h3>
                <div className="flex flex-col md:flex-row gap-10 ">
                    {[
                        { img: Member1Image, name: "Name1", position: "Position1" },
                        { img: Member1Image, name: "Name1", position: "Position1" },
                        { img: Member1Image, name: "Name1", position: "Position1" },
                    ].map((ele) => (
                        <div className=" w-full md:w-1/3 rounded-lg">
                            <img src={ele.img} className="w-full" />
                            <h2 className="heading2">{ele.name}</h2>
                            <h3 className="heading2">{ele.position}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
export default TeamMember;
