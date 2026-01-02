import { Linkedin, Github, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marianella-salinas-b41699203/",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/marianellas",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:se.marianella@gmail.com",
  },
];

const ConnectSection = () => {
  return (
    <section id="connect" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
          Let's Connect
        </h2>
        <div className="section-divider" />

        <p className="mt-8 text-muted-foreground font-sans max-w-lg mx-auto">
          I'm always happy to connect with fellow engineers, researchers, and
          founders. Feel free to reach out at se[dot]marianella[at]gmail[dot]com
        </p>

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              asChild
              className="gap-2 px-6 py-5 border-border hover:bg-sage-light hover:border-primary/30 hover:text-primary transition-all duration-200"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
