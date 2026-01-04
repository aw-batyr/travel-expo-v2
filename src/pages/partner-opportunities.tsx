import { PageContainer } from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useTranslation } from "react-i18next";

const partnerOpportunitiesContent = {
  title: {
    ruText: "Партнерские возможности",
    enText: "Partner opportunities",
  },
  intro: {
    ruText:
      "Предлагаем Вам воспользоваться комплексными возможностями - партнерскими пакетами, разработанными под различные маркетинговые задачи компании-участника, которые позволят максимально использовать коммерческий потенциал выставки для усиления бренда Вашей компании и бесспорно повысят эффективность продвижения Вашей компании.",
    enText:
      "We invite you to take advantage of integrated opportunities - partnership packages designed for various marketing objectives of the exhibiting company. They allow you to maximize the exhibition's commercial potential, strengthen your brand, and significantly increase the effectiveness of your promotion.",
  },
  partnership: {
    ruText:
      "Партнерство выставки - это всегда больше, чем просто участие. Это прекрасная возможность выгодно подать Вашу продукцию широкой публике в соответствии с Вашими основными целями и задачами. В каждом партнерском пакете предоставлены уникальные позиции, специально сформированные таким образом, что Вы наиболее точно и эффективно передаете обращение к целевой аудитории.",
    enText:
      "Exhibition partnership is always more than just participation. It is a great opportunity to present your products to a wide audience in line with your goals and objectives. Each partnership package includes unique placements structured so you can communicate your message to the target audience as precisely and effectively as possible.",
  },
  benefitsTitle: {
    ruText: "Партнерство выставки Turkmen Textile позволит:",
    enText: "Partnership with Turkmen Textile will allow you:",
  },
  benefits: [
    {
      ruText: "Укрепить позиции Вашей компании на рынке.",
      enText: "Strengthen your company's position in the market.",
    },
    {
      ruText: "Обеспечить существенное преимущество в конкурентной среде.",
      enText: "Gain a significant advantage in the competitive environment.",
    },
    {
      ruText: "Закрепить имидж успешного бренда Вашей компании.",
      enText: "Reinforce the image of your company as a successful brand.",
    },
    {
      ruText:
        "Сделать Вашу торговую марку узнаваемой для широкого круга участников и посетителей выставки.",
      enText:
        "Make your trademark recognizable to a wide range of exhibition participants and visitors.",
    },
    {
      ruText: "Выделить Вашу компанию среди других участников.",
      enText: "Stand out among other exhibitors.",
    },
  ],
  highlight: {
    ruText:
      "Вы хотите, чтобы в профессиональной среде именно Вашу компанию считали ключевым игроком на рынке? Тогда заявите о себе громче всех!",
    enText:
      "Do you want your company to be seen as a key player in the professional community? Then make yourself heard louder than anyone else!",
  },
  packagesTitle: {
    ruText: "Варианты партнерских пакетов:",
    enText: "Partnership package options:",
  },
  packages: [
    {
      ruText: "Генеральный партнер выставки",
      enText: "General partner of the exhibition.",
    },
    {
      ruText: "Партнер Ленты Ведущих Посетителей",
      enText: "Lead visitor lanyard partner.",
    },
    {
      ruText: "Партнер деловой программы",
      enText: "Business program partner.",
    },
    {
      ruText: "Партнер вечернего приема",
      enText: "Evening reception partner.",
    },
    {
      ruText: "Партнер пакетов посетителей",
      enText: "Visitor package partner.",
    },
    {
      ruText: "Партнер каталога выставки",
      enText: "Exhibition catalog partner.",
    },
    {
      ruText: "Партнер VIP делегации",
      enText: "VIP delegation partner.",
    },
    {
      ruText: "Партнер выставки",
      enText: "Exhibition partner.",
    },
  ],
  optionsNote: {
    ruText:
      "Данные опции являются базовыми, но мы всегда готовы обсудить вопрос о специальных проектах в рамках партнерства выставки, которые будут соответствовать Вашему бюджету, потребностям и целям.",
    enText:
      "These options are basic, but we are always ready to discuss special projects within the exhibition partnership that match your budget, needs, and goals.",
  },
  contactNote: {
    text: {
      ruText:
        "По вопросам цен и дополнительных опций партнерских пакетов выставки KIFT, пожалуйста, обращайтесь к ",
      enText:
        "For pricing and additional options of KIFT exhibition partnership packages, please contact the ",
    },
    linkText: {
      ruText: "ОРГАНИЗАТОРАМ",
      enText: "ORGANIZERS",
    },
  },
};

export default function PartnerOpportunities() {
  useScrollTop();
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "en").toLowerCase();
  const getText = (item: { ruText: string; enText: string }) =>
    lang === "ru" ? item.ruText : item.enText;

  return (
    <PageContainer className="page-padding text-sm!">
      <div className="mx-auto max-w-[900px]">
        <h2 className="mb-3 text-2xl font-medium">
          {getText(partnerOpportunitiesContent.title)}
        </h2>

        <div className="mb-4 rounded-sm bg-surface_container px-4 py-3 text-sm leading-relaxed text-on_surface_v">
          {getText(partnerOpportunitiesContent.intro)}
        </div>

        <p className="mb-4 text-sm leading-relaxed text-on_surface_v">
          {getText(partnerOpportunitiesContent.partnership)}
        </p>

        <h3 className="mb-2 text-base font-medium">
          {getText(partnerOpportunitiesContent.benefitsTitle)}
        </h3>
        <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-on_surface_v">
          {partnerOpportunitiesContent.benefits.map((item) => (
            <li key={item.enText}>{getText(item)}</li>
          ))}
        </ul>

        <div className="mb-6 rounded-sm border border-outline px-4 py-3 text-center text-[10px] uppercase text-on_surface_v">
          {getText(partnerOpportunitiesContent.highlight)}
        </div>

        <h3 className="mb-2 text-base font-medium">
          {getText(partnerOpportunitiesContent.packagesTitle)}
        </h3>
        <ul className="mb-4 border-t border-outline_v">
          {partnerOpportunitiesContent.packages.map((item) => (
            <li
              key={item.enText}
              className="flex items-center gap-2 border-b border-outline_v py-2 text-sm text-on_surface_v"
            >
              <span className="text-xs text-primary">&#10003;</span>
              <span>{getText(item)}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed text-on_surface_v">
          {getText(partnerOpportunitiesContent.optionsNote)}
        </p>
        <p className="text-sm leading-relaxed text-on_surface_v">
          {getText(partnerOpportunitiesContent.contactNote.text)}
          <span className="text-primary underline">
            {getText(partnerOpportunitiesContent.contactNote.linkText)}
          </span>
        </p>
      </div>
    </PageContainer>
  );
}
