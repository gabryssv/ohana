import { Construction } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";
import ShinyText from "@/components/ShinyText";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil
          hueShift={240}
          noiseIntensity={0.08}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Content */}
      <main className="flex flex-col items-center justify-center px-6 text-center">
        {/* Logo / Name */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Ohana
          </h1>
          <p className="mt-2 text-muted-foreground text-lg tracking-widest uppercase">
            Kooperatywa Edukacyjna
          </p>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <Construction className="w-4 h-4 text-muted-foreground" />
          <ShinyText
            text="Strona w trakcie tworzenia"
            speed={3}
            delay={1}
            color="#a1a1aa"
            shineColor="#ffffff"
            spread={120}
            className="text-sm"
          />
        </div>

        {/* Description */}
        <p className="max-w-md text-muted-foreground leading-relaxed">
          Pracujemy nad czymś wyjątkowym. Wkrótce tutaj pojawi się nasza nowa strona.
        </p>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Ohana
        </p>
      </footer>
    </div>
  );
}
