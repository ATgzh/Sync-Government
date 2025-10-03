"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

// Import components we'll create for the new homepage
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';

export default function NewHomePage() {
  const router = useRouter();
  const { user } = useUser();

  // Function to handle role-based redirection
  const handleNavigation = (route: string) => {
    if (!user) {
      router.push("/auth/sign-in");
    } else {
      router.push(route);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onNavigate={handleNavigation} />
      
      {/* Features Section */}
      <FeaturesSection onNavigate={handleNavigation} />
      
      {/* Call to Action Section */}
      <CallToAction onNavigate={handleNavigation} />
      
      {/* Footer will be handled by layout */}
    </div>
  );
}
