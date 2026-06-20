import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://muzzupasha.vercel.app"),
  title: "Muzahir Ali | Full Stack MERN & AI Developer",
  description: "BCA student, self-taught MERN developer, and freelancer crafting high-performance full-stack web applications and AI-powered products.",
  keywords: ["MERN Stack", "AI Developer", "Full Stack Developer", "Next.js", "React Portfolio", "Muzahir Ali", "muzzupasha"],
  openGraph: {
    title: "Muzahir Ali | Full Stack MERN & AI Developer",
    description: "BCA student, self-taught MERN developer, and freelancer crafting high-performance full-stack web applications and AI-powered products.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muzahir Ali Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzahir Ali | Full Stack MERN & AI Developer",
    description: "BCA student, self-taught MERN developer, and freelancer crafting high-performance full-stack web applications and AI-powered products.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
