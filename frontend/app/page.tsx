"use client"
import Ruleta from "./components/specific/roulette";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#121725] flex flex-col items-center justify-center">
      <Ruleta/>
    </main>
  );
}