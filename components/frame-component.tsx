import type { NextPage } from "next";

export type FrameComponentType = {
  rectangle8?: string;
  november2023March2024?: string;
  prepeatChefServices?: string;
  loremIpsumDolorSitAmetCon?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  rectangle8,
  november2023March2024,
  prepeatChefServices,
  loremIpsumDolorSitAmetCon,
}) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start min-w-[364px] max-w-full text-left text-mini text-white font-poppins mq450:min-w-full">
      <img
        className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        loading="lazy"
        alt=""
        src={rectangle8}
      />
      <i className="relative leading-[44px] z-[1]">{november2023March2024}</i>
      <div className="relative text-5xl leading-[44px] font-semibold mq450:text-lgi mq450:leading-[35px]">
        {prepeatChefServices}
      </div>
      <div className="self-stretch relative text-lg leading-[32px]">
        {loremIpsumDolorSitAmetCon}
      </div>
    </div>
  );
};

export default FrameComponent;
