import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-gray-100 text-gray-600 py-4 mt-8 text-center border-t">
    <span className="text-sm">&copy; {new Date().getFullYear()} eCom App. All rights reserved.</span>
  </footer>
);

export default Footer;
