import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Decorative banner with sage green botanical elements"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground animate-fade-in-up tracking-tight">
          Marianella Salinas
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-sans font-light animate-fade-in-delay tracking-wide">
          Machine Learning Software Engineer
        </p>
      </div>
    </section>
  );
};

export default Hero;
