"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const NAV_LINKS: readonly NavItem[] = [
  { label: "School", href: "/school" },
  { label: "College", href: "/college" },
  { label: "Programming", href: "/programming" },
  { label: "Career", href: "/career" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);

  // Close mobile menu when pathname changes without cascading effect renders
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Handle Escape key to close mobile menu & focus return
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close mobile menu if window is resized above mobile breakpoint (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222222] bg-[#000000]">
      <nav
        ref={navContainerRef}
        aria-label="Main Navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        {/* Brand Representation (Left) */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center rounded-[2px] py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#555555]"
            aria-label="OpenLUPAS Home"
          >
            {/* Logo placeholder slot: uses clean text representation until official asset is provided */}
            <span className="text-base font-semibold tracking-[-0.02em] text-white transition-opacity group-hover:opacity-85 sm:text-lg">
              OpenLUPAS
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links (Center / Right) */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 text-sm font-medium tracking-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#555555] rounded-[2px] ${
                  isActive
                    ? "text-white"
                    : "text-[#A3A3A3] hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-[21px] left-0 right-0 h-[1.5px] bg-white"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Section: Search Trigger & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Desktop Search Trigger */}
          <Link
            href="/search"
            aria-label="Search"
            className="group hidden items-center gap-2 rounded-[4px] border border-[#222222] bg-[#0A0A0A] px-3 py-1.5 text-xs font-medium text-[#A3A3A3] transition-colors hover:border-[#333333] hover:bg-[#111111] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#555555] sm:inline-flex"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="text-[#737373] transition-colors group-hover:text-white"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span>Search</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[#222222] bg-[#0A0A0A] text-[#A3A3A3] transition-colors hover:border-[#333333] hover:bg-[#111111] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#555555] md:hidden"
          >
            {isOpen ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer / Panel */}
      <div
        id="mobile-nav-panel"
        aria-label="Mobile Navigation Menu"
        className={`border-t border-[#181818] bg-[#000000] px-6 py-5 transition-all duration-150 ease-out md:hidden ${
          isOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-[4px] px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#555555] ${
                  isActive
                    ? "bg-[#111111] text-white"
                    : "text-[#A3A3A3] hover:bg-[#0A0A0A] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile Search Item */}
          <div className="pt-2 border-t border-[#181818]">
            <Link
              href="/search"
              onClick={() => setIsOpen(false)}
              aria-label="Search"
              className="flex items-center gap-2.5 rounded-[4px] px-3 py-2 text-sm font-medium text-[#A3A3A3] transition-colors hover:bg-[#0A0A0A] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#555555]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="text-[#737373]"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span>Search</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
