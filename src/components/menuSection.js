import NightLight from "../logo/nightLight.svg";

export const MenuSection = () => {
  return (
    <div className="max-md:hidden flex text-white items-center gap-[24px]">
      <p>About</p>
      <p>Work</p>
      <p>Testimonials</p>
      <span className="w-[1px] h-6 bg-[#1F2937]" />
      <button>
        <img src={NightLight} />
      </button>
      <div className="flex items-center justify-center bg-[#F9FAFB] px-4 py-1.5 text-black rounded-xl">
        Download CV
      </div>
    </div>
  );
};
