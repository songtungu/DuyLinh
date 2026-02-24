export default function RSVP() {
  return (
    <section className="section">
      <div className="section-content">
        <h2>RSVP</h2>

        <form
          className="rsvp-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for your response!");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <select>
            <option>Will attend</option>
            <option>Sorry, can't come</option>
          </select>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}