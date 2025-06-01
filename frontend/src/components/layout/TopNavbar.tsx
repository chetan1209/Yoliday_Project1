import React, { useState } from 'react';
import { ShoppingCart, ChevronDown } from 'lucide-react';

interface CartProject {
  title: string;
}

interface TopNavbarProps {
  cartCount?: number;
  cartItems?: string[];
  cartProjects?: CartProject[];
  onRemoveCartItem?: (title: string) => void;
  onMenuClick?: () => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ cartCount = 0, cartItems = [], cartProjects = [], onRemoveCartItem, onMenuClick }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="w-full h-16 flex items-center justify-between bg-white shadow px-4 md:px-8">
      <div className="flex items-center gap-2">
        {/* Hamburger menu for mobile */}
        <button className="md:hidden mr-2" onClick={onMenuClick} aria-label="Open sidebar">
          <span className="material-icons text-3xl text-[#F15A29]">menu</span>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative" onClick={() => setShowCart(true)}>
          <ShoppingCart className="w-6 h-6 text-[#F15A29]" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#F15A29] text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
              {cartCount}
            </span>
          )}
        </button>
        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 min-w-[400px] min-h-[300px] max-w-[90vw] max-h-[80vh] relative overflow-y-auto">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl" onClick={() => setShowCart(false)}>
                &times;
              </button>
              <h2 className="text-lg font-bold mb-4 text-black">Cart</h2>
              {cartProjects.length === 0 ? (
                <div className="text-black font-bold">Your cart is empty.</div>
              ) : (
                <ul className="space-y-4">
                  {cartProjects.map((project, idx) => (
                    <li key={idx} className="flex items-center justify-between gap-4 border-b pb-2">
                      <span className="text-black font-bold">{project.title}</span>
                      <button
                        className="px-3 py-1 rounded text-xs font-medium bg-red-100 text-red-700 border border-red-300 hover:bg-red-200 transition"
                        onClick={() => onRemoveCartItem && onRemoveCartItem(project.title)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
        <button className="relative">
          <span className="material-icons text-gray-500">Notifications</span>
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col text-right">
            <span className="font-semibold text-sm text-gray-800">Lorem Ips</span>
            <span className="text-xs text-gray-600 font-semibold">Manager</span>
          </div>
        </div>
        <button>
          <ChevronDown className="w-4 h-4 text-black" />
        </button>
      </div>
    </header>
  );
};

export default TopNavbar; 