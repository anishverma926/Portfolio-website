import { ArrowUp, Linkedin, Github, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 text-center">
        {/* Connect With Me Section */}
        <div>
          <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/anish-verma-8479bb215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/anishverma926"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github />
            </a>
            <a
              href="https://www.instagram.com/_anish_926?igsh=aXU2MjJzeHZ6ZTZz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram />
            </a>
            <a
              href="mailto:anishverma730@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Anish Verma. All rights reserved.
        </p>

        {/* Scroll to Top Button */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 
                    text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
