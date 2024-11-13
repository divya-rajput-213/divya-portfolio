import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AboutContent from "./components/AboutContent";
import ProfileContent from "./components/ProfileContent";
import Skills from "./components/SkillContent";

export default function Home() {
  return (
    <>
      {/* Decorative Background Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              fill="none"
              stroke="#D4C5B5"
              strokeWidth="1"
              d="M 0,100 C 20,120 40,120 60,100 C 80,80 100,80 120,100 C 140,120 160,120 180,100"
              className="animate-[wave_15s_ease-in-out_infinite]"
            />
          </svg>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Profile Section */}
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 items-start mb-20">
          <div className="relative">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border-2 border-zinc-200">
              <Image
                src="/images/divya.jpeg"
                alt="Divya's Profile"
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div>
            <h1 className="font-serif text-5xl mb-8">DIVYA</h1>
            <AboutContent />
          </div>
        </div>

        <ProfileContent />

        <Skills />

        {/* Contact Information */}
        <div className="mt-20 flex justify-between text-zinc-600">
          <span>+918146683223</span>
          <span>divyarajput3223@gmail.com</span>
          <Link
            href="https://www.linkedin.com/in/divya-81647202/"
            className="hover:text-zinc-900"
          >
            LinkedIn Profile
          </Link>
        </div>
      </main>
    </>
  );
}
