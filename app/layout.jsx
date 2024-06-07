import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
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
  image: "/opengraph-image.png",
  url: "https://sahilalfarib.tech"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sahilalfarib.tech" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
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
