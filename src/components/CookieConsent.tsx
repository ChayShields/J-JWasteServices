"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const CONSENT_KEY = "jj-waste-cookie-consent";
const CONSENT_EVENT = "cookie-consent-change";

export type ConsentValue = "accepted" | "rejected";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getSnapshot(): ConsentValue | null {
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

function getServerSnapshot(): ConsentValue | null {
  return null;
}

export function useCookieConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function setConsent(value: ConsentValue) {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export default function CookieConsent() {
  const consent = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-black-900/10 bg-white p-4 shadow-[0_-4px_20px_rgba(5,5,5,0.15)] sm:p-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-black-800">
          We use cookies for basic site analytics (Google Analytics) so we can
          see which pages are useful. No data is shared for advertising. See
          our{" "}
          <Link href="/privacy-policy" className="underline hover:text-green-600">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => setConsent("rejected")}
            className="rounded-full border border-black-900/20 px-4 py-2 text-sm font-medium text-black-800 hover:bg-grey-100"
          >
            Reject
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-black-950 hover:bg-green-400"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
