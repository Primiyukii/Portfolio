const projects = [
  {
    title: "Garbage Waste Management System",
    description: "A smart waste management system designed to streamline garbage collection and monitoring. It tracks bin status, optimizes collection routes, and helps reduce manual oversight — built to make waste management more efficient and data-driven for local communities.",
    image: "/projects/project1.png", 
    tags: ["Laravel, MySQL, PHP, JavaScript"],
  },
  {
    title: "Automated Chicken Egg Counting Machine (YOLOv5)",
    description: "An automated machine that uses YOLOv5 to count chicken eggs with high accuracy. It integrates OpenCV for image processing and ESP32 for real-time data transmission.",
    image: "/projects/project2.png",
    tags: ["Python, YOLOv5, OpenCV, ESP32, Arduino, Django"],
  },
];

export const Projects = () => {
  return (

  <section id ="projects" className="py-32 relative  overflow-hidden z-10">
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl">
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl">
        <div className="container mx-auto px-6 relative z-10">

          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              What I've
              <span className="font-serif italic font-normal text-white">
                {" "}
                Built
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A collection of projects showcasing my experience in software development, AI and machine learning, databases, and hardware integration. Each project represents my approach to solving practical problems through technology and continuous learning.
            </p>
          </div>
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
        <div>

          <div>
            <img src={project.image} alt={project.title} />
          </div>
        </div>
        ))}

      </div>
    </div>
  </section>
  );
};