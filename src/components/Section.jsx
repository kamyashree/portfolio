const Section = ({ children }) => {
  return (
    <section className="cinematic-section">
      <div className="section-overlay">
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;