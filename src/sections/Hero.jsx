import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
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


            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary text-md glow-text">Smarter solutions</span> 
                <br />
                through 
                <br />
                <span className="font-serif italic text-md font-normal text-white">
                   software,AI, and technology.
                </span>
              </h1>
              <p className="text-lg muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Renz Vargas — a Computer Science graduate and aspiring software developer with hands-on experience in software development, AI and machine learning, databases, Linux systems, and hardware-integrated projects.
                I enjoy building practical solutions, exploring new technologies, and turning ideas into functional software.
              </p>
            </div>

            <div>
              <Button Size="lg">Contact Me<ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};