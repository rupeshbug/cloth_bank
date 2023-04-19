import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

const HowWeWork = () => {
  return (
    <div className="bg-slate-100 pt-10 pb-10">
      <h1 className="text-center text-3xl font-extrabold mb-8 tracking-wider font-serif">
        Change a life with just a few clicks. Donate your clothes today.
      </h1>
      <h2 className="ml-10 mb-8 text-xl text-center">How We Work</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{
            background: "#68D391",
            color: "#fff"
          }}
          icon={<RiNumber1 />}
        >
          <h2 className="vertical-timeline-element-title">Connect with us</h2>
          <p>Signup so that you can reach out to us and work for a cause.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#68D391", color: "#fff" }}
          icon={<RiNumber2 />}
        >
          <h2 className="vertical-timeline-element-title">Give your details</h2>
          <p>
            Fill the form and give your details so that we can reach out to you.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#68D391", color: "#fff" }}
          icon={<RiNumber3 />}
        >
          <h2 className="vertical-timeline-element-title">Make a difference</h2>
          <p>Donate clothes to make a difference.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default HowWeWork;
