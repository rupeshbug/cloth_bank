const ReadyToJoin = () => {
  return (
    <div className="py-6 px-4 lg:flex lg:items-center lg:justify-center">
      <div className="lg:w-1/2 lg:mr-10">
        <h1 className="text-center lg:text-left text-2xl lg:text-4xl font-extrabold mb-8 tracking-wider font-serif">
          Ready to join us? Be a part of the solution. Donate clothes and
          support social causes.
        </h1>
        <button className="rounded-xl border-2 text-xl border-green-400 px-5 py-3 text-base lg:mb-0 lg:mr-5 font-medium transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 my-10 block mx-auto lg:inline-block">
          Contact Us
        </button>
      </div>
      <div className="lg:w-2/5">
        <img
          className="mx-auto lg:mx-0 rounded-md"
          src="/img4.jpg"
          alt="image"
        />
      </div>
    </div>
  );
};

export default ReadyToJoin;
