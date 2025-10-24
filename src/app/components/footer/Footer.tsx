export default function Footer() {
  return (
    <footer className="bg-[#382450] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#febd11]">
          <div>
            <h3 className="text-lg font-medium mb-8">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="/elections">Elections</a></li>
              <li><a href="/live-stream">Live Stream</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/state-wide">State-Wide Government</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-8">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <p>MSU Student Center, Room 204</p>
              <p>1400 Highway 14 West</p>
              <p>Mankato, MN 56001</p>
              <p>(507) 389-2611</p>
              <p>studentgov@mnsu.edu</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-8">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#febd11] rounded-full p-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M20 10.025C20 4.488 15.512 0 9.975 0 4.488 0 0 4.488 0 10.025c0 4.837 3.413 8.863 7.975 9.825V12.95H5.575v-2.925h2.4V7.725c0-2.375 1.413-3.675 3.563-3.675 1.025 0 2.1.188 2.1.188v2.312h-1.188c-1.162 0-1.525.725-1.525 1.475v1.775h2.6l-.413 2.925h-2.187v6.9C16.587 18.887 20 14.862 20 10.025z"/>
                </svg>
              </a>
              <a href="#" className="bg-[#febd11] rounded-full p-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M17.713 5.787c.012.175.012.35.012.525 0 5.338-4.063 11.488-11.488 11.488A11.41 11.41 0 010 16.288c.325.037.638.05.975.05a8.07 8.07 0 005.013-1.725 4.04 4.04 0 01-3.775-2.8c.25.038.5.063.763.063.363 0 .725-.05 1.063-.138A4.033 4.033 0 01.8 7.85v-.05c.537.3 1.162.488 1.825.513A4.027 4.027 0 01.837 4.85c0-.75.2-1.438.55-2.037a11.46 11.46 0 008.313 4.213c-.063-.3-.1-.612-.1-.925A4.026 4.026 0 0113.625 2c1.15 0 2.188.487 2.913 1.262a7.943 7.943 0 002.562-.975c-.3.938-.938 1.725-1.775 2.225A8.088 8.088 0 0019.5 3.9a8.682 8.682 0 01-1.787 1.887z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 text-gray-300">
          <p>© Minnesota State Student Government {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}