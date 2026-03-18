import Link from "next/link";
import type { Metadata } from "next";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Curated blog resources from Rate Calculator and QR Code Builder.",
  alternates: {
    canonical: "/blogs",
  },
};

type BlogItem = {
  title: string;
  href: string;
};

const rateCalculatorBlogs: BlogItem[] = [
  {
    title: "Understanding Compound Interest: The Secret to Building Wealth",
    href: "https://www.ratecalculator.tech/blog/understanding-compound-interest",
  },
  {
    title: "10 Tips to Reduce Your Loan Interest Payments",
    href: "https://www.ratecalculator.tech/blog/reduce-loan-interest-payments",
  },
  {
    title: "EMI vs. Regular Payments: Which is Better for You?",
    href: "https://www.ratecalculator.tech/blog/emi-vs-regular-payments",
  },
  {
    title: "First-Time Homebuyer's Guide to Mortgage Calculations",
    href: "https://www.ratecalculator.tech/blog/first-time-homebuyer-mortgage-guide",
  },
  {
    title: "How to Maximize Your Tax Deductions in 2026",
    href: "https://www.ratecalculator.tech/blog/maximize-tax-deductions-2026",
  },
  {
    title: "SIP vs. Lump Sum: Which Investment Strategy Works Best?",
    href: "https://www.ratecalculator.tech/blog/sip-vs-lump-sum-investment",
  },
];

const qrCodeBuilderBlogs: BlogItem[] = [
  {
    title: "How QR Codes Work: A Complete Visual Guide",
    href: "https://www.qrcodebuilder.me/blog/how-qr-codes-work",
  },
  {
    title: "Static vs Dynamic QR Codes: Which Should You Use?",
    href: "https://www.qrcodebuilder.me/blog/static-vs-dynamic-qr-codes",
  },
  {
    title: "QR Code Marketing Strategies That Actually Drive Conversions",
    href: "https://www.qrcodebuilder.me/blog/qr-code-marketing-strategies",
  },
  {
    title: "QR Code Size Guide: The Right Size for Every Use Case",
    href: "https://www.qrcodebuilder.me/blog/qr-code-size-guide",
  },
  {
    title: "QR Code Security Risks and How to Stay Safe",
    href: "https://www.qrcodebuilder.me/blog/qr-code-security-risks",
  },
  {
    title: "12 Best QR Code Use Cases for Small Businesses in 2025",
    href: "https://www.qrcodebuilder.me/blog/qr-code-best-use-cases",
  },
];

function BlogList({
  title,
  sourceUrl,
  items,
}: {
  title: string;
  sourceUrl: string;
  items: BlogItem[];
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <Link
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        >
          View all
        </Link>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-3 text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:from-blue-50/60 hover:to-purple-50/60 hover:text-slate-900 hover:shadow-md"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text transition group-hover:text-transparent">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-12 pt-24">
      <FloatingElements />

      <div className="pointer-events-none absolute top-24 left-6 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="pointer-events-none absolute right-8 bottom-12 h-36 w-36 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="container mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Resource Blogs
              </span>
            </h1>
            <p className="mt-2 max-w-xl text-slate-600">
              Browse selected blog posts from Rate Calculator and QR Code Builder.
            </p>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <BlogList
            title="Rate Calculator"
            sourceUrl="https://www.ratecalculator.tech/blog"
            items={rateCalculatorBlogs}
          />

          <BlogList
            title="QR Code Builder"
            sourceUrl="https://www.qrcodebuilder.me/blog"
            items={qrCodeBuilderBlogs}
          />
        </div>
      </div>
    </main>
  );
}
