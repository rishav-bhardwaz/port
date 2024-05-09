import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent1: NextPage = () => {
  const onAboutText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWorkText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='workText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[166px] pr-[26px] pl-5 box-border max-w-full shrink-0 text-left text-9xl text-white font-poppins mq450:pb-[70px] mq450:box-border mq975:pb-[108px] mq975:box-border">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[104px] max-w-full mq450:gap-[26px] mq725:gap-[52px]">
        <header className="w-[771px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-5xl text-white font-poppins mq725:w-[475px]">
          <div className="relative font-semibold whitespace-nowrap">
            Rishav Bhardwaz
          </div>
          <nav className="m-0 w-[296px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border mq725:auto">
            <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-lg text-white font-poppins">
              <div
                className="relative inline-block min-w-[54px] cursor-pointer"
                onClick={onAboutText1Click}
              >
                About
              </div>
              <div
                className="relative inline-block min-w-[46px] cursor-pointer"
                onClick={onWorkText1Click}
              >
                Work
              </div>
              <div
                className="relative inline-block min-w-[74px] cursor-pointer"
                onClick={onContactText1Click}
              >
                Contact
              </div>
            </nav>
          </nav>
        </header>
        <div className="self-stretch flex flex-row items-end justify-start gap-[118px] max-w-full mq450:gap-[29px] mq725:gap-[59px] mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[400px] max-w-full mq725:gap-[18px] mq725:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[9.8px]">
              <div className="relative font-medium mq450:text-3xl">
                Hello, I’m Rishav,
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-81xl">
                <h1 className="m-0 self-stretch relative text-inherit leading-[116px] font-extrabold font-inherit z-[1] mq450:text-11xl mq450:leading-[46px] mq975:text-31xl mq975:leading-[70px]">
                  Full Stack Developer
                </h1>
                <div className="relative text-9xl font-medium mt-[-1.8px] mq450:text-3xl">
                  based in India.
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[164px] h-[68px] relative">
              <div className="absolute h-[89.71%] w-[96.34%] top-[10.29%] right-[0%] bottom-[0%] left-[3.66%] rounded-md bg-khaki" />
              <div className="absolute h-[89.71%] w-[96.34%] top-[0%] right-[3.66%] bottom-[10.29%] left-[0%] rounded-md box-border z-[1] border-[1px] border-solid border-dark-brown" />
              <div className="absolute top-[23.53%] left-[23.17%] text-xl font-poppins text-dark-brown text-left inline-block min-w-[81px] z-[2] mq450:text-base">
                Resume
              </div>
            </button>
          </div>
          <div className="w-[506px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border min-w-[506px] max-w-full mq725:min-w-full mq1050:flex-1">
            <div className="self-stretch h-[526px] relative">
              <div className="absolute top-[17px] left-[0px] w-[506px] h-[509px]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[372.99px] left-[26.01px] bg-dodgerblue w-[5px] h-[30px] [transform:_rotate(24deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[372.99px] left-[47.71px] bg-dodgerblue w-[5px] h-[30px] [transform:_rotate(24deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[372.99px] left-[69.51px] bg-dodgerblue w-[5px] h-[30px] [transform:_rotate(24deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[372.99px] left-[91.31px] bg-dodgerblue w-[5px] h-[30px] [transform:_rotate(24deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[-1px] left-[415px] w-6 h-6 z-[1]">
                  <div className="absolute top-[0px] left-[9px] rounded-md bg-dodgerblue w-1.5 h-6" />
                  <div className="absolute top-[15px] left-[0px] rounded-md bg-dodgerblue w-1.5 h-6 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="absolute top-[15px] left-[441px] w-6 h-6 z-[1]">
                  <div className="absolute top-[0px] left-[9px] rounded-md bg-dodgerblue w-1.5 h-6" />
                  <div className="absolute top-[15px] left-[0px] rounded-md bg-dodgerblue w-1.5 h-6 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
                </div>
              </div>
              <div className="absolute top-[0px] left-[441px] w-6 h-6 z-[1]">
                <div className="absolute top-[0px] left-[9px] rounded-md bg-dodgerblue w-1.5 h-6" />
                <div className="absolute top-[15px] left-[0px] rounded-md bg-dodgerblue w-1.5 h-6 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
