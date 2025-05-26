import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairEffect from "../components/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Sahil Al Farib",
  description: "Passionate software developer crafting efficient and innovative solutions. Explore my portfolio, showcasing expertise in web development, cutting-edge technologies, and creative problem-solving.",
  image: "https://sahilalfarib.tech/opengraph-image.png",  // Absolute URL
  url: "https://sahilalfarib.tech"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Sahil Al Farib" /> {/* Absolute URL */}
        <meta property="og:description" content="Passionate AI/ML and Full-Stack Developer dedicated to building intelligent, scalable, and impactful solutions. Explore my portfolio to see my expertise in artificial intelligence, machine learning, and modern full-stack web development — where innovative thinking meets technical excellence." />
        <meta property="og:image" content="https://sahilalfarib.tech/opengraph-image.png" /> {/* Absolute URL */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sahilalfarib.tech" />
        <link rel="icon" href="https://sahilalfarib.tech/favicon.ico" type="image/x-icon" sizes="48x48" /> {/* Absolute URL */}
        <link rel="icon" href="https://sahilalfarib.tech/favicon.ico" sizes="192x192" /> {/* Android Chrome icon */}
        <link rel="icon" href="https://sahilalfarib.tech/favicon.ico" sizes="128x128" /> {/* Android Chrome fallback icon */}
        <link rel="apple-touch-icon" href="https://sahilalfarib.tech/favicon.ico" /> {/* iOS Apple Touch Icon */}
        <link rel="video" href="https://sahilalfarib.tech/videos/feature-1.mp4" />
        <link rel="video" href="https://sahilalfarib.tech/videos/feature-2.mp4" />
        <link rel="video" href="https://sahilalfarib.tech/videos/feature-3.mp4" />
        <link rel="video" href="https://sahilalfarib.tech/videos/feature-4.mp4" />
        <link rel="video" href="https://sahilalfarib.tech/videos/feature-5.mp4" />
        <link rel="video" href="https://sahilalfarib.tech/videos/hero-1.mp4" />
        <link rel="video" href="https://sahilalfarib.tech/videos/hero-2.mp4" />
        <link rel="video" href="https://sahilalfarib.tech/videos/hero-3.mp4" />
        <link rel="video" href="https://sahilalfarib.tech/videos/hero-4.mp4" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>
          {children}
          <SpeedInsights />
        </PageTransition>
      </body>
    </html>
  );
}
