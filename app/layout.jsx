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
  description: "I’m Sahil, a passionate software developer with expertise in crafting efficient and innovative solutions.",
  image: "/opengraph-image.png",
  url: "https://sahilalfarib.tech"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Sahil Al Farib" />
        <meta property="og:description" content="I’m Sahil, a passionate software developer with expertise in crafting efficient and innovative solutions." />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sahilalfarib.tech" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
