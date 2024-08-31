import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "./components/footer";
import { baseUrl } from "./sitemap";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mauricio Robayo",
    template: "%s | Mauricio Robayo",
  },
  description: "Mauricio Robayo.",
  openGraph: {
    title: "Mauricio Robayo",
    description: "Mauricio Robayo.",
    url: baseUrl,
    siteName: "Mauricio Robayo",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 pt-8 lg:mx-auto flex-auto min-w-0 flex flex-col px-2 md:px-0 gap-8 min-h-lvh">
        <h2>
          <Link
            href="/"
            className="uppercase text-sm dark:text-slate-400 text-slate-600"
          >
            Mauricio Robayo
          </Link>
        </h2>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
