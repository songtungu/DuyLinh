import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const base = import.meta.env.BASE_URL;

  const images = [
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/IMG_1355.JPG",
    "images/IMG_1512.JPG"
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const touchStartX = useRef(0);

  const isOpen = currentIndex !== null;

  /* ================= LIGHTBOX CONTROL ================= */

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  /* Keyboard + Disable Scroll */
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  /* Swipe mobile */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 60) prevImage();
    if (delta < -60) nextImage();
  };

  return (
    <section className="hero">
      <div className="card">

        <h1 className="title">Happy Wedding</h1>

        <div className="couple">
          {/* ====== GIỮ NGUYÊN NỘI DUNG CŨ ====== */}
          <div className="person">
            <img src={base + "images/IMG_1355.JPG"} alt="Groom" />
            <p className="role">Chú Rể</p>
            <h2 className="name">Bùi Duy</h2>
            <div className="family">
              <p>Ông Bà</p>
              <p className="parent">Bùi Văn Lên</p>
              <p className="parent">Nguyễn Thị Phương</p>
              <p className="address">
                Thôn Viên Du Hòa, xã Hội Thịnh<br />
                tỉnh Phú Thọ
              </p>
            </div>
          </div>

          <div className="person">
            <img src={base + "images/IMG_1512.JPG"} alt="Bride" />
            <p className="role">Cô Dâu</p>
            <h2 className="name">Diệu Linh</h2>
            <div className="family">
              <p>Ông Bà</p>
              <p className="parent">Trung</p>
              <p className="parent">Huệ</p>
              <p className="address">
                Thôn , xã Phong Hải<br />
                tỉnh Lào Cai
              </p>
            </div>
          </div>
        </div>

        <div className="ceremony">
          <p className="subtitle">LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI</p>
          <h3 className="location">Tư Gia</h3>
          <p className="time-label">Vào lúc</p>
          <p className="time">09:00</p>
          <div className="date">
            <span>Chủ Nhật</span>
            <span className="day">01</span>
            <span>Tháng 02 - 2026</span>
          </div>
        </div>

        {/* ================= ALBUM ẢNH (NÂNG CẤP) ================= */}
        <h2>Album Ảnh Cưới</h2>

        <div className="gallery">
          {images.map((src, i) => (
            <div
              className="gallery-item"
              key={i}
              onClick={() => openLightbox(i)}
            >
              <img src={base + src} alt="" loading="lazy" />
              <div className="overlay"></div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= LIGHTBOX ================= */}
      {isOpen && (
        <div className="lightbox active" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            ×
          </span>

          <span
            className="lightbox-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </span>

          <div
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img src={base + images[currentIndex]} alt="" />
          </div>

          <span
            className="lightbox-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </span>
        </div>
      )}
    </section>
  );
}