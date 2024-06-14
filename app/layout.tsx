import { GeistSans } from "geist/font/sans";
import "./globals.css";
import AsideNavbar from "@/components/Navbar/AsideNavbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center justify-center">
          {/* <div className="h-[100vh] absolute left-0 top-0 w-[12.5%] bg-white shadow-xl ">
            <AsideNavbar />
          </div> */}
          {children}
        </main>
      </body>
    </html>
  );
}
