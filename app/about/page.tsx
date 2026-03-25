import type { Metadata } from "next";
import { instructorsData } from "@/lib/instructors-data";
import InstructorCard from "@/ui/InstructorCard";

export const metadata: Metadata = {
  title: "About Us | Calhoun GA Grappling Club",
  description:
    "Meet our experienced instructors: Randy Roden, Brayan Reyes, Matt Hugh Boiles, and Will Jordan. Passionate about teaching Brazilian Jiu-Jitsu and grappling.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark-surface py-12 sm:py-16 border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-light-text mb-4">
            About <span className="text-primary">Calhoun Grappling</span>
          </h1>
          <p className="text-light-text/80 max-w-2xl">
            Learn about our mission, our instructors, and what makes our gym a
            special place to train.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-light-text mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-light-text/80 mb-4">
                Calhoun GA Grappling Club is dedicated to building a strong
                community of grapplers, from absolute beginners to advanced
                competitors. We believe that Brazilian Jiu-Jitsu and submission
                wrestling offer transformative benefits: physical fitness,
                mental resilience, and life-changing friendships.
              </p>
              <p className="text-light-text/80 mb-4">
                Our goal is to make world-class instruction accessible to
                everyone in Calhoun and surrounding areas, regardless of age,
                fitness level, or prior experience.
              </p>
              <p className="text-light-text/80">
                We foster a supportive, judgment-free environment where every
                student can grow at their own pace.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/50 rounded-lg p-12 text-center">
              <div className="text-6xl mb-4">🥋</div>
              <h3 className="text-2xl font-bold text-dark-bg mb-2">
                A Place to Improve
              </h3>
              <p className="text-dark-bg/80">
                Technically. Physically. Mentally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Instructors */}
      <section className="py-16 sm:py-20 bg-dark-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-text mb-4">
            Meet Our <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-center text-light-text/80 max-w-2xl mx-auto mb-12">
            Our team is made up of passionate, experienced grapplers dedicated
            to your success on and off the mat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructorsData.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-light-text mb-12">
            Our <span className="text-primary">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏋️</div>
              <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-light-text/80">
                We pursue excellence in technique, instruction, and the overall
                training experience.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-light-text/80">
                Grappling is not a solo sport. We build lasting friendships and
                support one another.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-light-text/80">
                We train hard but safe. We respect ourselves and each other
                every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 sm:py-20 bg-dark-surface text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-light-text mb-6">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-light-text mb-4">
            Located inside Seo's Martial Arts & SMA Athletics
          </p>
          <p className="text-light-text/80 mb-2">
            📍 200 Golden Circle Dr, Calhoun, GA 30701
          </p>
          <p className="text-light-text/80 mb-8">
            📱 (706) 629-7367
          </p>
          <p className="text-light-text/80 mb-8">
            📧 Randy.Roden@CalhounGaGrapplingClub.com
          </p>

          <a
            href="tel:+17066297367"
            className="inline-block px-8 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition"
          >
            Call to Learn More
          </a>
        </div>
      </section>
    </>
  );
}
