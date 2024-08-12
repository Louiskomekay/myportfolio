import { Lato } from "next/font/google";
import "./globals.css";

import NavBar from './_components/Navbar'
import Footer from './_components/Footer'
import Providers from './_components/Providers'

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: "Louiskome portfolio",
  description: "Your friendly neighborhood developer & designer who is focused on learning and building great applications",
  keywords: 'Louiskome, kome, developer, developer'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-[#6558f2]`}>
        <NavBar />
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
