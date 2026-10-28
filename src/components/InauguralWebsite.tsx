export function InauguralWebsite({ onReplay }: { onReplay?: () => void } = {}) {
  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#0a0e17]">
      {/* 100% Pure Full-Screen Official Website - Zero overlay buttons */}
      <iframe
        src="https://ncastem.vercel.app/"
        title="NCASTEM 2026 Official Website"
        className="h-full w-full border-0 bg-slate-950"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        loading="eager"
      />
    </div>
  );
}
