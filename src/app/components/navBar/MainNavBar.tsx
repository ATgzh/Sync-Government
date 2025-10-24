import Image from 'next/image';
import Link from 'next/link';

export default function MainNavBar() {
  return (
    <div className="bg-[#49306e] h-16">
      <div className="mx-auto max-w-7xl px-5 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-12">
            <Link href="/">
              <Image 
                src="/images/MSU_logo.png"
                alt="MSU Logo"
                width={130}
                height={39}
                priority
              />
            </Link>
            <nav className="text-white text-base space-x-8">
              <Link href="/calendar">Calendar</Link>
              <Link href="/attorney">Attorney</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/files">Files</Link>
              <Link href="/senate/logging-hours">Log Hours</Link>
            </nav>
          </div>
          <button className="bg-[#febd11] text-white px-4 py-2 rounded-lg text-base">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}