export default function RSVP() {
  return (
    <section className="section light">
      <h2>RSVP</h2>
      <form className="rsvp-form">
        <input type="text" placeholder="Your Name" required />
        <select>
          <option>Will attend</option>
          <option>Sorry, can't come</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}