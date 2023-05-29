import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TrustAndSafety = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-400 py-10 text-center text-lg">
      <h1 className="text-white text-2xl">Trust & Safety</h1>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="mb-8 text-white text-2xl">
            At ReWear, we take the security of your donations very seriously. We
            use industry-leading encryption and security practices to protect
            your information and ensure that your donations are safe and secure.
          </p>
          <dl className="space-y-10">
            <motion.div layout className="relative" onClick={toggleAccordion}>
              <dt>
                <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                  <div className="flex items-center">
                    <span className="text-xl text-gray-500">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-white">
                        Secure Donations
                      </p>
                    </div>
                  </div>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className={`${
                        isOpen ? "rotate-180" : ""
                      } w-6 h-6 transform transition-transform duration-300 ease-in-out`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <motion.dd
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 pr-12"
              >
                <p className="text-base text-gray-100">
                  We use industry-leading encryption and security practices to
                  protect your information and ensure that your donations are
                  safe and secure.
                </p>
              </motion.dd>
            </motion.div>
            <motion.div layout className="relative" onClick={toggleAccordion}>
              <dt>
                <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                  <div className="flex items-center">
                    <span className="text-xl text-gray-500">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-white">
                        Transparent & Reliable
                      </p>
                    </div>
                  </div>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className={`${
                        isOpen ? "rotate-180" : ""
                      } w-6 h-6 transform transition-transform duration-300 ease-in-out`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <motion.dd
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 pr-12"
              >
                <p className="text-base text-gray-100">
                  We take pride in our commitment to transparency and
                  accountability. Your donations will be used effectively to
                  support our cause.
                </p>
              </motion.dd>
            </motion.div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TrustAndSafety;
