import { Brain, Building2, Heart } from "lucide-react";

interface InterestCategory {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const categories: InterestCategory[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Research Interests",
    items: [
      "Natural Language Processing",
      "Automated Code Generation",
      "Computer Vision",
      "Engineering Education",
    ],
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Business Interests",
    items: [
      "Building B2B Generative AI Tools",
      "DeepTech Venture Capital",
      "ClimateTech",
    ],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Hobbies",
    items: [
      "Traveling across Latin America",
      "Reading psychology & behavioral science",
      "Hosting small gatherings with friends",
      "Knitting",
      "Mentoring students",
    ],
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-20 px-6 bg-cream-dark">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-4">
          Interests
        </h2>
        <div className="section-divider" />

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-background rounded-xl p-6 shadow-card hover:shadow-soft transition-shadow duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-sage-light rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-serif font-medium text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground font-sans flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
