export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative bg-dark-surface py-20 sm:py-32 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text mb-6">
          Build <span className="text-primary">Strength</span>. Learn{" "}
          <span className="text-primary">Technique</span>. Earn{" "}
          <span className="text-primary">Respect</span>.
        </h1>

        <p className="text-lg sm:text-xl text-light-text/80 max-w-2xl mx-auto mb-8">
          Premier submission grappling and Brazilian Jiu-Jitsu in Calhoun,
          Georgia. All experience levels welcome.
        </p>

        <div>{children}</div>
      </div>
    </section>
  );
}
