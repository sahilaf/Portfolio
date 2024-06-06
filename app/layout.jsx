import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairEffect from "../components/StairEffect";

const jetbrainsMono = JetBrains_Mono({
   subsets: ["latin"], 
   weight:["100","200","300","400","500","600","700","800"],
   variable:"--font-jetbrainsMono",

  });

export const metadata = {
  title: "Sahil Al Farib",
  description: "I’m Sahil, a passionate software developer with expertise in crafting efficient and innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairEffect/>
        <PageTransition >
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
