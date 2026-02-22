import Hero from "./components/Hero"
import Story from "./components/Story"
import Event from "./components/Event"
import Gallery from "./components/Gallery"
import RSVP from "./components/RSVP"
import "./styles/main.css"

export default function App() {
  return (
    <>
      <Hero />
      <Story />
      <Event />
      <Gallery />
      <RSVP />
    </>
  )
}