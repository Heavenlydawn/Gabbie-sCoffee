"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/coffee-icon.png"

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <header className="py-8">
        <nav className="flex items-center justify-between">
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="hidden md:flex gap-9 text-base font-medium">
          <Link href="/home">
              <p className="text-lg">Home</p>
            </Link>
            <Link href="/explore">
              <p className="text-lg">Explore</p>
            </Link>
            <Link href="/contact">
              <p className="text-lg">Contact</p>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>☰</button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            mobileMenuOpen ? "block" : "hidden"
          } absolute top-0 left-0 h-screen w-2/3 bg-white z-50 transform transition-transform ease-in-out duration-300`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <Link href="/home">
              <p className="text-lg">Home</p>
            </Link>
            <Link href="/explore">
              <p className="text-lg">Explore</p>
            </Link>
            <Link href="/contact">
              <p className="text-lg">Contact</p>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
