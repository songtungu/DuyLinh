export default function Gallery() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section">
      <h2>Gallery</h2>

      <div className="gallery">
        <img src={`${base}images/gallery1.JPG`.replace(/\/+/g, '/')} alt="" />
        <img src={`${base}images/gallery2.JPG`.replace(/\/+/g, '/')} alt="" />
        <img src={`${base}images/IMG_1355.JPG`.replace(/\/+/g, '/')} alt="" />
        <img src={`${base}images/IMG_1512.JPG`.replace(/\/+/g, '/')} alt="" />
      </div>
    </section>
  );
}