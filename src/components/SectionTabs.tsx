import type { Section } from "../types/menu";

interface Props {
  sections: Section[];
  onTabClick: (id: number) => void;
  activeTab: number | null;
}

export default function SectionTabs({
  sections,
  onTabClick,
  activeTab,
}: Props) {
  return (
    <div className="tabs sticky">
      {sections.map(section => (
        <div
          key={section.id}
          className={`tab ${activeTab === section.id ? "active" : ""}`}
          onClick={() => onTabClick(section.id)}
        >
          {section.name}
        </div>
      ))}
    </div>
  );
}
