import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-card">
        <div className="logo-container">
          <div className="logo-shine"></div>
          <h1 className="salon-name">Daily Unique Barber Studio</h1>
          <p className="salon-tagline">Where Beauty Meets Excellence</p>
        </div>
        <button className="view-menu-btn" onClick={() => navigate("/menu")}>
          <span>View Our Services</span>
          <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
      <div className="floating-elements">
        <div className="float-element"></div>
        <div className="float-element"></div>
        <div className="float-element"></div>
      </div>
    </div>
  );
}