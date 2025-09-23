import React from 'react';

const Header: React.FC = () => (
  <header className="w-full bg-[#232f3e] text-white shadow flex items-center justify-between px-6 py-4 border-b" style={{borderBottom: '2px solid #f8bd19'}}>
    <div className="flex items-center">
      <span className="text-xl font-bold tracking-wide">eCom App</span>
    </div>
    <nav className="hidden md:flex space-x-6">
      {/* Add navigation links here if needed */}
    </nav>
  </header>
);

export default Header;
