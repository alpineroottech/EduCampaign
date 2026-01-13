import type { Metadata } from "next";
import { dmSans, poppins, numans } from "@/components/ui/fonts/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import ScrollToTop from "@/components/ScrollToTop";


//comment for vercel 
export const metadata: Metadata = {
  title: "Edu. Campaign | Best Consultancy  in Kathmandu",
  description: "Best Education Consultancy in Kathmandu",
  robots: "all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${poppins.variable} ${numans.variable} antialiased relative`}
      >
        <GlobalBackground />
        <Header />
        {children}
        <Footer
          mapEmbedUrl="https://maps.google.com/maps?width=400&height=300&hl=en&q=Edu.%20Campaign%20Pvt&t=&z=15&ie=UTF8&iwloc=B&output=embed"
        />
        <ScrollToTop />

      </body>
    </html>
  );
}
