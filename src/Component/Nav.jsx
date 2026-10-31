import React, { useState } from "react";
import {Link}  from 'react-router-dom'
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "2349119361695";

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f6ef] border-b border-[#e9e3d8] shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="h-20 md:h-24 flex items-center justify-between">

            {/* LOGO */}
           

              <div className="md:hidden">
                <h1 className="font-serif text-xl sm:text-2xl text-[#514438]">
                  ORURU TEGIRI
                </h1>

                <p className="text-[10px] tracking-[2px] text-[#82786d]">
                  CLOTHING STORE
                </p>
              </div>

              <h1 className="hidden md:block font-serif text-2xl text-[#514438]">
                ORURU TEGIRI CLOTHING STORE
              </h1>

            

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-10">

              <Link to="/" className="text-xs tracking-[3px] text-[#62594f]">
                HOME
              </Link>

              <Link to="/shop" className="text-xs tracking-[3px] text-[#62594f]">
                SHOP
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-700 flex items-center gap-2"
              >
                <span>◉</span>
                Chat
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-[#514438] p-2"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </nav>


      {/* DARK BACKGROUND OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />


      {/* SLIDING SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#f8f6ef] z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#e9e3d8]">

          <h2 className="font-serif text-xl text-[#514438]">
            ORURU TEGIRI
          </h2>

          <button
            onClick={closeMenu}
            className="text-3xl text-[#514438]"
            aria-label="Close menu"
          >
            ×
          </button>

        </div>


        {/* SIDEBAR LINKS */}
        <div className="px-6 py-10">

          <p className="text-[10px] tracking-[4px] text-[#a09280] mb-8">
            NAVIGATION
          </p>

          <div className="flex flex-col">

            <Link
              to="/"
              onClick={closeMenu}
              className="py-5 border-b border-[#e9e3d8] font-serif text-2xl text-[#514438]"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={closeMenu}
              className="py-5 border-b border-[#e9e3d8] font-serif text-2xl text-[#514438]"
            >
              Shop
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="py-5 border-b border-[#e9e3d8] font-serif text-2xl text-green-700"
            >
              WhatsApp Chat →
            </a>

          </div>

          <p className="text-xs text-[#918779] mt-16">
            ORURU TEGIRI CLOTHING SERVICE
          </p>

        </div>

      </aside>
    </>
  );
}

export default Nav ;