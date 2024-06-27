import { Games } from "./Technologies";
import { Title } from "./Title";

const script = "The skills, tools and technologies I am really good at:";

export const Skills = () => {
  return (
    <div className="bg-[#030712] px-[16px] py-[64px] flex flex-col gap-[16px] md:py-[96px] md:px-[80px]">
      <div className="flex justify-center ">
        <Title text="Skills" />
      </div>
      <div className="text-white">{script}</div>
      <div className="flex" />
      <Games />
    </div>
  );
};
