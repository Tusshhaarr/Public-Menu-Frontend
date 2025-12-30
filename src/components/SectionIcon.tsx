type Props = {
  sectionName: string;
};

/* ========== ICONS ========== */

const HairCutIcon = () => (
  <svg className="section-icon" viewBox="0 0 24 24" fill="none">
    {/* Scissor rings */}
    <circle
      cx="6"
      cy="6"
      r="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="6"
      cy="18"
      r="2"
      stroke="currentColor"
      strokeWidth="2"
    />

    {/* Blades */}
    <path
      d="M8 8L20 20M8 16L20 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);


const ShavingIcon = () => (
  <svg className="section-icon" viewBox="0 0 24 24" fill="none">
    {/* Razor head */}
    <rect
      x="3"
      y="4"
      width="18"
      height="4"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />

    {/* Razor neck */}
    <path
      d="M12 8V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Razor handle */}
    <rect
      x="10"
      y="14"
      width="4"
      height="7"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);


const DetanIcon = () => (
  <svg className="section-icon" viewBox="0 0 24 24" fill="none">
    {/* Sun / face circle */}
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
    />

    {/* Sun rays */}
    <path
      d="M12 2V5M12 19V22M2 12H5M19 12H22
         M5 5L7 7M17 17L19 19M5 19L7 17M17 7L19 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);


const BleachIcon = () => (
  <svg className="section-icon" viewBox="0 0 24 24" fill="none">
    <rect
      x="9"
      y="3"
      width="6"
      height="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="8"
      y="8"
      width="8"
      height="13"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

/* ✅ UPDATED CLEANUP ICON */
const CleanupIcon = () => (
  <svg className="section-icon" viewBox="0 0 24 24" fill="none">
    {/* Face */}
    <circle
      cx="12"
      cy="12"
      r="7"
      stroke="currentColor"
      strokeWidth="2"
    />
    {/* Smile */}
    <path
      d="M9 14c.5 1 1.5 2 3 2s2.5-1 3-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Sparkle */}
    <path
      d="M18 6l1 1m-1 0l1-1m-1 5l1 1m-1 0l1-1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const FacialIcon = () => (
  <svg className="section-icon" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="9"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 22C4 17 20 17 20 22"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const HydraFacialIcon = () => (
  <svg className="section-icon" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3C12 3 6 10 6 14C6 18 9 21 12 21C15 21 18 18 18 14C18 10 12 3 12 3Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

/* ✅ UPDATED HAIR COLOUR ICON */
const HairColourIcon = () => (
  <svg className="section-icon" viewBox="0 0 24 24" fill="none">
    {/* Hair flow */}
    <path
      d="M7 16c0-4 2.5-8 5-8s5 4 5 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Brush */}
    <path
      d="M10 8l-1-4h6l-1 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Base */}
    <path
      d="M5 20h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* ========== MAPPER ========== */

export default function SectionIcon({ sectionName }: Props) {
    console.log("SECTION FROM API →", sectionName); 
  switch (sectionName) {
    case "Hair Cut":
      return <HairCutIcon />;
    case "Shaving":
      return <ShavingIcon />;
    case "Detan":
      return <DetanIcon />;
    case "Bleach":
      return <BleachIcon />;
    case "Clean Up":
      return <CleanupIcon />;
    case "Facial":
      return <FacialIcon />;
    case "Hydra Facial":
      return <HydraFacialIcon />;
    case "Hair colour":
      return <HairColourIcon />;
    default:
      return null;
  }
}
