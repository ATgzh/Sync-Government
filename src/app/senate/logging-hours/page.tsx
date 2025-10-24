import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SenateLoggingHours() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="bg-[#49306e] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image 
                src="/images/MSU_logo.png"
                alt="MSU Logo"
                width={130}
                height={39}
                priority
              />
              <nav className="text-white space-x-8 text-base">
                <Link href="/calendar" className="hover:text-[#febd11]">Calendar</Link>
                <Link href="/attorney" className="hover:text-[#febd11]">Attorney</Link>
                <Link href="/resources" className="hover:text-[#febd11]">Resources</Link>
                <Link href="/files" className="hover:text-[#febd11]">Files</Link>
                <Link href="/senate/logging-hours" className="hover:text-[#febd11]">Log Hours</Link>
              </nav>
            </div>
            <button className="bg-[#febd11] text-white px-6 py-2 rounded-lg hover:bg-[#e5ae0f]">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-[#49306e] border-t border-white/10">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center py-4">
            <div className="text-white space-x-12">
              <Link href="/dashboard" className="hover:text-[#febd11]">Dashboard</Link>
              <Link href="/voting" className="hover:text-[#febd11]">Voting</Link>
              <Link href="/hours" className="hover:text-[#febd11]">Hours</Link>
              <Link href="/forms" className="hover:text-[#febd11]">Forms</Link>
              <Link href="/feedback" className="hover:text-[#febd11]">Feedback</Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <header className="bg-[#49306e] pt-12 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Senator Hour Logging</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Log your senate related hours. Keep track of your progress and ensure your participation is recorded accurately.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Table */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Hours Log</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hours</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">Oct {index + 1}, 2025</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{2 + index * 0.5}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Committee Meeting</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Approved
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Monthly Summary</h2>
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 text-sm text-gray-900">Required Hours</td>
                  <td className="py-3 text-sm text-gray-900 font-medium text-right">40.0</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm text-gray-900">Completed Hours</td>
                  <td className="py-3 text-sm text-gray-900 font-medium text-right">12.5</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm text-gray-900">Pending Hours</td>
                  <td className="py-3 text-sm text-gray-900 font-medium text-right">27.5</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm text-gray-900">Last Updated</td>
                  <td className="py-3 text-sm text-gray-900 font-medium text-right">Oct 3, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#49306e] text-white mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: msu@mnsu.edu</li>
                <li>Phone: (507) 389-1866</li>
                <li>Location: Mankato, MN</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#febd11]">Home</a></li>
                <li><a href="#" className="hover:text-[#febd11]">About Us</a></li>
                <li><a href="#" className="hover:text-[#febd11]">Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#febd11]">Forms</a></li>
                <li><a href="#" className="hover:text-[#febd11]">Documents</a></li>
                <li><a href="#" className="hover:text-[#febd11]">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#febd11]">Facebook</a></li>
                <li><a href="#" className="hover:text-[#febd11]">Twitter</a></li>
                <li><a href="#" className="hover:text-[#febd11]">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2025 Minnesota State University Student Government. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}