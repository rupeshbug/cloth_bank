const HeroSection = () => {
  return (
    <div className="relative h-[100vh] lg:h-[80vh]">
      <div className="absolute inset-0 h-full  overflow-hidden">
        <img
          className="h-full object-cover w-full opacity-75"
          src="/img2.jpg"
          alt="hero background"
        />
      </div>
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="absolute inset-0 flex justify-center items-center flex-col">
        <h1 className="text-white text-5xl font-bold text-center">
          Clothing a brighter future
        </h1>
        <button class="rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 mt-10">
          Join Us To Donate
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
