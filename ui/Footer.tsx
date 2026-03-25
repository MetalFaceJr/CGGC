import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-primary/20 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Calhoun Grappling
            </h3>
            <p className="text-light-text mb-2">
              🏢 Inside Seo's Martial Arts & SMA Athletics
            </p>
            <p className="text-light-text mb-2">
              📍 200 Golden Circle Dr, Calhoun, GA 30701
            </p>
            <p className="text-light-text mb-2">
              📧{" "}
              <a
                href="mailto:Randy.Roden@CalhounGaGrapplingClub.com"
                className="hover:text-primary transition"
              >
                Randy.Roden@CalhounGaGrapplingClub.com
              </a>
            </p>
            <p className="text-light-text">
              📱 <a href="tel:+17066297367" className="hover:text-primary">
                (706) 629-7367
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-text mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-light-text hover:text-primary">
                Home
              </Link>
              <Link
                href="/schedule"
                className="text-light-text hover:text-primary"
              >
                Schedule
              </Link>
              <Link href="/about" className="text-light-text hover:text-primary">
                About Us
              </Link>
              <Link href="/blog" className="text-light-text hover:text-primary">
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-light-text hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-light-text mb-4">
              Our Programs
            </h4>
            <ul className="flex flex-col space-y-2 text-light-text text-sm">
              <li>✓ Fundamentals (Gi)</li>
              <li>✓ Submission Grappling (No-Gi)</li>
              <li>✓ Youth Grappling</li>
              <li>✓ Competition Training</li>
              <li>✓ Private Lessons Available</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-muted text-sm">
            © 2026 Calhoun GA Grappling Club. All rights reserved.
          </p>
          <p className="text-center text-muted text-xs mt-2">
            Building strength, technique, and respect in the Calhoun community.
          </p>
        </div>
      </div>
    </footer>
  );
}
