import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { business } from "@/lib/business";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.14C16.24 4.1 15.36 4 14.33 4c-2.15 0-3.62 1.31-3.62 3.72V10.5H8.2v3h2.51V21h2.79Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-black-800 bg-black-950 text-grey-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{business.name}</p>
          <p className="mt-3 text-sm text-grey-100/70">
            Wheelie bin emptying, man &amp; van collections and general waste
            clearance across Lowestoft, Suffolk.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp: {business.phone}
            </a>
            <span className="flex items-center gap-2 text-grey-100/70">
              <MapPin className="h-4 w-4" aria-hidden />
              {business.addressLocality}, {business.addressRegion}
            </span>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-grey-100/60">
            Services
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>Wheelie Bin Emptying</li>
            <li>Man + Van</li>
            <li>General Waste / Appliance Clearance</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-grey-100/60">
            Company
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-green-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-green-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-grey-100/50 sm:px-6 flex flex-col items-center gap-1 sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {business.legalName}. All rights
          reserved.
        </span>
        <span>
          Designed and developed by{" "}
          <a
            href="https://hireme.link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-100/70 hover:text-green-400"
          >
            Chay Shields
          </a>
        </span>
      </div>
    </footer>
  );
}
