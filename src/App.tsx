import { AboutMe } from "./screens/AboutMe";
import { NavBar } from "./components/NavBar";
import Experience from "./screens/WorkExperience";
import SkillsPage from "./screens/Skills";
import { ContactMe } from "./screens/ContactMe";
import ProjectsPage from "./screens/Projects";


function App() {

  return (
      <div className="h-screen overflow-y-scroll dark:bg-[#202020] dark:text-white">
        <div className="max-w-6xl mx-auto">
          <div>
            <NavBar />
            <AboutMe />
            <Experience />
            <ProjectsPage />
            <SkillsPage />
            <ContactMe />
          </div>
        </div>
      </div>
  );
}

export default App;
