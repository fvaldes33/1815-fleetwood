export default function Video({ anchor, videoUrl }) {
  return (
    <section id={anchor} className="max-w-screen-lg mx-auto">
      <div className="relative overflow-hidden pb-2/3">
        <iframe
          title="Video walkthrough of property"
          className="absolute inset-0 h-full w-full object-cover"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    </section>
  );
}
