import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { business } from "@/lib/business";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="J&J Waste Services logo"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-black-950 sm:text-xl">
            J&amp;J Waste Services
          </span>
        </Link>

        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-black-950 transition-colors hover:bg-green-400"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp Us
        </a>
      </div>
    </header>
  );
}
