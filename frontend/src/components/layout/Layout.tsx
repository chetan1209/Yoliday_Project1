"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';

interface LayoutProps {
  children: React.ReactNode;
  cartCount?: number;
  cartProjects?: { title: string }[];
  onRemoveCartItem?: (title: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, cartCount, cartProjects, onRemoveCartItem }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <TopNavbar cartCount={cartCount} cartProjects={cartProjects} onRemoveCartItem={onRemoveCartItem} onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <Sidebar className="hidden md:flex" />
        {/* Sidebar drawer for mobile (from left) */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            <Sidebar className="flex fixed left-0 top-0 h-full z-50 shadow-lg" onClose={() => setSidebarOpen(false)} />
            <div className="bg-black bg-opacity-30 flex-1" onClick={() => setSidebarOpen(false)} />
          </div>
        )}
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 