import Picture from "../assets/toji1.webp";
import LocationIcon from "../logo/location-sm.svg";
import { IconLinks } from "./IconLinks";

export const Header = () => {
  return (
    <div className="flex justify-between flex-col px-[16px] py-[64px] gap-[48px] bg-[#030712] md:flex-row-reverse md:py-[96px] md:px-[80px]">
      <div className="relative ">
        <img
          className="min-w-[240px] min-h-[336px] mx-auto relative"
          src={Picture}
        />
      </div>
      <div className="flex flex-col gap-[48px] ">
        <div className="">
          <p className="text-4xl text-white">Hi, Im' Toji</p>
          <p className="text-base text-white">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex gap-[8px]">
            <img src={LocationIcon} className=""></img>
            <p className="text-white">Tokyo, Shibuya</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center justify-center w-[24px]">
              <span className="w-[8px] h-[8px] bg-[#10B981] rounded-full"></span>
            </div>
            <p className="text-white">Available for new projects</p>
          </div>
        </div>
        <IconLinks />
      </div>
    </div>
  );
};
