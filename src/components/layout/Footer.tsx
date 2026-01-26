'use client';

import { Badge } from '@/components/ui/Badge';
import { VisitorCounter } from '@/components/ui/VisitorCounter';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <VisitorCounter />
      
      {/* Webring */}
      <div className="flex justify-center items-center gap-5 py-4 bg-gradient-to-r from-[#330066] via-[#000066] to-[#330066] border-y-2 border-[#6666ff]">
        <a href="#" className="text-[var(--electric-blue)] no-underline py-2 px-4 border-2 border-outset border-[#6666ff] bg-[rgba(0,0,100,0.5)] hover:bg-[rgba(0,0,150,0.5)]">
          ← PREV
        </a>
        <span className="text-4xl animate-webring-spin" aria-hidden="true">🔗</span>
        <span className="text-white font-pixel text-[0.5rem]">COOL SITES WEBRING</span>
        <span className="text-4xl animate-webring-spin" aria-hidden="true">🔗</span>
        <a href="#" className="text-[var(--electric-blue)] no-underline py-2 px-4 border-2 border-outset border-[#6666ff] bg-[rgba(0,0,100,0.5)] hover:bg-[rgba(0,0,150,0.5)]">
          RANDOM
        </a>
        <a href="#" className="text-[var(--electric-blue)] no-underline py-2 px-4 border-2 border-outset border-[#6666ff] bg-[rgba(0,0,100,0.5)] hover:bg-[rgba(0,0,150,0.5)]">
          NEXT →
        </a>
      </div>

      {/* Footer Badges */}
      <div className="flex flex-wrap justify-center gap-4 py-8 bg-black">
        <Badge variant="notepad">MADE WITH<br />NOTEPAD 📝</Badge>
        <Badge variant="netscape">BEST VIEWED<br />ANY BROWSER</Badge>
        <Badge variant="bobby">BOBBY<br />APPROVED ♿</Badge>
        <Badge variant="html">HTML 5.0<br />CERTIFIED</Badge>
        <Badge variant="cool">CERTIFIED<br />COOL SITE ⭐</Badge>
        <Badge variant="y2k">Y2K<br />COMPLIANT</Badge>
      </div>

      {/* Last Updated */}
      <div className="text-center py-3 bg-black text-[#666] text-sm">
        📅 This page last updated: <b>January 26, 2026</b> | 
        <a href="#" className="text-[var(--electric-blue)] ml-1">Site Map</a> | 
        <a href="/contact" className="text-[var(--electric-blue)] ml-1">Contact Us</a>
      </div>

      {/* Copyright */}
      <div className="text-center py-5 bg-black text-[#888] text-base border-t border-[#333]">
        © {currentYear} QuirkyBytes Digital Studio | All Rights Reserved<br />
        <span className="text-sm">Built with 🔥 and mass amounts of coffee</span>
      </div>
    </footer>
  );
}
