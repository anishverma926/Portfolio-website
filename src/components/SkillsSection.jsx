import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend", icon: "/html.png" },
  { name: "CSS", level: 90, category: "frontend", icon: "/css.png" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "/javaScript.png" },
  { name: "React", level: 90, category: "frontend", icon: "/react.png" },
  { name: "TailwindCSS", level: 85, category: "frontend", icon: "/tailwindCss.jpeg" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "/nodeJS.png" },
  { name: "Express.js", level: 75, category: "backend", icon: "/express.png" },
  { name: "MongoDB", level: 70, category: "backend", icon: "/mongoDB.jpeg" },

  // Tools
  { name: "GitHub", level: 85, category: "tools", icon: "/github.jpeg" },
  { name: "VS Code", level: 95, category: "tools", icon: "/vsCode.png" },

  // DSA & Core
  { name: "C++", level: 90, category: "dsa", icon: "/c++.png" },
  { name: "DSA", level: 90, category: "dsa", icon: "/dsa.jpeg"},
  { name: "OOPS", level: 85, category: "core", icon: "/oops.png" },
  { name: "DBMS", level: 80, category: "core", icon: "/dbms.png" },
];


const categories = ["all", "frontend", "backend", "tools", "dsa", "core"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize font-medium transition-all duration-300 cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right w-full mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
