import type { Metadata } from "next";
import { scheduleData } from "@/lib/schedule-data";
import ScheduleCard from "@/ui/ScheduleCard";

export const metadata: Metadata = {
  title: "Schedule | Calhoun GA Grappling Club",
  description:
    "Class schedule for Brazilian Jiu-Jitsu and grappling. Wednesday, Friday, and Saturday classes for all ages.",
};

export default function SchedulePage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark-surface py-12 sm:py-16 border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-light-text mb-4">
            Class <span className="text-primary">Schedule</span>
          </h1>
          <p className="text-light-text/80 max-w-2xl">
            Find the perfect class for your experience level and schedule. All
            classes are welcome to beginners.
          </p>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-16 sm:py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scheduleData.map((day) => (
              <ScheduleCard key={day.day} day={day} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 sm:py-20 bg-dark-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-light-text mb-8">
            More About Our <span className="text-primary">Classes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Drop-In Classes
              </h3>
              <p className="text-light-text/80 mb-4">
                New students are always welcome! You don't need prior experience
                to join. Come try a class anytime.
              </p>
              <p className="text-light-text/80">
                First class is always free. We have loaner gear available if
                needed.
              </p>
            </div>

            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Class Structure
              </h3>
              <p className="text-light-text/80 mb-4">
                Each class includes warm-up, technique instruction, drilling,
                and live rolling.
              </p>
              <p className="text-light-text/80">
                Classes are taught in a supportive environment suitable for all
                skill levels.
              </p>
            </div>

            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Optional Live Training
              </h3>
              <p className="text-light-text/80 mb-4">
                Extended sessions available after regular classes for those
                wanting more mat time.
              </p>
              <p className="text-light-text/80">
                Great for athletes preparing for competition or improving their
                skills.
              </p>
            </div>

            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                What to Bring
              </h3>
              <p className="text-light-text/80 mb-4">
                Bring a gi for Gi classes or just athletic wear for No-Gi
                sessions.
              </p>
              <p className="text-light-text/80">
                Water bottle, towel, and shoes to walk to/from the mat are
                recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-dark-bg text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text mb-6">
            Ready to Start <span className="text-primary">Training</span>?
          </h2>
          <p className="text-light-text/80 max-w-2xl mx-auto mb-8">
            Your first week of training is free. No experience necessary. All
            fitness levels welcome.
          </p>
          <a
            href="tel:+17066297367"
            className="inline-block px-8 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition"
          >
            Call to Book Your Trial
          </a>
        </div>
      </section>
    </>
  );
}
