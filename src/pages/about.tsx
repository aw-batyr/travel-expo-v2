import { PageContainer, ThemeCard } from "@/components/shared";

const participantsData = [
  {
    title: "Tour operators and travel agencies",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <path
          d="M32 12L8 28v24h48V28L32 12z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="32" cy="36" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M32 28v16M24 36h16" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Airlines and aviation agencies",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M32 12v40M12 32h40M18 18l28 28M46 18L18 46"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "National and regional tourism organizations",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <rect
          x="12"
          y="24"
          width="40"
          height="28"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M20 24V16a12 12 0 0124 0v8"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="28"
          y="32"
          width="8"
          height="12"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Accommodation facilities",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <path
          d="M32 8l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2 6-12z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Medical, wellness, and healthcare centers",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <rect
          x="8"
          y="20"
          width="48"
          height="32"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M8 28h48" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="44" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M24 12h16v8H24z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Developers and providers of IT technologies for tourism",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <rect
          x="12"
          y="12"
          width="40"
          height="40"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 24h40M24 24v28M40 24v28"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="32" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Overseas real estate",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="44" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="48" cy="44" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M32 28v8M24 44h-2M40 44h2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M26 36l-6 8M38 36l6 8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Supporting services for the tourism industry",
  },
];

const venueText = [
  "The Exhibition Centre of the Chamber of Commerce and Industry of Turkmenistan is a modern venue designed for international exhibitions, conferences, forums, and business meetings.",
  "The centre is equipped with cutting-edge technical solutions, including multimedia equipment, sound and lighting systems, conference rooms with simultaneous translation, and comfortable areas for negotiations. Spacious exhibition pavilions provide ideal conditions for showcasing products and services.",
];

export default function About() {
  return (
    <div className="bg-background">
      {/* Exhibition Section */}
      <section className="pb-12 md:pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Exhibition "TurkmenTravel Expo 2025"
          </h2>

          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Turkmen Travel Expo is a key international B2B platform for
              tourism industry professionals, focused on developing business
              connections and international cooperation in Turkmenistan and
              across the Silk Road region.
            </p>
            <p>
              Held in Ashgabat, the exhibition brings together tour operators,
              travel agencies, hotel chains, airlines, investors, national
              tourism organizations, and government institutions for direct
              negotiations, partner search, and contract signing.
            </p>
            <p>
              In addition to the exhibition showcase, the event features a
              business program, B2B meetings, and professional sessions aimed at
              delivering practical outcomes and building long-term partnerships.
            </p>
            <p>
              Turkmen Travel Expo is your gateway to the Turkmenistan market and
              a reliable platform for growing your tourism business.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibition Participants Section */}
      <section className="py-12 md:py-16 px-4 bg-[#FFFBF4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Exhibition Participants
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {participantsData.map((participant, index) => (
              <ThemeCard
                {...participant}
                image={`/about-themes/${index + 1}.svg`}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="gap-6 relative overflow-hidden">
        <PageContainer className="md:py-20 py-10 flex lg:flex-row flex-col lg:gap-12 gap-0 items-center">
          <div className="md:flex-[0_0_520px]">
            <h3 className="text-2xl font-medium mb-6">Venue</h3>
            <div className="text-sm text-muted-foreground flex flex-col gap-6 mb-10">
              {venueText.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="h-full flex-1">
            <img
              src="/about-place.jpg"
              alt=""
              className="size-full object-contain"
            />
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
