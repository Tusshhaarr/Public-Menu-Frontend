import { useEffect, useRef, useState } from "react";
import TopBar from "../components/TopBar";
import SectionTabs from "../components/SectionTabs";
import BottomNav from "../components/BottomNav";
import type { Section, MenuResponse } from "../types/menu";
import SectionIcon from "../components/SectionIcon";

export default function Menu() {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    fetch("https://public-menu-backend-1.onrender.com/api/menu/")
      .then(res => res.json())
      .then((data: MenuResponse) => {
        setSections(data.sections);
        if (data.sections.length > 0) {
          setActiveTab(data.sections[0].id);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch menu:", err);
        setLoading(false);
      });
  }, []);

  const scrollToSection = (id: number) => {
    setActiveTab(id);
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-section-id"));
            if (!isNaN(id)) {
              setActiveTab(id);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (loading) {
    return (
      <div className="menu">
        <TopBar />
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="menu">
      <TopBar />

      <SectionTabs
        sections={sections}
        onTabClick={scrollToSection}
        activeTab={activeTab}
      />

      <div className="menu-content">
        {sections.map(section => (
          <div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            data-section-id={section.id}
            className="menu-section"
          >
            {/* <h2 className="section-title">
              <span className="title-decorator"></span>
              {section.name}
            </h2> */}
            <h2 className="section-title">
              <span className="title-decorator"></span>

  <SectionIcon sectionName={section.name} />
  {section.name}
</h2>


            {section.services.map(service => (
              <div key={service.id} className="service">
                <div className="service-info">
                  <span className="service-name">{service.name}</span>
                </div>
                <span className="service-price">₹{service.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
