"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-BVDJVK6S7K", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
