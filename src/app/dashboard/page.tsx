// src/app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardRootPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in to intelligently determine target landing coordinates
    const token = localStorage.getItem("brixta_auth_token");
    if (token) {
      router.replace("/dashboard/platform");
    } else {
      router.replace("/dashboard/quickEmbed");
    }
  }, [router]);

  return null;
}