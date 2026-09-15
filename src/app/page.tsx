import Image from "next/image";
import { CheckCircle2, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { business, services, trustBadges } from "@/lib/business";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.14C16.24 4.1 15.36 4 14.33 4c-2.15 0-3.62 1.31-3.62 3.72V10.5H8.2v3h2.51V21h2.79Z" />
    </svg>
  );
}

const badgeIcons = [ShieldCheck, CheckCircle2, Truck];

export default function Home() {
  return (
    <>
      <section className="bg-black-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400">
              Serving Lowestoft &amp; Suffolk
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Waste Removal &amp; Man with a Van You Can Rely On
            </h1>
            <p className="mt-4 max-w-xl text-lg text-grey-100/80">
              Wheelie bin emptying, man &amp; van collections, house and shed
              clearances, and general waste &amp; appliance removal across
              Lowestoft. Reliable service, fully licensed, affordable prices.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black-950 transition-colors hover:bg-green-400"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Get a Quote on WhatsApp
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <FacebookIcon />
                Find Us on Facebook
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <Image
                src="/logo.jpg"
                alt="J&J Waste Services logo"
                width={280}
                height={280}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-black-950 sm:text-3xl">
          Our Services
        </h2>
        <p className="mt-2 max-w-2xl text-black-800/80">
          From a single item to a full clearance, get a straightforward quote
          for the job you need doing.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col rounded-2xl border border-black-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-black-950">
                  {service.name}
                </h3>
                <span className="shrink-0 rounded-full bg-green-500/10 px-3 py-1 text-sm font-bold text-green-600">
                  {service.fromPrice}
                </span>
              </div>
              <p className="mt-3 text-sm text-black-800/80">
                {service.description}
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-black-800"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                      aria-hidden
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-black-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black-800"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Get a Quote
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-black-800/60">
          Prices shown are genuine starting prices. Message us on WhatsApp or
          Facebook with the details of your job for an exact quote.
        </p>
      </section>

      <section className="bg-grey-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-black-950 sm:text-3xl">
            Why Choose J&amp;J Waste Service?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {trustBadges.map((badge, index) => {
              const Icon = badgeIcons[index];
              return (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black-950 text-green-400">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <p className="font-semibold text-black-950">{badge.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-black-950 sm:text-3xl">
          Get In Touch
        </h2>
        <p className="mt-2 text-black-800/80">
          Based in {business.addressLocality}, {business.addressRegion}. Message
          us with what you need clearing or collecting and we&apos;ll get back
          to you with a quote.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-black-950 transition-colors hover:bg-green-400"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Message Us on WhatsApp
          </a>
          <a
            href={business.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-black-950 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-black-800"
          >
            <FacebookIcon />
            Message Us on Facebook
          </a>
        </div>
      </section>
    </>
  );
}
