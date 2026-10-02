const projects = [
  {
    title: "Garbage Waste Management System",
    description: "A smart waste management system designed to streamline garbage collection and monitoring. It tracks bin status, optimizes collection routes, and helps reduce manual oversight — built to make waste management more efficient and data-driven for local communities.",
    image: "/projects/project1.png", 
    tags: ["Laravel, MySQL, PHP, JavaScript"],
  },
  {
    title: "Automated Chicken Egg Counting Machine (YOLOv5)",
    description: "",
    image: "/projects/project2.png",
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

            </span>

          </div>
        </div>
      </div>
    </div>
  </section>
  );
};