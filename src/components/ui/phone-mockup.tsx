interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Outer glow */}
      <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[3.2rem] opacity-50" />

      {/* Phone body */}
      <div className="relative w-[280px] h-[580px] rounded-[3rem] bg-gradient-to-b from-zinc-700 to-zinc-800 p-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Inner bezel */}
        <div className="relative w-full h-full rounded-[2.85rem] bg-carbon overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>

          {/* Screen reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent z-[5] pointer-events-none" />

          {/* Screen content */}
          <div className="relative h-full w-full flex items-center justify-center z-[1]">
            {children || (
              <div className="text-center px-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-strike-red/30 to-strike-red/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-strike-red/20">
                  <div className="w-7 h-7 rounded-lg bg-strike-red/60" />
                </div>
                <p className="text-steel text-xs tracking-widest uppercase">
                  Coming Soon
                </p>
              </div>
            )}
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full z-10" />
        </div>
      </div>
    </div>
  );
}
