import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${business.name} and its website.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-black-950">Terms of Service</h1>
      <p className="mt-2 text-sm text-black-800/70">Last updated: 15 September 2026</p>

      <div className="prose mt-8 flex flex-col gap-6 text-black-800">
        <section>
          <h2 className="text-xl font-semibold text-black-950">1. About These Terms</h2>
          <p className="mt-2">
            These terms apply to your use of this website and to any waste
            removal, man and van, or clearance services booked with{" "}
            {business.legalName}. By using this site or booking a job with
            us, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">2. Quotes &amp; Bookings</h2>
          <p className="mt-2">
            Prices shown on this website (such as &ldquo;from £45&rdquo;) are
            genuine starting prices, not fixed quotes. Quotes provided via
            WhatsApp, Facebook or phone are estimates based on the
            information and photos you provide, and are not binding until
            confirmed. Final pricing may vary if the actual scope of work
            differs from what was described.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">3. Access &amp; Cancellations</h2>
          <p className="mt-2">
            You&apos;re responsible for making sure we can safely access the
            items or areas to be cleared on the agreed date. If you need to
            cancel or reschedule, please give us as much notice as possible
            so we can offer the slot to another customer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">4. Waste Handling &amp; Licensing</h2>
          <p className="mt-2">
            We are a fully licensed waste carrier. Items collected are
            disposed of or recycled responsibly and in line with UK waste
            regulations. We reserve the right to refuse collection of
            hazardous materials or items outside the scope of the services
            listed on this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">5. Liability</h2>
          <p className="mt-2">
            We take reasonable care when accessing and clearing your
            property, but we are not liable for pre-existing damage, wear, or
            defects that become more visible once items are moved or an area
            is cleared.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">6. Payment</h2>
          <p className="mt-2">
            Payment terms will be agreed with you before work begins. We
            accept the payment methods discussed at the time of booking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">7. Website Use</h2>
          <p className="mt-2">
            Content on this website is provided for general information about
            our services and is kept up to date as far as reasonably
            possible, but we don&apos;t guarantee it is error-free at all
            times. You may not copy or reuse content from this site for
            commercial purposes without our permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">8. Governing Law</h2>
          <p className="mt-2">
            These terms are governed by the laws of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black-950">9. Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to us via{" "}
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
      </div>
    </div>
  );
}
