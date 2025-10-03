"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { ArrowRight, Calendar, Vote, Scale } from "lucide-react";
import logo from '../../assets/purpleLogo.png';

interface HeroSectionProps {
  onNavigate: (route: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <Image 
                src={logo} 
                alt="MNSU Logo" 
                className="h-16 w-16 md:h-20 md:w-20"
                priority
              />
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Student Government
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-2">
                  Minnesota State University, Mankato
                </p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
              Welcome to your student-led hub for advocacy, support, and connection. 
              Connect with our student representatives and legal support network to make your voice heard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => onNavigate("/student/schedule")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => onNavigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Content - Service Cards */}
          <div className="grid gap-6">
            <div className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Attorney Appointments</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule legal consultations with our campus attorney for academic and personal matters.
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => onNavigate("/student/schedule")}
                  >
                    Schedule Now →
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Vote className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Senate Voting</h3>
                  <p className="text-muted-foreground mb-4">
                    Participate in student government decisions and make your voice heard on campus issues.
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => onNavigate("/senate/dashboard")}
                  >
                    View Agendas →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
