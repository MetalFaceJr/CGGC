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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fundamentals Card */}
            <div className="bg-dark-surface border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-4xl mb-4">🥋</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Fundamentals (Gi)
              </h3>
              <p className="text-light-text/80">
                Traditional training in the kimono.
                Learn to slow down and control bigger, stronger opponents using their clothes as a handle
                (because not everyone takes their clothes off to fight).
              </p>
            </div>

            {/* No-Gi Card */}
            <div className="bg-dark-surface border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Submission Grappling (No-Gi)
              </h3>
              <p className="text-light-text/80">
                Fast-paced wrestling and submission hunting without the
                traditional uniform. Perfect for MMA enthusiasts and athletes
                seeking a dynamic workout.
              </p>
            </div>

            {/* Youth Card */}
            <div className="bg-dark-surface border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-4xl mb-4">👦</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Youth Grappling
              </h3>
              <p className="text-light-text/80">
                Conflict is inevitable and your kid needs "Conflict Resolution" skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 sm:py-20 bg-dark-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-text mb-12">
            Why Join <span className="text-primary">Calhoun, GA<br>Grappling Club</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Passionate Instruction
              </h3>
              <p className="text-light-text/80">
                Learn from experienced instructors with various grappling backgrounds.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Strong Community
              </h3>
              <p className="text-light-text/80">
                Train at your pace in a supportive, welcoming environment. Hobbyist & Competitors alike!
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Convenient Location
              </h3>
              <p className="text-light-text/80">
                Located inside Seo's Martial Arts & SMA Athletics in Calhoun,
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
            className="inline-block px-8 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition"
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
              Seo's Martial Arts & SMA Athletics
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
              className="px-6 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition"
            >
              Call Us
            </a>
            <a
              href="mailto:Randy.Roden@CalhounGaGrapplingClub.com"
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
