import { useEffect, useRef } from "react";

export interface HeroProps {
  walkthrough: {
    video: string;
    poster: string;
  };
  street: string;
  city: string;
  state: string;
  zip: string;
}
export default function Hero({ walkthrough, street, city, state, zip }: HeroProps) {
  const vid = useRef<HTMLVideoElement>();

  useEffect(() => {
    setTimeout(() => {
      if (vid.current) {
        vid.current!.play();
      }
    }, 500);
  }, [])

  return (
    <section className="relative flex items-center justify-center h-screen w-screen">
      <video ref={vid} muted playsInline autoPlay loop poster={walkthrough.poster} className="w-full object-cover absolute inset-0 w-full h-screen z-0">
        <source src={walkthrough.video} type="video/mp4" />
      </video>
      <div className="relative flex flex-col items-center font-display text-center text-white z-10 transition-all duration-300 text-shadow">
        <h1 className="font-bold text-4xl tracking-wide uppercase [ md:text-6xl ]">{street}</h1>
        <h2 className="text-2xl tracking-wide uppercase mb-8 [ md:text-4xl ]">{city}, {state} {zip}</h2>
      </div>
    </section>
  );
}
