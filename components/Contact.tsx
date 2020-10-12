export interface Agent {
  name: string;
  agency: string;
  email: string;
  phone: {
    display: string;
    link: string;
  },
  avatar: string;
}

export interface ContactProps {
  agent: Agent
  anchor: string;
}

export default function Contact({ anchor, agent }: ContactProps) {

  return (
    <section id={anchor} className="bg-gray-200 mt-12 [ md:mt-24 ]">
      <div className="container mx-auto flex flex-col py-12 px-4 [ md:px-0 md:py-24 ]">
        <div className="flex flex-col [ md:flex-row md:items-center ]">
          <img className="rounded w-56 h-56 mb-8 [ md:mb-0 md:mr-8 ]" src={agent.avatar} alt={`${agent.name} avatar`} />

          <div>
            <p className="font-display font-bold text-2xl uppercase tracking-wide mb-2">{agent.name}</p>
            <p className="uppercase tracking-wide">{agent.agency}</p>
            <a className="block tracking-wide" href={`tel:${agent.phone.link}`}>{agent.phone.display}</a>
            <a className="block tracking-wide" href={`mailto:${agent.email}`}>{agent.email}</a>
          </div>

          <div className="mt-12 [ md:mt-0 md:ml-auto ]">
            <a href={`tel:${agent.phone.link}`} className="inline-block font-display border rounded border-gray-900 py-3 px-6 font-bold uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300">Contact Nick</a>
          </div>
        </div>
      </div>
    </section>
  );
}
