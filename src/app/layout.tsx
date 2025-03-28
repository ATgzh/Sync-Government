"use client";

import { Geist, Geist_Mono, Kanit  } from "next/font/google";

import "./globals.css";
import NavBar from "./components/navBar/navBar";

import { CollapsedProvider } from "./components/sideBar/sideBarContext";

import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { useAssignRole } from "../app/hooks/useAssignRole"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Customize weights if needed
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedIn>
              <AssignRoleAfterLogin />
            </SignedIn>
          </header>
          <CollapsedProvider>   
            <NavBar />
            {children}
          </CollapsedProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

/**
 * Component to trigger the role assignment API after user login.
 * Utilizes the custom hook 'useAssignRole' to check and assign the default role.
 * This ensures the role assignment logic is executed only once per login.
 */
function AssignRoleAfterLogin() {
  // Custom hook to call the role assignment API
  useAssignRole();
  
  // This component does not render anything on the UI
  return null;
}

