export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(123,15,26,0.85), rgba(123,15,26,0.85)),
          url(${import.meta.env.BASE_URL}images/cover.jpg)
        `
      }}
    >
      <div className="hero-frame">
        <p className="save-date">Save The Date</p>
        <h1 className="names">Duy & Linh</h1>
        <p className="date">20 • 12 • 2026</p>
      </div>
    </section>
  );
}