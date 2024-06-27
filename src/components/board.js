import Picture from "../assets/Picture.png";
import { Title } from "./Title";

const arr = [
  {
    title: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    apps: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];

export const Board = (el, i) => {
  return (
    <div>
      {arr.map((el, i) => {
        return (
          <div className={`md:flex md:m-auto`}>
            <div className="flex p-[32px] rounded-t-xl bg-[#374151] items-center justify-center md:w-6/12 md:rounded-l-[12px] md:rounded-t-none">
              <img className="md:w-[480px] md:h-[384px]" src={Picture}></img>
            </div>
            <div className="flex rounded-b-xl flex-col bg-[#1F2937] p-[32px] gap-[24px] md:w-6/12 md:rounded-r-[12px] md:px-[100px] md:py-[48px] md:gap-[36px] md:rounded-b-none">
              <p className="text-[#F9FAFB] md:text-xl" key={i}>
                {el.title}
              </p>
              <p className="text-[#D1D5DB]" key={i}>
                {el.text}
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {el.apps.map((el, i) => {
                  return <Title text={el} key={i} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
