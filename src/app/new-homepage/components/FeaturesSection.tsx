"use client";

import React from 'react';
import { Users, Shield, MessageSquare, Calendar, Vote, Scale } from "lucide-react";

interface FeaturesSectionProps {
  onNavigate: (route: string) => void;
}

const features = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book attorney appointments with real-time availability and automated reminders.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Vote,
    title: "Democratic Participation",
    description: "Engage in student government voting with secure, transparent processes.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Shield,
    title: "Legal Support",
    description: "Access professional legal consultation for academic and personal matters.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Users,
    title: "Student Advocacy",
    description: "Connect with representatives who fight for student rights and interests.",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: MessageSquare,
    title: "Open Communication",
    description: "Direct channels to voice concerns and suggestions to student leadership.",
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    icon: Scale,
    title: "Fair Representation",
    description: "Ensuring all student voices are heard in university decision-making.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  }
];

export default function FeaturesSection({ onNavigate }: FeaturesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Why Choose Student Government?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support and representation for all Minnesota State University students, 
            ensuring your voice is heard and your needs are met.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
