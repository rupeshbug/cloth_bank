import TrustAndSafety from "@/components/Home/TrustAndSafety";
import HeroSection from "../components/Home/HeroSection";
import HowWeWork from "../components/Home/HowWeWork";
import ReadyToJoin from "@/components/Home/ReadyToJoin";

const index = () => {
  return (
    <div>
      <HeroSection />
      <HowWeWork />
      <TrustAndSafety />
      <ReadyToJoin />
    </div>
  );
};

export default index;
