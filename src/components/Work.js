import { Title } from "./Title";
import { Board } from "./board";

export const Work = () => {
  return (
    <div className="flex items-center flex-col bg-[#030712] py-[64px] px-4 gap-[24px]md:p-[96px] md:p-[80px] md:gap-12">
      <Title text="Work" />
      <p className="text-lg text-[#D1D5DB] ">
        Some of the noteworthy projects I have built:
      </p>
      <div className="flex flex-col items-center gap-[16px] md:gap-12 md:py-[96px] md:px-[80px] ">
        <Board />
        <Board />
        <Board />
      </div>
    </div>
  );
};
