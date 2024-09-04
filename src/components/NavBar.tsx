import React from "react";
import { Home, Mail } from "lucide-react";

const NavBar: React.FC = () => {

  return (
      <nav
        className={`fixed top-2 left-1/2 transform -translate-x-1/2  transition-all duration-300 rounded-full shadow-md py-3 px-8 dark:bg-[#585858] bg-white z-50`}
      >
        <div className="flex items-center justify-center space-x-6">
          <button
            onClick={() =>
              document
                .getElementById("AboutMeScreen")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`flex items-center relative `}
          >
            <Home className="size-5" />
          </button>
          <span className="border-l border-black dark:border-white text-center py-2"></span>
          <button
            onClick={() =>
              document
                .getElementById("ExperienceScreen")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`flex items-center relative`}
          >
            Experience
          </button>
          <button
            onClick={() =>
              document
                .getElementById("ProjectsScreen")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`flex items-center relative`}
          >
            Projects
          </button>
          <button
            onClick={() =>
              document
                .getElementById("SkillsScreen")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`flex items-center relative`}
          >
            Skills
          </button>
          <span className="border-l border-black dark:border-white text-center py-2"></span>
          <button
            onClick={() =>
              document
                .getElementById("ContactMeScreen")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`flex items-center relative`}
          >
            <Mail className="size-5" />
          </button>
        </div>
      </nav>
  );
};

export { NavBar };
