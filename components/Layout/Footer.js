import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t-2 border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="max-w-xs">
          <img
            src="/logo1.jpg"
            alt="logo"
            className="w-16"
            style={{ height: "70px", width: "90px" }}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center my-4">
          <Link href="/">
            <span className="text-gray-800 font-medium md:mr-8">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-800 font-medium md:mr-8 mb-2 md:mb-0">
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-800 font-medium">Contact</span>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href="https://www.facebook.com/" passHref>
            <span className="text-gray-800 hover:text-gray-600">
              <FaFacebook className="w-6 h-6 mr-4" />
            </span>
          </Link>
          <Link href="https://www.instagram.com/" passHref>
            <span className="text-gray-800 hover:text-gray-600">
              <FaInstagram className="w-6 h-6 ml-4" />
            </span>
          </Link>
        </div>
      </div>
      <p className="text-center text-green-500 mt-2">Copyright © 2023 ReWear</p>
    </footer>
  );
};

export default Footer;
