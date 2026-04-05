import type { Metadata } from "next";
import ContactForm from "@/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Calhoun GA Grappling Club",
  description:
    "Get in touch with Calhoun GA Grappling Club. Send us a message or call to book a trial class.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark-surface py-12 sm:py-16 border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-light-text mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-light-text/80 max-w-2xl">
            Have questions? Want to book a trial class? Get in touch with our
            team.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-light-text mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-light-text mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-dark-surface border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    📱 Call Us
                  </h3>
                  <a
                    href="tel:+17066297367"
                    className="text-light-text hover:text-primary text-lg font-semibold"
                  >
                    (706) 629-7367
                  </a>
                  <p className="text-light-text/70 text-sm mt-2">
                    Available during business hours
                  </p>
                </div>

                {/* Email */}
                <div className="bg-dark-surface border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    📧 Email Us
                  </h3>
                  <a
                    href="mailto:info@CalhounGaGrapplingClub.com"
                    className="text-light-text hover:text-primary break-all"
                  >
                    info@CalhounGaGrapplingClub.com
                  </a>
                  <p className="text-light-text/70 text-sm mt-2">
                    We'll respond within 24 hours
                  </p>
                </div>

                {/* Location */}
                <div className="bg-dark-surface border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    📍 Location
                  </h3>
                  <p className="text-light-text font-semibold">
                    Calhoun GA Grappling Club
                  </p>
                  <p className="text-light-text text-sm">
                    Inside Seo's Martial Arts & SMA Athletics
                  </p>
                  <p className="text-light-text">
                    200 Golden Circle Dr
                    <br />
                    Calhoun, GA 30701
                  </p>
                </div>

                {/* Hours */}
                <div className="bg-dark-surface border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    🕐 Class Schedule
                  </h3>
                  <ul className="text-light-text/80 space-y-2 text-sm">
                    <li>
                      <strong className="text-light-text">Wednesday:</strong> 5pm
                      - 9pm
                    </li>
                    <li>
                      <strong className="text-light-text">Friday:</strong> 5pm -
                      9pm
                    </li>
                    <li>
                      <strong className="text-light-text">Saturday:</strong> 9am
                      - 11:30am
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-light-text mb-12">
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">
                Do I need prior experience?
              </h3>
              <p className="text-light-text/80">
                No! All classes are open to beginners. We teach fundamentals and
                scale techniques for all levels.
              </p>
            </div>

            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">
                How much does a trial class cost?
              </h3>
              <p className="text-light-text/80">
                Your first week of training is completely free! No commitment
                required.
              </p>
            </div>

            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">
                What should I bring?
              </h3>
              <p className="text-light-text/80">
                For your first class, just bring athletic wear, a water bottle,
                and an open mind. We have loaner gis available if you want to
                try a gi class.
              </p>
            </div>

            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">
                Are there classes for kids?
              </h3>
              <p className="text-light-text/80">
                Yes! We have specialized youth programs for kids ages 5+. Classes
                are fun, safe, and focus on building confidence and technique.
              </p>
            </div>

            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">
                Can I do private lessons?
              </h3>
              <p className="text-light-text/80">
                Yes! We offer private lessons for individuals or small groups.
                Contact us to arrange a time.
              </p>
            </div>

            <div className="bg-dark-bg border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">
                Is it safe for beginners?
              </h3>
              <p className="text-light-text/80">
                Absolutely. Safety is our top priority. We teach control,
                respect, and tap out protocols. Injuries are rare when training
                properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-dark-bg text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text mb-6">
            Ready to Start Your <span className="text-primary">Journey</span>?
          </h2>
          <p className="text-light-text/80 mb-8">
            One free week of training. No experience necessary. All ages welcome.
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
