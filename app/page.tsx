import Link from "next/link";
import HeroSection from "@/ui/HeroSection";
import TrialModal from "@/ui/TrialModal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <TrialModal />
      </HeroSection>

      {/* Programs Section */}
      <section className="py-16 sm:py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-text mb-12">
            Our <span className="text-primary">Programs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Youth I Card */}
            <div className="bg-dark-surface border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-4xl mb-4" aria-label="Youth I program icon">🧒</div>
              <h3 className="text-2xl font-bold text-primary mb-1">
                Youth I
              </h3>
              <p className="text-light-text/60 text-sm mb-3">Ages 5 – 8</p>
              <p className="text-light-text/80">
                Trying to make Junior Champions is the leading cause of youth burnout.
                We play the long game. Teach them to love it first. After that, skill is inevitable.
              </p>
            </div>

            {/* Youth II Card */}
            <div className="bg-dark-surface border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-4xl mb-4" aria-label="Youth II program icon">👦</div>
              <h3 className="text-2xl font-bold text-primary mb-1">
                Youth II
              </h3>
              <p className="text-light-text/60 text-sm mb-3">Ages 8 and up</p>
              <p className="text-light-text/80">
                Despite what your kid&apos;s school says, they&apos;re not protecting your child.
                If your kid walks through our doors, we&apos;re committed to do what the schools won&apos;t:
                protect and give them the tools to defend themselves.
              </p>
            </div>

            {/* Youth Competitive Card */}
            <div className="bg-dark-surface border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-4xl mb-4" aria-label="Youth Competitive program icon">🏆</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Youth Competitive
              </h3>
              <p className="text-light-text/80">
                We know competition isn&apos;t for everyone, but it&apos;s empirically the fastest way to improve.
                Competitive participation is not mandatory, but the resources to succeed are available.
              </p>
            </div>

            {/* Adults Instruction Card */}
            <div className="bg-dark-surface border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-4xl mb-4" aria-label="Adults Instruction program icon">🥋</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Adults (Instruction)
              </h3>
              <p className="text-light-text/80">
                Adults class is a forum for learning. Less hierarchy and more co-operative learning.
                We look to get to the root of what works and why. Every session ends with Q&amp;A —
                no training question off limits.
              </p>
            </div>

            {/* Adults Open Training Card */}
            <div className="bg-dark-surface border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-4xl mb-4" aria-label="Adults Open Training program icon">💪</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Adults (Open Training)
              </h3>
              <p className="text-light-text/80">
                This is your time. Need drilling, need live rounds, mobility, talking theory with the team?
                Whatever you need, we&apos;re committed to our teammates&apos; success here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 sm:py-20 bg-dark-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-text mb-12">
            Why Join <span className="text-primary">Calhoun, GA<br />Grappling Club</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4" aria-label="Passionate instruction icon">🏆</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Passionate Instruction
              </h3>
              <p className="text-light-text/80">
                Learn from experienced instructors with various grappling backgrounds.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4" aria-label="Strong community icon">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Strong Community
              </h3>
              <p className="text-light-text/80">
                Train at your pace in a supportive, welcoming environment. Hobbyist & Competitors alike!
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4" aria-label="Convenient location icon">📍</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Convenient Location
              </h3>
              <p className="text-light-text/80">
                Located inside Seo{"'"}s Martial Arts & SMA Athletics in Calhoun,
                GA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Preview Section */}
      <section className="py-16 sm:py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text mb-4">
            See Our <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-light-text/80 mb-8 max-w-2xl mx-auto">
            Classes available Wednesday, Friday, and Saturday for all ages and
            experience levels.
          </p>
          <Link
            href="/schedule"
            className="inline-block px-8 py-3 bg-primary text-light-text font-bold rounded-lg hover:bg-primary/90 transition"
          >
            View Full Schedule
          </Link>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 sm:py-20 bg-dark-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-light-text mb-4">
            Located Inside{" "}
            <span className="text-primary">
              Seo{"'"}s Martial Arts & SMA Athletics
            </span>
          </h3>
          <p className="text-light-text/80 mb-2">
            📍 200 Golden Circle Dr, Calhoun, GA 30701
          </p>
          <p className="text-light-text/80 mb-6">
            Easy to find, convenient parking, professional facilities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17066297367"
              className="px-6 py-3 bg-primary text-light-text font-bold rounded-lg hover:bg-primary/90 transition"
            >
              Call Us
            </a>
            <a
              href="mailto:info@CalhounGaGrapplingClub.com"
              className="px-6 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
