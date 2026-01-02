const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <ul className="flex items-center justify-center gap-8 text-sm font-sans">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("interests")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Interests
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("connect")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Connect
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
