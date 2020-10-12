import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import HeadData from '../components/HeadData';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Video from '../components/Video';
import data from '../data';

export default function Home() {
  return (
    <>
      <HeadData />

      <Header />

      <main className="bg-white">
        <Hero
          walkthrough={data.walkthrough}
          {...data.address}
        />

        <Overview
          anchor="overview"
          heading="Overview"
          subheading={`Offered at <strong>${data.stats.price}</strong> | ${data.stats.beds} Beds | ${data.stats.baths} Baths | ${data.stats.sqft} Sqft | ${data.stats.lot} Sf Lot`}
        >
          <p>{data.overview}</p>

          <a href={data.redfin} target="_blank" className="inline-block pr-8 mt-8">
            Redfin <span className="inline-block transform -rotate-45">&rarr;</span>
          </a>
          <a href={data.zillow} target="_blank" className="inline-block pr-8 mt-8">
            Zillow <span className="inline-block transform -rotate-45">&rarr;</span>
          </a>
          <a href={data.realtor} target="_blank" className="inline-block mt-8">
            Realtor <span className="inline-block transform -rotate-45">&rarr;</span>
          </a>

          {data.openHouse.show &&
            <div className="shadow-2xl bg-gray-900 text-white rounded flex flex-col [ md:flex-row md:items-center md:justify-between ] my-8 p-4">
              <p className="font-display font-bold text-xl uppercase tracking-wide">Open House</p>
              <div className="[ md:text-right ]">
                <p className="text-sm uppercase tracking-wide">{data.openHouse.day}</p>
                <p className="text-sm uppercase tracking-wide">{data.openHouse.time}</p>
              </div>
            </div>
          }
        </Overview>

        <Gallery anchor="photos" />

        <Overview
          anchor="features"
          heading="Features"
        >
          <ul className="flex flex-wrap">
            {data.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center py-2">
                {feature}
                {index < (data.features.length - 1) && <span className="bg-gray-900 w-1 h-1 rounded mx-4"></span>}
              </li>
            ))}
          </ul>
        </Overview>

        <Video
          anchor="video"
          videoUrl={data.videoUrl}
        />

        <Contact
          anchor="contact"
          agent={data.agent}
        />
      </main>
    </>
  )
}
