'use client';

export function CRTEffect() {
  return (
    <>
      {/* CRT Scanlines */}
      <div 
        className="fixed inset-0 pointer-events-none z-[10000]"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px,
            transparent 2px
          )`
        }}
        aria-hidden="true"
      />
      
      {/* CRT Screen Curvature */}
      <div 
        className="fixed inset-0 pointer-events-none z-[10001]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(0,0,0,0.4) 100%)'
        }}
        aria-hidden="true"
      />
    </>
  );
}
