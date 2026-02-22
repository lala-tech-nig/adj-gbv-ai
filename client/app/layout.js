import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ogun State GBV AI Reporting Portal",
  description:
    "Report gender-based violence safely and confidentially with AI-assisted support. Secure, anonymous, and professional help from Ogun State Ministry of Women Affairs.",
  keywords:
    "GBV reporting, gender-based violence, AI reporting system, anonymous reporting, Ogun State Ministry of Women Affairs, safe reporting, AI-assisted support, women's safety Nigeria",
  authors: [
    {
      name: "Ogun State Ministry of Women Affairs",
      url: "https://www.ogunstate.gov.ng",
    },
  ],
  creator: "Ogun State Ministry of Women Affairs",
  publisher: "Ogun State Government",
  robots: "index, follow",
  openGraph: {
    title: "Ogun State GBV AI Reporting Portal",
    description:
      "AI-assisted platform for confidential gender-based violence reporting in Ogun State. Safety first.",
    url: "https://yourdomain.com",
    siteName: "Ogun GBV Portal",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ogun State GBV AI Portal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogun State GBV AI Reporting Portal",
    description:
      "AI-assisted confidential reporting of gender-based violence. Secure, fast, and anonymous.",
    images: ["https://yourdomain.com/og-image.jpg"],
    site: "@OgunStateGov",
    creator: "@OgunStateGov",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Ogun State Ministry of Women Affairs" />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        {metadata.openGraph.images.map((img, idx) => (
          <meta key={idx} property="og:image" content={img.url} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />

        {/* Favicon */}
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
