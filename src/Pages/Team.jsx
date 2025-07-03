import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import TeamMember from "../Sections/TeamMember";

const Team = () => {
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

   <TeamMember/>
      <Footer />
    </>
  );
};
export default Team;
