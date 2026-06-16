import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "../data/profile.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Dr. Srishti home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-medical-600 text-sm font-bold text-white">
            SM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">{profile.name}</span>
            <span className="block text-xs text-slate-500">Community Medicine</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-medical-50 hover:text-medical-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
