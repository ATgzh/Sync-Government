"use client";

import React from 'react';
import { Button } from "../../components/ui/button";
import { ArrowRight, Users, Calendar } from "lucide-react";

interface CallToActionProps {
  onNavigate: (route: string) => void;
}

export default function CallToAction({ onNavigate }: CallToActionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join thousands of students who are already making their voices heard. 
            Start by scheduling an appointment or participating in our democratic processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
              onClick={() => onNavigate("/student/schedule")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Appointment
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => onNavigate("/senate/dashboard")}
            >
              <Users className="mr-2 h-5 w-5" />
              Join Senate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
