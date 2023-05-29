import React, { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [weight, setWeight] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email, firstName, lastName, phone, weight };
    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.status !== 200) {
        setSubmitStatus("error");
        setErrorMessage("Error submitting the form!");
      } else {
        resetForm();
        setSubmitStatus("success");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Error submitting the form");
    }
  };

  const resetForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setWeight("");
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div
      className="py-8 px-8 m-auto"
      style={{ backgroundImage: "url('./subtle-prism.png')" }}
    >
      <h1 className="text-center px-2 text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-8 tracking-wider font-serif">
        Contact Us
      </h1>
      <form
        ref={formRef}
        className="w-full lg:w-2/5  shadow-2xl m-auto py-4 px-5 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
            autoComplete="off"
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-slate-600 white:text-white-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              name="floating_weight"
              id="floating_weight"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              htmlFor="floating_weight"
              className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Weight (in kg)
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-2/4 rounded-xl border-2 border-green-400 px-5 py-3 text-base mb-3 font-medium transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 my-10"
          >
            Submit
          </button>
        </div>
        {submitStatus === "success" && (
          <p className="text-xl text-teal-900 text-center my-4">
            Your form is submitted. The team will contact you soon.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500 text-center my-4">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
