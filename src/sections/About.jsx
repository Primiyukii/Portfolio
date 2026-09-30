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
      <div className="space-y-8">
        <div className="animate-fade-in">
          <span className="text-secondary-foreground text-lg font-medium tracking-wider uppercase">
            About Me
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
          From ideas to solutions,
          <span className="font-serif italic font-normal text-white">
            {" "}
            powered by code and curiosity.
          </span>
        </h2>

        <div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200">
          <p>
            I'm a Computer Science graduate with hands-on experience in software
            development, AI and machine learning, database management, Linux systems,
            and technical support. I enjoy turning ideas into practical solutions
            through code and technology.
          </p>

          <p>
            My experience includes developing full-stack applications, working with
            Python, PHP, JavaScript, SQL/MySQL, and exploring AI-powered computer
            vision. I've also worked with hardware-integrated projects using Arduino,
            ESP32, and ESP32-CAM.
          </p>

          <p>
            As I begin my professional career, I'm continuously learning and
            expanding my skills across software development, IT systems, AI, and
            emerging technologies while looking for opportunities to solve real-world
            problems and grow as a technology professional.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 mt-4">
          <p className="text-lg font-medium italic text-foreground">
            "I believe technology is most valuable when it turns ideas into practical
            solutions that solve real-world problems."
          </p>
        </div>
      </div>


      <div className="grid sm:grid-cols-2 gap-6">
        {highlights.map((item, idx) => (
          <div key={idx} className="glassmorphism p-6 rounded-2xl animate-fade-in"
          style={{animationDelay: `${(idx + 1) * 100}ms` }}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
              <item.icon className="w-6 h-6 text-primary"/>
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-md font-serif italic text-gray-300">{item.description}</p>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>
  );
};