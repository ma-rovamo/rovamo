import { Source_Sans_3, Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--body-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Rovamo - AI-Powered Innovation for Tomorrow\'s Products',
    template: '%s | Rovamo - AI-Powered Innovation',
  },
  description: 'Transform ideas into intelligent solutions with AI consulting, 48-hour MVP development, and rapid digital transformation. Get results in days, not months.',
  keywords: 'AI consulting, MVP development, product design, web development, digital transformation, artificial intelligence',
  openGraph: {
    title: 'Rovamo - AI-Powered Innovation for Tomorrow\'s Products',
    description: 'Transform ideas into intelligent solutions with AI consulting, 48-hour MVP development, and rapid digital transformation. Get results in days, not months.',
    url: 'https://rovamo.com',
    siteName: 'Rovamo Agency',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Rovamo Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rovamo - AI-Powered Innovation for Tomorrow\'s Products',
    description: 'Transform ideas into intelligent solutions with AI consulting, 48-hour MVP development, and rapid digital transformation. Get results in days, not months.',
    images: ['/images/rovamo-twitter-card.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://rovamo.com'),
};


export default function RootLayout({ children } : any ) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
