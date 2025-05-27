import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/Logo2.png" sizes="any" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="AI Career Coach - Your trusted career companion." />
        </head>
        <body className={`${inter.className} bg-gray-900 text-gray-100`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen container mx-auto px-4 py-8">
              {children}
            </main>
            <Toaster richColors />

            <footer className="bg-gray-800 py-8">
              <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} <span className="font-semibold text-gray-200">AI Career Coach</span>. All rights reserved.
                </p>
                <p className="text-sm mt-2 text-gray-400">
                  Built with passion by <span className="font-semibold text-gray-200">Your Career Companion</span>.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-200 transition">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-200 transition">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-200 transition">
                    Contact Us
                  </a>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
