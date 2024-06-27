import Menu from "../logo/menu-icon.svg";
import { MenuSection } from "./menuSection";

const ss = "<SS/>";

export const Navbar = () => {
  return (
    <div className="w-fill h-[69px] bg-[#030712] flex justify-between items-center p-[16px]">
      <div className="text-white text-2xl">{ss}</div>
      <img className="w-[36px] h-[36px] md:hidden" src={Menu} />
      <MenuSection />
    </div>
  );
};
