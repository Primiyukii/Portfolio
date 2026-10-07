import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { Button } from '@/components/Button';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const skills = [
  "Python",
  "JavaScript",
  "PHP",
  "React",
  "Java",
  "SQL/MYSQL",
  "AI/ML",
  "Linux",
  "Git/Github",
  "Arduino",
  "ESP32",
  "C++",
  "Laravel",
];

const socials = [
  { icon: FaGithub, href: "https://github.com/Primiyukii" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/renz-vargas-3a9552428" },
];

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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
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

           <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button
              href="#contact"
              size="lg"
              className="bg-[#1ac4b6] hover:bg-[#17b0a3] text-white rounded-full px-8 py-6 text-base font-medium gap-2 shadow-[0_0_30px_rgba(26,196,182,0.5)] hover:shadow-[0_0_40px_rgba(26,196,182,0.7)] transition-all duration-300"
            >
               Contact Me <ArrowRight className="w-5 h-5" />
            </Button>
              <AnimatedBorderButton href="/resume.pdf" download="Renz_Vargas_Resume.pdf">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
           </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socials.map((social, idx) => (
                <a 
                key={idx}
                href={social.href}
                className="p-2 rounded-full glassmorphism hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-124 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary//10 blur-2xl animate-pulse"></div>
              <div className="relative glassmorphism rounded-3xl p-2 glow-border">
                <img src="/profile.png" alt="Renz Vargas" 
                className="w-124 aspect-[4/5] object-cover rounded-2xl"/>


                <div className="absolute -bottom-4 -right-4 glassmorphism rounded-sm px-4 py-2 animate-float">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                       <span className="whitespace-nowrap text-sm">Available For Work</span>
                      </div>
                   </div>

                   <div>

                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm mb-6 text-center text-gray-200/70">Technologies I work with</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-gray-400/50 hover:text-gray-300 transition-colors">
                  {skill}
                  </span>
                </div>
              ))}
               </div>
              </div>
          </div>
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center z-20 animate-fade-in animation-delay-800">
           <a href="#about"
           clasName="flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
           >
            <span className="text-xs uppercase tracking-wider leading-none text-gray-200/50">Scroll </span>
            <ChevronDown className="w-6 h-6 animate-bounce shrink-0 text-gray-200/50" />
           </a>

        </div>
    </section>
  );
};