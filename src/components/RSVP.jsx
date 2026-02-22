export default function RSVP() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">RSVP</h2>

        <form className="rsvp-form">
          <input type="text" placeholder="Tên của bạn" />
          <select>
            <option>Tham dự</option>
            <option>Không tham dự</option>
          </select>
          <button>Xác nhận</button>
        </form>

      </div>
    </section>
  )
}