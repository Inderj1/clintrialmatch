"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface MenuItem {
  title: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<{
    title: string;
    path: string;
  }>;
}

const Navbar = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  // Menu items
  const menuItems: MenuItem[] = [
    { title: "Platform", path: "/platform" },
    { title: "Case Studies", path: "/case-studies" },
    { title: "Newsletter", path: "/newsletter" },
    { title: "Volunteers", path: "/volunteers" },
    { title: "Patient Portal", path: "/login" },
    { title: "Provider Login", path: "/provider-login" }
  ];

  // Actions
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  const toggleDropdown = (title: string) => {
    if (window.innerWidth >= 768) { // Only for desktop
      setActiveDropdown(activeDropdown === title ? null : title);
    }
  };

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = document.querySelectorAll('.relative');
      let clickedOutside = true;
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target as Node)) {
          clickedOutside = false;
        }
      });
      if (clickedOutside) {
        setActiveDropdown(null);
        setActiveMobileDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-navbar shadow-sm">
      {/* Announcement Banner */}
      {showBanner && (
        <div className="w-full bg-[#872341] text-white text-center py-2 text-sm">
          Meet the Top 100 Trailblazers — aesthetic and wellness practices that redefined the patient experience.
          <button className="ml-2 font-medium hover:underline">Click to Read</button>
          <button onClick={closeBanner} className="absolute right-4 top-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary-dark">Merix</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            {menuItems.map((item) => (
              !item.hasDropdown ? (
                <Link
                  key={item.title}
                  href={item.path}
                  className="text-lg text-primary-dark hover:text-primary-dark/80 transition-colors duration-300">
                  {item.title}
                </Link>
              ) : (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onClick={() => toggleDropdown(item.title)}>
                  <button
                    className="flex items-center text-lg text-primary-dark hover:text-primary-dark/80 transition-colors duration-300"
                    type="button">
                    {item.title}
                    <svg
                      className={`w-4 h-4 ml-1 ${activeDropdown === item.title ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Content */}
                  {activeDropdown === item.title && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[200] border border-gray-100">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-primary-dark hover:bg-gray-100 hover:text-primary-dark/80 transition-colors duration-300">
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
          <div className="flex items-center space-x-4 ml-6">
            <Link href="/contact" className="px-4 py-2 text-primary-dark bg-[#fdc500] hover:bg-[#fdc500]/90 rounded-md transition-colors duration-300">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item) => (
              !item.hasDropdown ? (
                <Link
                  key={item.title}
                  href={item.path}
                  className="block py-3 text-lg text-primary-dark hover:text-primary-dark/80 hover:bg-gray-800 px-4 rounded-lg transition-colors duration-300"
                  onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              ) : (
                <div key={item.title} className="py-3 px-4">
                  <button
                    className="flex items-center justify-between w-full text-lg text-primary-dark hover:text-primary-dark/80"
                    onClick={() => toggleMobileDropdown(item.title)}>
                    {item.title}
                    <svg
                      className={`w-4 h-4 ml-1 ${activeMobileDropdown === item.title ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeMobileDropdown === item.title && (
                    <div className="mt-2 pl-4">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.path}
                          className="block py-2 text-primary-dark hover:text-primary-dark/80 hover:bg-gray-800 rounded-lg transition-colors duration-300"
                          onClick={() => setIsOpen(false)}>
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
            <div className="border-t border-gray-100 mt-2 pt-2">
              <Link
                href="/contact"
                className="block py-3 text-lg text-primary-dark bg-[#fdc500] hover:bg-[#fdc500]/90 px-4 rounded-lg mt-2"
                onClick={() => setIsOpen(false)}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
