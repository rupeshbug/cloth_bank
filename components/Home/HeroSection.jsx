const HeroSection = () => {
  return (
    <div className="relative h-[90vh] lg:h-[80vh]">
      <div className="absolute inset-0 h-full  overflow-hidden">
        <img
          className="h-full object-cover w-full opacity-75"
          src="/img2.jpg"
          alt="hero background"
        />
      </div>
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="absolute inset-0 flex justify-center items-center flex-col">
        <h1 className="text-center text-white text-5xl font-extrabold mb-8 tracking-wider font-serif">
          Clothing a brighter future
        </h1>
        <button className="rounded-xl border-2 border-green-400 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 my-10">
          Join Us To Make A Change
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
