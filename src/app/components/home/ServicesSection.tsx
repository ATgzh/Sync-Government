import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  route: string;
  onClick: (route: string) => void;
}

function ServiceCard({ icon, title, description, route, onClick }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8">
      <div className="flex justify-center mb-6">
        <div className="bg-[#49306e] rounded-full p-4 w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl text-[#49306e] text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      <button 
        onClick={() => onClick(route)}
        className="w-full bg-[#febd11] text-white py-3 rounded-lg hover:bg-[#e5aa0f] transition-colors"
      >
        Get Started
      </button>
    </div>
  );
}

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function ServicesSection() {
  const router = useRouter();
  const { user } = useUser();

  const handleNavigation = (route: string) => {
    if (!user) {
      router.push('/auth/sign-in');
    } else {
      router.push(route);
    }
  };
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-[36px] text-[#49306e] mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600">Comprehensive support for the MSU community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"/>
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
            }
            title="Students"
            description="Academic advocacy, campus life improvements, and direct representation in university decisions."
            route="/student/schedule"
            onClick={handleNavigation}
          />
          
          <ServiceCard
            icon={
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 16H4V5h16v14z"/>
                <path d="M14 11h4v2h-4zm-8 0h6v2H6z"/>
              </svg>
            }
            title="Legal Support"
            description="Free legal consultation and support for student-related issues and campus concerns."
            route="/attorney/dashboard"
            onClick={handleNavigation}
          />
          
          <ServiceCard
            icon={
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 9c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3V9zm-6 8c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/>
                <path d="M9 9c0-1.7-1.3-3-3-3H2C.3 6 0 7.3 0 9v6c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3V9zM3 17c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/>
              </svg>
            }
            title="Senate"
            description="Participate in student governance, policy-making, and represent your fellow students' interests."
            route="/senate/dashboard"
            onClick={handleNavigation}
          />
        </div>
      </div>
    </section>
  );
}