"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useUser, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  


  // Navigation items as specified in Figma
  const navigationItems = [
    { name: 'Calendar', href: '/student/schedule' },
    { name: 'Attorney', href: '/attorney/dashboard' },
    { name: 'Resources', href: '/resources' },
    { name: 'Files', href: '/files' },
  ];

  const handleNavigation = (href: string) => {
    if (!user && href !== '/' && href !== '/about') {
      router.push("/auth/sign-in");
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#49306E' }}>
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">

        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/MSU_logo.png"
            alt="MSU Logo"
            width={130}
            height={39}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`text-white hover:text-white/80 transition-colors ${
                  isActive ? 'text-white font-medium' : ''
                }`}
                style={{
                  fontFamily: 'Kanit, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400'
                }}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <div className="hidden md:flex items-center space-x-3">
              <span className="text-white text-sm">
                Welcome, {user?.firstName}
              </span>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  }
                }}
              />
            </div>
          </SignedIn>

          <SignedOut>
            <Button
              onClick={() => router.push("/auth/sign-in")}
              className="hidden md:flex items-center justify-center text-black hover:bg-yellow-400 transition-colors"
              style={{
                backgroundColor: '#FEBD11',
                width: '96px',
                height: '40px',
                fontFamily: 'Kanit, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                borderRadius: '8px',
                border: 'none'
              }}
            >
              Sign In
            </Button>
          </SignedOut>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/20" style={{ backgroundColor: '#49306E' }}>
          <div className="container px-4 py-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full px-3 py-3 text-left text-white hover:bg-white/10 rounded-md transition-colors ${
                    isActive ? 'bg-white/20' : ''
                  }`}
                  style={{
                    fontFamily: 'Kanit, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400'
                  }}
                >
                  {item.name}
                </button>
              );
            })}

            {/* Mobile User Section */}
            <SignedIn>
              <div className="flex items-center space-x-3 px-3 py-3 border-t border-white/20 mt-4 pt-4">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8",
                    }
                  }}
                />
                <span className="text-white text-sm">
                  Welcome, {user?.firstName}
                </span>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="px-3 py-3 border-t border-white/20 mt-4 pt-4">
                <Button
                  onClick={() => router.push("/auth/sign-in")}
                  className="w-full text-black hover:bg-yellow-400 transition-colors"
                  style={{
                    backgroundColor: '#FEBD11',
                    fontFamily: 'Kanit, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    borderRadius: '8px',
                    border: 'none'
                  }}
                >
                  Sign In
                </Button>
              </div>
            </SignedOut>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
