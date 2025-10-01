"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useUser, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Menu, X, Home, User, Calendar, Vote } from "lucide-react";
import { Button } from "../ui/button";
import purpleLogo from '../../assets/purpleImage.png';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHome = pathname === '/';
  const showSignInButton = pathname !== '/auth/sign-in';

  // Navigation items based on user role and authentication status
  const getNavigationItems = () => {
    if (!user) {
      return [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: User },
      ];
    }

    // Authenticated user navigation
    const baseItems = [
      { name: 'Home', href: '/', icon: Home },
      { name: 'Schedule', href: '/student/schedule', icon: Calendar },
    ];

    // Add role-specific items
    const userRole = user.publicMetadata?.role;
    if (userRole === 'senate_member' || userRole === 'senate_speaker') {
      baseItems.push({ name: 'Senate', href: '/senate/dashboard', icon: Vote });
    }
    if (userRole === 'attorney') {
      baseItems.push({ name: 'Attorney', href: '/attorney/dashboard', icon: User });
    }
    if (userRole === 'admin') {
      baseItems.push({ name: 'Admin', href: '/admin/dashboard', icon: User });
    }

    return baseItems;
  };

  const navigationItems = getNavigationItems();

  const handleNavigation = (href: string) => {
    if (!user && href !== '/' && href !== '/about') {
      router.push("/auth/sign-in");
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src={isHome ? purpleLogo : purpleLogo} 
              alt="MNSU Logo" 
              className="h-12 w-12 object-contain"
              priority
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">Student Government</h1>
              <p className="text-sm text-muted-foreground">Minnesota State University</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground/80'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <div className="hidden md:flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">
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
            {showSignInButton && (
              <Button 
                onClick={() => router.push("/auth/sign-in")}
                variant="default"
                size="sm"
              >
                Sign In
              </Button>
            )}
          </SignedOut>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container px-4 py-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground/80'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
            
            {/* Mobile User Section */}
            <SignedIn>
              <div className="flex items-center space-x-3 px-3 py-3 border-t border-border mt-4 pt-4">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8",
                    }
                  }}
                />
                <span className="text-sm text-muted-foreground">
                  Welcome, {user?.firstName}
                </span>
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
