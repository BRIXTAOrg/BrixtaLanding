// src/app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Pricing | Brixta",
  description:
    "Simple tiers across every Brixta product, with per-product pricing that scales to your team, data volume, or coverage area.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans px-4 sm:px-6 lg:px-8 pt-40 pb-24">
      <p>This page is under construction :)</p>
    </div>
  );
}