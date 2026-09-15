import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${business.name}, explaining how we handle data in line with UK GDPR.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-black-950">Privacy Policy</h1>
      <p className="mt-2 text-sm text-black-800/70">Last updated: 15 September 2026</p>

      <div className="prose mt-8 flex flex-col gap-6 text-black-800">
        <section>
          <h2 className="text-xl font-semibold text-black-950">1. Who We Are</h2>
          <p className="mt-2">
            {business.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data
            controller for the personal data described in this policy. We are
            based in {business.addressLocality}, {business.addressRegion}. You
            can contact us via{" "}
            <a href={business.whatsapp} className="text-green-600 underline">
              WhatsApp
            </a>{" "}
            or{" "}
            <a href={business.social.facebook} className="text-green-600 underline">
              Facebook
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">2. What We Collect</h2>
          <p className="mt-2">
            This website does not have a contact form and does not collect or
            store any personal data through the site itself. We do not
            collect your name, email address, or any other personal details
            when you browse this website.
          </p>
          <p className="mt-2">
            The only data collected via this website is anonymised usage data
            through Google Analytics (pages visited, approximate location,
            device type), and only if you accept analytics cookies via the
            cookie banner. If you contact us directly via WhatsApp or
            Facebook Messenger, any information you share with us there is
            handled under WhatsApp&apos;s and Meta&apos;s own privacy
            policies, not this one.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">3. How We Use It</h2>
          <p className="mt-2">
            Where you accept analytics cookies, we use anonymised usage data
            to understand how visitors use this site so we can improve it. We
            do not sell your data or use it for third-party advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">4. Legal Basis</h2>
          <p className="mt-2">
            Analytics cookies are only used with your consent, given via the
            cookie banner on this site. You can withdraw that consent at any
            time by clearing your browser&apos;s local storage for this site
            or by rejecting cookies when the banner reappears.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">5. Third Parties</h2>
          <p className="mt-2">
            We use Google Analytics (GA4) for anonymised usage analytics on
            this website, only with your consent. Google processes this data
            under its own privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">6. Your Rights</h2>
          <p className="mt-2">
            Under UK GDPR, you have the right to access, correct, or request
            deletion of any personal data we hold about you, and to object to
            or restrict how we process it. Since this website does not
            collect personal data directly, any such request would relate to
            information you&apos;ve sent us via WhatsApp or Facebook, and
            should be directed to us through those channels. You also have
            the right to lodge a complaint with the{" "}
            <a
              href="https://ico.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              Information Commissioner&apos;s Office (ICO)
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">7. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
  );
}
