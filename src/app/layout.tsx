import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { dark } from "@clerk/themes";

import {
  ClerkProvider,
  ClerkLoading,
  Protect,
  SignInButton,
  SignedIn,
  SignedOut,
  ClerkLoaded,
  UserButton,
  RedirectToSignIn,
  SignUpButton,
} from "@clerk/nextjs";
import "./globals.css";
import LogoutSuccessful from "./logout/page";
import Loader from "./loader/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arifkoyani",
  description: "Skyloom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
    
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            <div>
              <Loader />
            </div>
          </ClerkLoading>
          <SignedOut>
            <LogoutSuccessful />
          </SignedOut>
          <SignedIn></SignedIn>

          <Protect>
            <ClerkLoaded>{children}</ClerkLoaded>
          </Protect>
        </body>
      </ClerkProvider>
    </html>
  );
}
