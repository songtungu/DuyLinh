export default function Hero() {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="hero">
      <div className="card">

        <h1 className="title">Happy Wedding</h1>

        <div className="couple">

          {/* Groom */}
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

          {/* Bride */}
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
      <h2>Album Ảnh Cưới</h2>

        <div className="gallery">
          {[ 
            "images/gallery1.jpg",
            "images/gallery2.jpg",
            "images/IMG_1355.JPG",
            "images/IMG_1512.JPG"
          ].map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={base + src} alt="" />
              <div className="overlay"></div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}