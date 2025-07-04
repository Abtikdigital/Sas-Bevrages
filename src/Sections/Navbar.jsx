import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact-us");
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className=" hidden  md:flex  justify-between items-center px-10 py-5 sticky top-0 bg-white shadow-lg z-50">
        <div>Logo</div>
        <ul className="flex   gap-6">
          <Link
            to={"/"}
            className={`text-[#757575] group py-2  duration-500 relative transition-all text-[0.95rem] ${
              (pathname == "/" || pathname == "") && "!font-bold !text-black"
            }  font-medium w-full hover:font-bold hover:text-black`}
          >
            Home
            <div
              className={`w-0 group-hover:w-full ${
                (pathname == "/" || pathname == "") && "w-full"
              } absolute bottom-0 h-1 rounded-md duration-500 bg-gradient-to-r from-[#00EA87] to-[#78CBFF] `}
            ></div>
          </Link>
          <Link
            to={"/about-us"}
            className={`text-[#757575] duration-500 group py-2 relative transition-all w-full text-[0.95rem] ${
              pathname == "/about-us" && "font-bold text-black "
            }  font-semibold hover:font-bold hover:text-black`}
          >
            About
            <div
              className={`w-0 group-hover:w-full ${
                pathname == "/about-us" && "w-full"
              } absolute bottom-0 h-1 rounded-md duration-500 bg-gradient-to-r from-[#00EA87] to-[#78CBFF] `}
            ></div>
          </Link>
          <Link
            to={"/product"}
            className={`text-[#757575] duration-500 group py-2 ${
              pathname == "/product" && "font-bold text-black"
            } relative transition-all w-full text-[0.95rem] font-semibold hover:font-bold hover:text-black`}
          >
            Product
            <div
              className={`w-0 group-hover:w-full absolute bottom-0 h-1 ${
                pathname == "/product" && "w-full"
              } rounded-md duration-500 bg-gradient-to-r from-[#00EA87] to-[#78CBFF] `}
            ></div>
          </Link>
          <Link
            to={"/team"}
            className={`text-[#757575] relative duration-500 ${
              pathname == "/team" && "font-bold text-black"
            } group py-2 transition-all w-full text-[0.95rem]  font-semibold hover:font-bold hover:text-black`}
          >
            Team
            <div
              className={`w-0 group-hover:w-full ${
                pathname == "/team" && "w-full"
              } absolute bottom-0 h-1 rounded-md duration-500 bg-gradient-to-r from-[#00EA87] to-[#78CBFF] `}
            ></div>
          </Link>
          <Link
            to={"/contact-us"}
            className={`text-[#757575] relative duration-500 py-2 group ${
              pathname == "/contact-us" && "font-bold text-black"
            } transition-all w-full text-[0.95rem]  font-semibold hover:font-bold hover:text-black`}
          >
            Contact
            <div
              className={`w-0 group-hover:w-full ${
                pathname == "/contact-us" && "w-full"
              } absolute bottom-0 h-1 rounded-md duration-500 bg-gradient-to-r from-[#00EA87] to-[#78CBFF] `}
            ></div>
          </Link>
        </ul>
        <div>
          <button
            onClick={handleContactClick}
            className="linear-green-blue-btn"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex flex-col md:hidden shadow-lg justify-center  px-4 space-y-3 py-6 sticky top-0 bg-white z-50">
        <div className="flex justify-start relative items-center">
          Logo
          <button
            className="absolute right-0 outline-[#757575] duration-700 border-2 hover:outline-1 border-[#757575] rounded-lg p-1"
            onClick={toggleIsOpen}
          >
            {!isOpen ? (
              <Menu className="w-6 h-6 text-[#757575]" />
            ) : (
              <X className="w-6 h-6 text-[#757575]" />
            )}
          </button>
        </div>
        {isOpen && (
          <>
            <ul className="flex flex-col w-full space-y-2 pt-3 transition-all duration-700">
              <Link
                to={"/"}
                className="text-[#757575]  border bg-gradient-to-r from-[#00EA87]/20 rounded-lg  to-[#78CBFF]/40 text-center group py-2  duration-500 relative transition-all text-[0.95rem]  font-medium w-full hover:font-bold hover:text-black"
              >
                Home
              </Link>
              <Link
                to={"/about-us"}
                className="text-[#757575] border bg-gradient-to-r from-[#00EA87]/20  rounded-lg to-[#78CBFF]/40 text-center duration-500 group py-2 relative transition-all w-full text-[0.95rem]  font-semibold hover:font-bold hover:text-black"
              >
                About
              </Link>
              <Link
                to={"/product"}
                className="text-[#757575] border bg-gradient-to-r from-[#00EA87]/20 rounded-lg  to-[#78CBFF]/40 text-center duration-500 group py-2 relative transition-all w-full text-[0.95rem] font-semibold hover:font-bold hover:text-black"
              >
                Product
              </Link>
              <Link
                to={"/team"}
                className="text-[#757575] border bg-gradient-to-r from-[#00EA87]/20 rounded-lg  to-[#78CBFF]/40 text-center relative duration-500 group py-2 transition-all w-full text-[0.95rem]  font-semibold hover:font-bold hover:text-black"
              >
                Team
              </Link>
              <Link
                to={"/contact-us"}
                className="text-[#757575] border bg-gradient-to-r from-[#00EA87]/20  rounded-lg to-[#78CBFF]/40 text-center relative duration-500 py-2 group transition-all w-full text-[0.95rem]  font-semibold hover:font-bold hover:text-black"
              >
                Contact
              </Link>
            </ul>
            <div className="flex justify-center items-center">
              <button
                onClick={handleContactClick}
                className="linear-green-blue-btn"
              >
                Contact Us
              </button>
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};
export default Navbar;
