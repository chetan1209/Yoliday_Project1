import React from 'react';

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

const navItems = [
  { label: 'Dashboard', icon: '🏠' },
  { label: 'Portfolio', icon: '📁' },
  { label: 'Inputs', icon: '📝' },
  { label: 'Profile', icon: '👤' },
];

const Sidebar: React.FC<SidebarProps> = ({ className = '', onClose }) => {
  return (
    <aside className={`flex flex-col w-56 bg-[#F15A29] text-white py-8 px-4 min-h-screen relative ${className}`}>
      {onClose && (
        <button
          className="absolute top-4 right-4 text-white text-2xl md:hidden"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          &times;
        </button>
      )}
      <div className="mb-10 text-2xl font-bold">LOGO</div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#e04e1e] transition"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 