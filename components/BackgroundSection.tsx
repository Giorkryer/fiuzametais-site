// components/BackgroundSection.tsx
'use client';

export default function BackgroundSection() {
  return (
    <section className="relative w-full">
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/mainbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10">
      </div>
    </section>
  );
}