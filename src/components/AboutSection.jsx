import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I am a passionate software developer with a strong interest in data structures and
              algorithms, competitive programming, and full-stack web development.
              I enjoy tackling challenging problems and constantly refining my coding skills.
            </p>

            <p className="text-muted-foreground">
              Currently focused on mastering DSA and participating in coding contests.
              Skilled in building web apps using JavaScript, C++, HTML, React, Node.js, and MongoDB.
              Actively preparing for On-Campus Tech-Placements and Internship opportunities.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* ✅ Download CV Button */}
              <a
                href="https://drive.google.com/file/d/1_FUAKdD7ppxKSWIKpdkEGZ5QDTJjiTKz/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary 
                          hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DSA & Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Solving real-world problems through efficient algorithms and competitive coding.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Version Control & Collaboration</h4>
                  <p className="text-muted-foreground">
                    Working with Git & GitHub for efficient project collaboration and code management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
