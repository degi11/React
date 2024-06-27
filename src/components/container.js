import Upwork from "../logo/upwork.svg";

const Texts = [
  {
    workedSpan: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    text1: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    workedSpan: "Jul 2017 - Oct 2021",
    title: "Team Lead",
    text1: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    workedSpan: "Dec 2015 - May 2017",
    title: "Full Stack Developer",
    text1: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export const Container = () => {
  return Texts.map((el, i) => {
    return (
      <div className="flex flex-col md:flex-row bg-[#1F2937] p-3 gap-4 rounded-xl w-3/4 items-center justify-between md:gap-[68px] md:p-[32px]">
        <div className="md:flex ">
          <img className="w-[102px] h-[28px] md:order-1 " src={Upwork} />
        </div>
        <p className=" text-[#E5E7EB] md:order-3 md:items-start" key={i}>
          {el.workedSpan}
        </p>
        <div className="md:order-2 md:w-[320px]">
          <p className="text-lg font-semibold  text-[#F9FAFB]">{el.title}</p>
          <ul className="flex flex-col text-[#D1D5DB]">
            {el.text1.map((el, i) => {
              return (
                <li className="list-disc list-inside" key={i}>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
};
