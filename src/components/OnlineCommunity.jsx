import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const OnlineCommunity = () => {
  const [counterOn, setCounterOn] = React.useState(false);

  return (
    <div>
      <div className=" text-center  ">
        <p className="text-2xl pb-3 font-semibold">
          Our Flourishing Online Community
        </p>
        <p className="pl-10 pr-10 text-xl pb-10 md:pb-14 ">
          Join a network of like-minded individuals, <br />
          unlock new possibilities, and experience growth on your journey to
          success.
        </p>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className=" md:grid grid-cols-3 pb-20  pr-10 pl-32 md:pl-40">
          <div>
            <p className="text-5xl font-semibold text-green-400">
              {counterOn && (
                <CountUp start={0} end={200} duration={4} delay={0} />
              )}
              k+
            </p>
            <p className=" md:pt-3 text-sm pb-10">
              LinkedIn community
            </p>
          </div>
          <div>
            <p className="text-5xl font-semibold text-green-400">
              {counterOn && (
                <CountUp start={0} end={100} duration={4} delay={0} />
              )}
              k+
            </p>
            <p className=" md:pt-3 pb-10 text-sm ">
              Telegram community
            </p>
          </div>
          <div>
            <p className="text-5xl md:pl-10 font-semibold text-green-400">
              {counterOn && (
                <CountUp start={0} end={500} duration={4} delay={0} />
              )}
              k+
            </p>
            <p className=" pr-10 md:pr-10 md:pt-3 text-sm ">
              Web Traffic Per Month
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default OnlineCommunity;
