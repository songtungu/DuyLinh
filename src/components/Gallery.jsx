export default function Gallery() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section">
      <div className="section-content">
        <h2>Gallery</h2>

        <div className="gallery">
          <img src={base + "images/gallery1.jpg"} alt="" />
          <img src={base + "images/gallery2.jpg"} alt="" />
          <img src={base + "images/IMG_1355.JPG"} alt="" />
          <img src={base + "images/IMG_1512.JPG"} alt="" />
        </div>
      </div>
    </section>
  );
}