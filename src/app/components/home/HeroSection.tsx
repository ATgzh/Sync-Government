import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function HeroSection() {
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
    <div className="relative bg-[#49306e] h-[600px]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/student_government_background.png"
          alt="MSU Campus Clock Tower"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-5">
        <div className="pt-44">
          <div className="max-w-lg">
            <h1 className="font-kanit text-[60px] leading-[60px] text-white mb-6">
              Student Government
            </h1>
            <p className="text-xl text-white/90 mb-12">
              Welcome to your student-led hub for advocacy, support, and connection.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => router.push('/student/schedule')} 
                className="bg-[#febd11] text-white px-8 py-4 rounded-lg text-base hover:bg-[#e5aa0f] transition-colors">
                Schedule Appointment
              </button>
              <button 
                onClick={() => router.push('/new-homepage')} 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}