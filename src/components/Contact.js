import { Title } from "./Title";
import Call from "../logo/call.svg";
import Messege from "../logo/messege.svg";
import Copy from "../logo/copy.svg";
import { IconLinks } from "./IconLinks";

const text1 =
  "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.";
const text2 = "You may also find me on these platforms!";

export const Contact = () => {
  return (
    <div className="flex bg-[#030712] flex-col items-center py-[64px] px-[16px] gap-[24px]">
      <Title text="Get in touch" />
      <p className="text-[#D1D5DB]">{text1}</p>
      <div className="flex items-center gap-[16px]">
        <img src={Messege} />
        <p className="text-[#F9FAFB]">dddelgersaihan@gmail.com</p>
        <img src={Copy} />
      </div>
      <div className="flex items-center gap-[16px]">
        <img src={Call} />
        <p className="text-[#F9FAFB]">+976 12345678</p>
        <img src={Copy} />
      </div>
      <p className="#D1D5DB">{text2}</p>
      <IconLinks />
    </div>
  );
};
