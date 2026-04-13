import { Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import ResponsiveHeroVideo from "@/components/ResponsiveHeroVideo";

const corporateCityLinks = [
  { label: "Verona", to: "/produzione-video-corporate-verona" },
  { label: "Vicenza", to: "/produzione-video-corporate-vicenza" },
  { label: "Asiago", to: "/produzione-video-corporate-asiago" },
  { label: "Padova", to: "/produzione-video-corporate-padova" },
  { label: "Treviso", to: "/produzione-video-corporate-treviso" },
  { label: "Venezia", to: "/produzione-video-corporate-venezia" },
  { label: "Belluno", to: "/produzione-video-corporate-belluno" },
  { label: "Rovigo", to: "/produzione-video-corporate-rovigo" },
  { label: "Trento", to: "/produzione-video-corporate-trento" },
  { label: "Bolzano", to: "/produzione-video-corporate-bolzano" },
];

type CorporateLandingProps = {
  city: string;
  seoTitle?: string;
  heroLine1: string;
  heroLine2: string;
  introLead: string;
  introBody: string;
  seoDescription?: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  services: string[];
  relatedCitiesLine: string;
};

const CorporateLanding = ({
  city,
  seoTitle,
  heroLine1,
  heroLine2,
  introLead,
  introBody,
  seoDescription,
  sections,
  services,
  relatedCitiesLine,
}: CorporateLandingProps) => {
  const canonicalPath = `/produzione-video-corporate-${city.toLowerCase()}`;
  const resolvedSeoTitle = seoTitle || `Produzione Video Corporate a ${city} | Artevent Production`;
  const resolvedSeoDescription =
    seoDescription ||
    `Produzione video corporate, fotografia aziendale e riprese drone a ${city}. Artevent Production realizza contenuti professionali per aziende, brand e strutture.`;
  const relatedCities = corporateCityLinks.filter(
    (item) => item.label.toLowerCase() !== city.toLowerCase(),
  );

  return (
    <div>
      <SeoHead
        title={resolvedSeoTitle}
        description={resolvedSeoDescription}
        canonicalPath={canonicalPath}
      />

      <section className="relative overflow-hidden bg-gradient-dark pb-0 pt-0 min-h-[1400px] md:min-h-[1120px] lg:min-h-[1180px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <ResponsiveHeroVideo
              desktopSrc="/videos/Homepage_16:9_finale_comp.mp4"
              mobileSrc="/videos/Homepage_9:16_finale_comp.mp4"
              delayMs={0}
              showPoster={false}
            />
          </div>
        </div>

        <div className="cinema-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.5)_0%,rgba(3,3,3,0.36)_28%,rgba(3,3,3,0.62)_68%,rgba(3,3,3,0.82)_100%)]" />
        <div className="absolute inset-0 z-10 bg-black/22 backdrop-blur-[3px]" />

        <div className="relative z-20 mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 text-white md:min-h-[1120px] md:pl-8 md:pr-4 md:py-16 lg:min-h-[1180px] lg:gap-12 lg:pl-10 lg:pr-5 lg:py-20 xl:pl-12 xl:pr-4">
          <div className="w-full max-w-none">
            <p className="mb-6 font-body text-sm uppercase tracking-[0.5em] gold-text-soft md:text-base">
              Corporate video production
            </p>

            <h1 className="max-w-none text-4xl font-light leading-tight md:max-w-[97%] md:text-6xl lg:max-w-[98%] lg:text-7xl">
              {heroLine1}
              <br />
              {heroLine2}
            </h1>

            <div className="mt-12 mb-2 flex justify-center md:mt-14 md:mb-3">
              <Link
                to="/#contact"
                className="inline-block border border-primary/40 px-8 py-4 transition hover:bg-primary hover:text-black"
              >
                Visita il sito
              </Link>
            </div>
          </div>

          <div className="w-full">
            <p className="mb-5 text-xl text-white/90 md:text-2xl">
              {introLead}
            </p>

            <p className="mb-10 w-full max-w-none text-base leading-8 text-white/80 md:max-w-[94%] md:text-lg">
              {introBody}
            </p>

            <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-2">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="mb-3 text-3xl font-light text-white">
                    {section.title}
                  </h2>

                  <p className="text-base leading-8 text-white/80 md:text-lg">
                    {section.body}
                  </p>
                </div>
              ))}

              <div>
                <h2 className="mb-3 text-3xl font-light text-white">
                  Servizi
                </h2>

                <ul className="space-y-2 text-base leading-8 text-white/80 md:text-lg">
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-10 w-full max-w-none text-base leading-8 text-white/80 md:max-w-[96%] md:text-lg">
              {relatedCitiesLine}{" "}
              {relatedCities.map((item, index) => {
                const isLast = index === relatedCities.length - 1;
                const isPenultimate = index === relatedCities.length - 2;

                return (
                  <span key={item.to}>
                    <Link to={item.to} className="underline text-white/80 transition-colors duration-300 hover:text-primary">
                      {item.label}
                    </Link>
                    {!isLast ? (isPenultimate ? " e " : ", ") : "."}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateLanding;