import "./globals.css";
import type { Metadata } from "next";
import { LenisProvider } from "@/components/LenisProvider";
import { CursorGlow } from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Vasudeva Apartments · Ankola",
  description: "2 & 3 BHK premium mountain view flats on NH · Ready to occupy.",
  openGraph: {
    title: "Vasudeva Apartments · Ankola",
    description: "Premium living on NH · Ready to occupy.",
    type: "website"
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <CursorGlow />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
