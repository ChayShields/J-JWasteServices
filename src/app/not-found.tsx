import Link from "next/link";
import { business } from "@/lib/business";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-4xl font-bold text-black-950">Page Not Found</h1>
      <p className="mt-4 text-black-800/80">
        The page you&apos;re looking for doesn&apos;t exist. Try the link
        below, or message us on{" "}
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-green-600"
        >
          WhatsApp
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black-950 transition-colors hover:bg-green-400"
        >
          Back to Home
        </Link>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black-900/20 px-6 py-3 text-sm font-semibold text-black-950 transition-colors hover:bg-grey-100"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
