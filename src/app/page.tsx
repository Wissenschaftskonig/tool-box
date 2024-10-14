"use client";

import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <div>
      <ThemeSwitch />
      <main className="h-screen">
        <p className="">Main Page</p>
      </main>
    </div>
  );
}
