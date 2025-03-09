"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // Check if the current route is a dashboard or authenticated route
  // Only hide navbar on dashboard pages, not on login pages
  const isAuthenticatedRoute = 
    pathname?.includes('/patient/dashboard') || 
    pathname?.includes('/provider/dashboard');
  
  if (isAuthenticatedRoute) {
    return null;
  }
  
  return (
    <>
      <Navbar />
      <div className="pt-[72px]"></div>
    </>
  );
}
