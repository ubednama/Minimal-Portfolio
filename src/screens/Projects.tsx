import { Github, Link } from "lucide-react";
import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    image: "/placeholder.svg",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A responsive task management application with real-time updates and collaborative features.",
    image: "/placeholder.svg",
    techStack: ["React", "Firebase", "Material-UI"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.techStack))
);

const ProjectsPage: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.techStack.includes(selectedTech));

  return (
    <div className="h-screen p-8" id="ProjectsScreen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedTech("All")}
            className={`px-4 py-2 rounded-full ${
              selectedTech === "All"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full ${
                selectedTech === tech
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

          {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Link className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <Github className="mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
