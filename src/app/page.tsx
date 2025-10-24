"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import HeroSection from './components/home/HeroSection';
import TeamSection from './components/home/TeamSection';
import ServicesSection from './components/home/ServicesSection';
import ContactSection from './components/home/ContactSection';

export default function HomePage() {
  const router = useRouter();
  const { user } = useUser(); // Get user info from Clerk

  // Function to handle role-based redirection
  const handleNavigation = (route: string) => {
    if (!user) {
      // Redirect to sign-in if not logged in
      router.push("/auth/sign-in");
    } else {
      // Redirect authenticated users to their dashboard (handled on back end)
      router.push(route);
    }
  };

  return (
    <div className="bg-white">
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
