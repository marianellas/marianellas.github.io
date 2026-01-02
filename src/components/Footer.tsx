const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground font-sans">
          © {new Date().getFullYear()} Marianella Salinas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
