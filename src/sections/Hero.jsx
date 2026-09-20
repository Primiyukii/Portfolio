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
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-500 animate-float"
            style={{
              backgroundColor: "#1ac4b6",
              left: p.left,
              top: p.top,
              animation: `slow-drift ${p.duration}s ease-in-out infinite alternate`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

        {/**/}
      <div> 
        <div>
          {/**/}
          <div>
            <div className="animte-fade-in">
              <span className="inline-flex items-center text-lg gap-2 py-2 px-4 rounded-full glassmorphism text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block mr-2 animate-pulse">
                Software Engineer
                </span>
              </span>
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </section>
  );
};