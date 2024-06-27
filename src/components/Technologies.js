import Dota2 from "../assets/dota2.webp";
import ApexLegends from "../assets/apexlegends.jpeg";
import LoL from "../assets/LoL.png";
import OutWard from "../assets/outward.jpg";
import Valorant from "../assets/valorant.png";

const technologies = [
  {
    icons: Dota2,
    title: "DOTA2",
    url: "https://www.dota2.com/home",
  },
  {
    icons: ApexLegends,
    title: "APEXLEGENDS",
    url: "https://apex.tracker.gg/apex/profile/origin/eryddd/overview",
  },
  {
    icons: LoL,
    title: "LoL",
    url: "https://www.leagueoflegends.com/en-us/",
  },
  {
    icons: OutWard,
    title: "OUTWARD",
    url: "https://outward.fandom.com/wiki/Outward_Wiki",
  },
  {
    icons: Valorant,
    title: "VALORANT",
    url: "https://playvalorant.com/en-us/",
  },
  {
    icons: Dota2,
    title: "DOTA2",
    url: "https://www.dota2.com/home",
  },
  {
    icons: ApexLegends,
    title: "APEXLEGENDS",
    url: "https://apex.tracker.gg/apex/profile/origin/eryddd/overview",
  },
  {
    icons: LoL,
    title: "LoL",
    url: "https://www.leagueoflegends.com/en-us/",
  },
  {
    icons: OutWard,
    title: "OUTWARD",
    url: "https://outward.fandom.com/wiki/Outward_Wiki",
  },
  {
    icons: Valorant,
    title: "VALORANT",
    url: "https://playvalorant.com/en-us/",
  },
  {
    icons: Dota2,
    title: "DOTA2",
    url: "https://www.dota2.com/home",
  },
  {
    icons: ApexLegends,
    title: "APEXLEGENDS",
    url: "https://apex.tracker.gg/apex/profile/origin/eryddd/overview",
  },
  {
    icons: LoL,
    title: "LoL",
    url: "https://www.leagueoflegends.com/en-us/",
  },
  {
    icons: OutWard,
    title: "OUTWARD",
    url: "https://outward.fandom.com/wiki/Outward_Wiki",
  },
  {
    icons: Valorant,
    title: "VALORANT",
    url: "https://playvalorant.com/en-us/",
  },
];

export const Games = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-4 min-h-fit min-w-fit">
      {technologies.map((technology, index) => {
        return (
          <div className="flex flex-col items-center gap-2" key={index}>
            <a target="blank" href={technology.url}>
              <img
                className="w-16 h-16"
                src={technology.icons}
                alt="technology icon"
              />
            </a>
            <p className="text-base text-gray-600">{technology.title}</p>
          </div>
        );
      })}
    </div>
  );
};
