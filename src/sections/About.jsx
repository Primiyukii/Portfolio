import { Code2, Brain, Wrench, Shield } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building practical applications using Python, PHP, JavaScript, and modern development technologies.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Exploring AI, computer vision, and machine learning to develop solutions for real-world problems.",
  },
  {
    icon: Wrench,
    title: "Technical Problem Solving",
    description:
      "Applying troubleshooting, system maintenance, and analytical skills to solve software and technology-related issues.",
  },
  {
    icon: Shield,
    title: "Systems & Security",
    description:
      "Building a strong foundation in Linux, systems, networking, embbeded technologies, and security-focused technologies.",
  },
];

export const About = () => {
  return (
  <section id="about" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div classname="space-y-8">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold lending-tight animate-fade-in animation-delay-100">
            Building the future,
           <span className="font-serif italic font-normal text-white"> one component at a time.</span>
          </h2>
        </div>
      </div>
    </div>
  </section>
  );
};