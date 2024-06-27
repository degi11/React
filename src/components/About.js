import { Title } from "./Title";
import Image2 from "../assets/toji2.webp";

const aboutText = "Curious about me? Here you have it:";
const text1 =
  "One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉";
const arr = [
  "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",

  "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, Shaagaadai end yuga hiij ywan chi in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",

  "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.",

  "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.",

  "Finally, some quick bits about me.",
];

export const About = () => {
  return (
    <div className="bg-[#111827] flex items-center justify-center flex-col px-[16px] py-[64px]">
      <div className="flex justify-center items-center flex-col gap-[24px]">
        <Title text="Aboutme" />
        <div className="max-w-7xl flex flex-col md:flex-row gap-12">
          <div className="md:relative md:w-6/12">
            <div className="flex justify-center w-[280px] h-[360px] relative m-auto">
              <img
                className="min-w-[280px] h-[360px] border-solid border-8 border-[#111827] z-10 "
                src={Image2}
              />
              <div className="absolute w-[280px] h-[360px] bg-[#374151] md:top-6 md:right-6"></div>
            </div>
          </div>
          <div className="md:w-6/12">
            <div className="text-white text-2xl font-semibold leading-8">
              {aboutText}
            </div>
            <div className="flex flex-col">
              <div className="text-white flex flex-col gap-[12px]">
                {arr.map((el) => {
                  return <p>{el}</p>;
                })}
              </div>
              <div className="text-white flex">
                <div className="flex gap-[12px]">
                  <div className="flex">
                    <li />
                    <p>Diamond</p>
                  </div>
                  <div className="flex">
                    <li />
                    <p>Full time freelancer</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <div className="flex">
                    <li />
                    <p>Hacker</p>
                  </div>
                  <div className="flex">
                    <li />
                    <p>Aspiring indie hacker</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white">{text1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
