import { PageContainer, ThemeCard } from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";

const participantsData = [
  {
    title: "Tour operators and travel agencies",
  },
  {
    title: "Airlines and aviation agencies",
  },
  {
    title: "National and regional tourism organizations",
  },
  {
    title: "Accommodation facilities",
  },
  {
    title: "Medical, wellness, and healthcare centers",
  },
  {
    title: "Developers and providers of IT technologies for tourism",
  },
  {
    title: "Overseas real estate",
  },
  {
    title: "Supporting services for the tourism industry",
  },
];

const venueText = [
  "The Exhibition Centre of the Chamber of Commerce and Industry of Turkmenistan is a modern venue designed for international exhibitions, conferences, forums, and business meetings.",
  "The centre is equipped with cutting-edge technical solutions, including multimedia equipment, sound and lighting systems, conference rooms with simultaneous translation, and comfortable areas for negotiations. Spacious exhibition pavilions provide ideal conditions for showcasing products and services.",
];

export default function About() {
  useScrollTop();

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
