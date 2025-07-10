import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Food Delivery Website",
    description:
      "A full-stack food delivery platform with secure JWT authentication, dynamic cart management, and an admin panel for order and product management.",
    image: "/projects/project1.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS"],
    demoUrl: "https://shopping-cart-lakshya.vercel.app/",
    githubUrl: "https://github.com/anishverma926/food-delivery-website",
  },
  {
    id: 2,
    title: "Bookstore App",
    description:
      "A responsive MERN stack application with user authentication, light/dark mode, and course access. Built for both desktop and mobile users.",
    image: "/projects/project1.png",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "https://shopping-cart-lakshya.vercel.app/",
    githubUrl: "https://github.com/anishverma926/BookStoreApp",
  },
  {
    id: 3,
    title: "Random Password Generator",
    description:
      "A customizable JavaScript tool that generates secure passwords using user-selected character sets. Includes one-click copy and browser compatibility.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://random-password-generator-lakshya.netlify.app/",
    githubUrl: "https://github.com/anishverma926/Password-Generator",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full 
                      bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Fixed position for icons at bottom */}
                <div className="flex justify-between items-center mt-auto pt-4 px-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

         {/* for Check Github */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/anishverma926"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
