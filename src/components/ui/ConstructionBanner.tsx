'use client';

export function ConstructionBanner() {
  return (
    <div 
      className="flex items-center justify-center gap-5 p-3"
      style={{
        background: `repeating-linear-gradient(
          45deg,
          #ffcc00,
          #ffcc00 10px,
          #000 10px,
          #000 20px
        )`
      }}
      role="banner"
    >
      <span className="text-2xl animate-bounce-custom" aria-hidden="true">🚧</span>
      <span className="bg-[var(--hot-red)] text-white py-1 px-4 font-pixel text-[0.6rem] animate-blink">
        SITE UNDER CONSTRUCTION
      </span>
      <span className="text-2xl animate-bounce-custom" aria-hidden="true">👷</span>
      <span className="bg-[var(--hot-red)] text-white py-1 px-4 font-pixel text-[0.6rem] animate-blink">
        PARDON OUR DUST
      </span>
      <span className="text-2xl animate-bounce-custom" aria-hidden="true">🚧</span>
    </div>
  );
}
