import React from "react";

const SkillsPage: React.FC = () => {

  const skills = [
    {
      category: "Languages",
      items: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.simpleicons.org/tailwindcss",
        },
        { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Spring Boot", icon: "https://cdn.simpleicons.org/spring" },
        {
          name: "Kafka",
          icon: "https://cdn.simpleicons.org/apachekafka/231F20",
        },
        { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      ],
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
      ],
    },
  ];
  type SkillCategory =
    | "Languages"
    | "Frontend"
    | "Backend"
    | "Database"
    | "Cloud"
    | "Tools";

  const getGridSpanClasses = (category: SkillCategory): string => {
  let colSpan = "";
  let rowSpan = "";

  switch (category) {
    case "Languages":
    case "Database":
      colSpan = "col-span-2";
      rowSpan = "row-span-1";
      break;
    case "Backend":
      colSpan = "col-span-2";
      rowSpan = "row-span-2";
      break;
    case "Frontend":
      colSpan = "col-span-3";
      rowSpan = "row-span-2";
      break;
    case "Cloud":
      colSpan = "col-span-1";
      rowSpan = "row-span-2";
      break;
    case "Tools":
      colSpan = "col-span-4";
      rowSpan = "row-span-1";
      break;
    default:
      colSpan = "col-span-1";
      rowSpan = "row-span-1";
      break;
  }

  return `${colSpan} ${rowSpan}`;
};

  return (
    <div
      className="h-screen max-h-screen flex flex-col items-center justify-center"
      id="SkillsScreen"
    >
      <div className="w-4/5 flex justify-center lg:justify-start pt-8 pb-4 sm:pb-8">
        <h1 className="text-5xl MarartSansBoldFont">Skills</h1>
      </div>
      <div className="max-w-4xl w-full mx-auto p-6 bg-gray-100 rounded-md">
        <div className="grid grid-cols-5 grid-rows-4 gap-4">
          {skills.map((section, index) => (
            <div
              key={index}
              className={`${getGridSpanClasses(section.category as SkillCategory)} bg-white rounded-lg p-4 relative`}
            >
              <h3 className="absolute -top-3 right-4 px-2 text-sm font-semibold">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-4 sm:gap-10 justify-center items-center h-full">
                {section.items.map((item, idx) => (
                  <img
                    key={idx}
                    src={item.icon}
                    alt={item.name}
                    className="size-10 sm:size-12"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;