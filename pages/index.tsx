import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";

const Home: NextPage = () => {
  return (
    <div className="w-full h-[5182px] relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[34px] px-0 pb-[175px] box-border gap-[105px] leading-[normal] tracking-[normal] mq450:gap-[26px] mq725:gap-[52px] mq1050:h-auto">
      <div className="w-[5px] h-[30px] absolute !m-[0] top-[563.99px] right-[599.79px] bg-dodgerblue [transform:_rotate(24deg)] [transform-origin:0_0] z-[1]" />
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <footer className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-center pt-3.5 px-5 pb-[13px] shrink-0 text-left text-5xl text-black font-poppins">
        <div className="relative leading-[44px] mq450:text-lgi mq450:leading-[35px]">
          Designed and Developed by Rishav Bhardwaz
        </div>
      </footer>
    </div>
  );
};

export default Home;
