import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

import Header from '../components/Header';
import PageTransition from '../components/PageTransition';
import StairEffect from '../components/StairEffect';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Sahil Al Farib',
  description:
    "I’m Sahil, a passionate software developer with expertise in crafting efficient and innovative solutions. With a strong foundation in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, C, C++, and Java, I specialize in developing robust applications that meet client needs and exceed expectations. Explore my projects to see how I turn complex problems into elegant software solutions. Let's build something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
