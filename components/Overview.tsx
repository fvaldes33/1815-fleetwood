
export interface OverviewProps {
  anchor: string;
  heading: string;
  subheading?: string;
  children: React.ReactNode;
}
export default function Overview({ anchor, heading, subheading, children }: OverviewProps) {

  return (
    <section id={anchor} className="max-w-screen-lg mx-auto px-4 [ md:px-0 ]">
      <div className="py-12 [ md:py-24 ]">
        <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-gray-900">{heading}</h2>
        {subheading && <h4 className="font-display text-2xl uppercase tracking-wide text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: subheading }}></h4>}

        <div className="text-base text-gray-900 leading-loose [ md:text-xl ]">
          {children}
        </div>
      </div>
    </section>
  );
}
