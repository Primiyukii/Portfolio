const PARTICLE_COUNT = 40;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: 15 + Math.random() * 20,
  delay: Math.random() * 5,
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src="/hero-bg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background z-10" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1.5 h-1.5 rounded-full animate-float"
            style={{
              backgroundColor: "#298d85",
              left: p.left,
              top: p.top,
              animation: `slow-drift ${p.duration}s ease-in-out infinite alternate`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-md font-medium tracking-wide animate-pulse"
            style={{
              borderColor: "#298d85",
              color: "#298d85",
            }}
          >
             <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#298d85" }}
              />
              <span>Computer Science</span>
             </span>
            </div>


            <div>
              <h1>
                Powering <span className="text-primary text-md glow-text">Next-generation technology</span> 
                <br />
                with uncompromising 
                <br />
                <span className="font-serif italic text-md font-normal text-white">
                   precision and performance.
                </span>
              </h1>
              <p className="text-lg muted-foreground max-w-lg">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};