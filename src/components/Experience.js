import { Title } from "./Title";
import { Container } from "./container";

export const Experience = () => {
  return (
    <div className="bg-[#111827] flex flex-col items-center py-[64px] px-[16px] gap-4 md:gap-12">
      <Title text="Experience" />
      <p className="text-lg text-[#D1D5DB] ">
        Here is a quick summary of my most recent experiences:
      </p>
      <Container />
    </div>
  );
};
