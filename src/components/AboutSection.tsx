import headshot from "@/assets/headshot.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-4">
          About
        </h2>
        <div className="section-divider" />

        {/* Two-column layout */}
        <div className="mt-12 flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          {/* Headshot */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-2 bg-sage-light rounded-lg transform rotate-3" />
              <img
                src={headshot}
                alt="Marianella Salinas - Professional headshot"
                className="relative w-64 h-80 object-cover object-top rounded-lg shadow-soft"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="w-full md:w-2/3 space-y-5 text-foreground/90 font-sans leading-relaxed">
            <p>
              I am a Machine Learning Software Engineer at{" "}
              <span className="text-primary font-medium">Permanence AI</span>,
              where I focus on reliable code generation and large language model
              fine-tuning for secure software engineering workflows. Before
              joining Permanence, I was a Venture Capital Summer Associate at{" "}
              <span className="text-primary font-medium">
                Connecticut Innovations
              </span>
              , where I evaluated and advised on AI-driven products across
              FinTech, ClimateTech, and Bioscience.
            </p>

            <p>
              I also spent two summers at{" "}
              <span className="text-primary font-medium">
                RBC Capital Markets
              </span>{" "}
              as a Software Engineer Intern, building AI chatbots and internal
              data visualization tools for quantitative traders.
            </p>

            <p>
              I received my M.Eng. in Computer Science from{" "}
              <span className="text-primary font-medium">Cornell Tech</span> in
              May 2025. I earned my B.S. in Computer Science as an Honors and
              STEM Scholar, with minors in Mathematics and Entrepreneurship,
              from the{" "}
              <span className="text-primary font-medium">
                University of Connecticut
              </span>{" "}
              in 2024. During my undergraduate years, I served as Managing
              Director of Hillside Ventures, UConn's student-run $1M venture
              capital fund, and was a Principal Investigator on an IRB-approved
              study for the BOLD Scholars Program focused on improving equity
              and inclusion in STEM education.
            </p>

            <p>
              My work bridges cutting-edge machine learning with practical
              business applications—from automating venture capital due
              diligence to optimizing data flows in capital markets. At
              Permanence AI, I work on automating code maintenance for software
              engineering teams by producing remediations for SCA and SAST
              vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
