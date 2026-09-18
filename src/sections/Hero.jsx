export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src="/hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10">
        {/* Hero content here */}
      </div>
    </section>
  );
};