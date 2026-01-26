'use client';

import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="hidden md:block bg-gradient-to-b from-[#000066] to-[#000033] border-r-[3px] border-[#6666ff] p-3 sticky top-0 h-screen overflow-y-auto">
      <div className="font-pixel text-[0.6rem] text-[var(--electric-blue)] text-center mb-4 text-shadow-[2px_2px_0_#000]">
        ★ NAVIGATE ★
      </div>
      
      <nav className="space-y-2" aria-label="Main navigation">
        <Link 
          href="/"
          className="block p-3 m-1 bg-gradient-to-b from-[#4444aa] to-[#222266] border-2 border-outset border-[#6666ff] text-white no-underline text-sm text-center transition-all hover:bg-gradient-to-b hover:from-[#6666cc] hover:to-[#4444aa] hover:border-inset focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--electric-blue)]"
        >
          🏠 HOME
        </Link>
        <Link 
          href="/portfolio"
          className="block p-3 m-1 bg-gradient-to-b from-[#4444aa] to-[#222266] border-2 border-outset border-[#6666ff] text-white no-underline text-sm text-center transition-all hover:bg-gradient-to-b hover:from-[#6666cc] hover:to-[#4444aa] hover:border-inset focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--electric-blue)]"
        >
          📁 PORTFOLIO
        </Link>
        <Link 
          href="/services"
          className="block p-3 m-1 bg-gradient-to-b from-[#4444aa] to-[#222266] border-2 border-outset border-[#6666ff] text-white no-underline text-sm text-center transition-all hover:bg-gradient-to-b hover:from-[#6666cc] hover:to-[#4444aa] hover:border-inset focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--electric-blue)]"
        >
          💼 SERVICES
        </Link>
        <Link 
          href="/guestbook"
          className="block p-3 m-1 bg-gradient-to-b from-[#4444aa] to-[#222266] border-2 border-outset border-[#6666ff] text-white no-underline text-sm text-center transition-all hover:bg-gradient-to-b hover:from-[#6666cc] hover:to-[#4444aa] hover:border-inset focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--electric-blue)]"
        >
          📝 GUESTBOOK
        </Link>
        <Link 
          href="/contact"
          className="block p-3 m-1 bg-gradient-to-b from-[#4444aa] to-[#222266] border-2 border-outset border-[#6666ff] text-white no-underline text-sm text-center transition-all hover:bg-gradient-to-b hover:from-[#6666cc] hover:to-[#4444aa] hover:border-inset focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--electric-blue)]"
        >
          ✉️ CONTACT
        </Link>
      </nav>
      
      <div className="text-center my-5 text-4xl animate-dance" aria-hidden="true">
        🕺
      </div>
      
      <button 
        className="block w-full p-3 my-3 bg-[var(--hot-pink)] border-[3px] border-outset border-[#ff66ff] text-white font-vt323 text-base cursor-pointer animate-pulse-music"
        onClick={() => alert('🎵 MIDI music would play here!\n\nImagine: midi/canyon.mid')}
      >
        🎵 PLAY MUSIC!
      </button>
      
      <button 
        className="block w-full p-3 my-3 bg-[var(--hot-pink)] border-[3px] border-outset border-[#ff66ff] text-white font-vt323 text-base cursor-pointer"
        onClick={() => alert('⭐ Press Ctrl+D to bookmark this page!')}
      >
        ⭐ BOOKMARK US!
      </button>
      
      <div className="text-center mt-5 text-4xl animate-dance" aria-hidden="true">
        💃
      </div>
    </aside>
  );
}
