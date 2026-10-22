import HeroImg from "../assets/hero.webp";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import LangToggle from "./LangToggle";
import { LangContext } from "../context/LangContext";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LangContext);
  return (
    <section
      className={`xl:min-h-251.75 min-h-fit w-full px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-custom-blue"
      }`}
    >
      <div className="container max-w-290 w-full mx-auto">
        <div className="w-full h-20 gap-4 flex items-center justify-center">
          <ThemeToggle />
          <LangToggle />
        </div>
        <div className="row w-full flex items-center flex-col lg:flex-row justify-center gap-5 sm:gap-7.5 md:gap-12.5 lg:gap-19 lg:pt-51 lg:pb-40 md:py-20 py-15">
          <div className="left max-w-124.75 w-full flex flex-col items-center lg:items-start justify-center">
            <h1 className="leading-[128%] text-center lg:text-left text-3xl sm:text-[40px] md:text-[60px] lg:text-[75px] text-white font-semibold">
              {language === "en"
                ? "Have your best chat"
                : "अपनी बेहतरीन बातचीत करें"}
            </h1>
            <p className="text-base md:text-lg lg:text-[21px] text-white leading-[120%] mt-4 md:mt-5">
              {language === "en"
                ? "Fast, easy & unlimited team chat."
                : "तेज़, आसान और असीमित टीम चैट।"}
            </p>

            <div className="flex justify-center lg:justify-start flex-wrap w-full gap-5 md:gap-6 lg:gap-9 mt-5 sm:mt-8 md:mt-10 lg:mt-15">
              <button
                className={`max-w-43 w-full h-12.5 flex items-center justify-center rounded-[60px] cursor-pointer transition-all duration-300 ease-in-out border border-solid text-base font-medium leading-[120%] active:scale-95 ${
                  theme === "dark"
                    ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                    : "text-custom-blue bg-white border-transparent hover:border-white hover:bg-custom-blue hover:text-white"
                }`}
              >
                {language === "en" ? "Try it Free" : "मुफ़्त आज़माएँ"}
              </button>

              <button
                className={`max-w-43 w-full h-12.5 flex items-center justify-center rounded-[60px] cursor-pointer transition-all duration-300 ease-in-out border border-solid text-base font-medium leading-[120%] active:scale-95 ${
                  theme === "dark"
                    ? "bg-transparent text-white border-white hover:bg-white hover:text-black"
                    : "text-white bg-custom-blue border-white hover:border-custom-blue hover:bg-white hover:text-custom-blue"
                }`}
              >
                {language === "en" ? "Get a Demo" : "डेमो लें"}
              </button>
            </div>
          </div>
          <div className="right max-w-146.25 w-full">
            <img
              width="585"
              height="643"
              className="object-cover"
              src={language === "en" ? HeroImg : HeroImg}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
