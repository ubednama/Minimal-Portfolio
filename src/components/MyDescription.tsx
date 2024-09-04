import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { FileText, Github, Linkedin } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import { useEffect, useRef, useState } from "react";
import "../assets/css/waving_hand.css";

const MyDescription: React.FC<{ startNotation: boolean }> = ({
  startNotation,
}) => {
  const [animateNotations, setAnimateNotations] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState("100%");

  useEffect(() => {
    if (nameRef.current) {
      setTitleWidth(`${nameRef.current.offsetWidth}px`);
    }
  }, []);

  useEffect(() => {
    if (startNotation) {
      setTimeout(() => {
        setAnimateNotations(true);
      }, 1000)
    } 
  }, [startNotation]);

  const greetings = [
    "Hello",
    "سلام",
    "हैलो",
    "Merhaba",
    "કેવું છો",
    "مرحبا",
    "Hola",
    "Bonjour",
    "ಹೆಲೋ",
    "Hallo",
    "Ciao",
    "こんにちは",
    "안녕하세요",
    "Olá",
    "Hallo",
    "Hej",
    "สวัสดี",
    "Halo",
    "你好",
  ];

  const buttonFormatting =
    "rounded-md w-full sm:w-48 h-9 text-sm text-center flex items-center justify-center cursor-pointer transition-colors duration-300";

  return (
    <RoughNotationGroup show={animateNotations}>
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4 sm:mb-8 flex flex-col items-center">
          <div className="w-full" style={{ width: titleWidth }}>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-left -mb-4 sm:-mb-3 flex mx-1">
              {
                <TypewriterComponent
                  options={{
                    strings: greetings,
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              }{" "}
              <span className="wave">👋</span>
            </h2>
          </div>
          <h1
            ref={nameRef}
            className="text-[54px] sm:text-6xl lg:text-8xl font-semibold text-center"
          >
            <span className="text-gray-500">I'm </span>Ubed Khan
          </h1>
          <div className="w-full mr-2" style={{ width: titleWidth }}>
            <h3 className="text-lg -mt-4 sm:-mt-2 sm:text-2xl lg:text-3xl text-right whitespace-nowrap">
              <span>a </span>
              <RoughNotation type="highlight" color="#FFC5C5">
                Full Stack Developer
              </RoughNotation>
            </h3>
          </div>
        </div>

        <div className="px-1">
          <p className="text-justify sm:text-center text-sm sm:text-lg mb-2 sm:mb-4 last-line-center">
            Passionate about building{" "}
            <span className="hidden sm:inline">dynamic and</span> scalable web
            applications using{" "}
            <RoughNotation type="box" color="#F5B041">
              React.js, Node.js, and Spring Boot.
            </RoughNotation>
          </p>

          <p className="text-justify sm:text-center text-sm sm:text-base mb-2 sm:mb-4 last-line-center">
            <RoughNotation type="underline" color="#F08080">
              With over a year of experience,
            </RoughNotation>{" "}
            me blabbering about me... again me blabbering more about me that how
            I'm good at both{" "}
            <RoughNotation type="highlight" color="#C6E9EB">
              frontend
            </RoughNotation>{" "}
            &{" "}
            <RoughNotation type="highlight" color="#D3D3D3">
              backend
            </RoughNotation>{" "}
            but am I??🤔
          </p>

          <p className="text-justify sm:text-center text-sm sm:text-base mb-2 sm:mb-4 sm:leading-loose last-line-center">
            Excited to tackle new challenges and make an impact.
            <span className="hidden sm:inline">
              {" "}
              Looking for new opportunities to grow!
            </span>{" "}
            <br className="block sm:hidden" />
            <span className="block sm:inline mt-4 font-semibold text-center">
              <RoughNotation type="circle" color="#FF0000">
                Hire me??
              </RoughNotation>
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6">
          <a
            href="https://ubednama.github.io/resume/resume.pdf"
            target="_self"
            rel="noopener noreferrer"
            className={`bg-black text-white hover:bg-gray-800 hover:text-base ${buttonFormatting}`}
          >
            <FileText className="w-4 h-4 mr-2" />
            Resume
          </a>
          <a
            href="https://github.com/ubednama"
            target="_self"
            rel="noopener noreferrer"
            className={`border-slate-500 border hover:bg-slate-100 hover:text-base ${buttonFormatting}`}
          >
            <Github className="w-4 h-4 mr-2" />
            Github
          </a>
          <a
            href="https://in.linkedin.com/in/ubed9"
            target="_self"
            rel="noopener noreferrer"
            className={`border-slate-500 border hover:bg-slate-100 hover:text-base ${buttonFormatting}`}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </RoughNotationGroup>
  );
};

export default MyDescription;
