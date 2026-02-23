import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import Story from "./components/Story"
import Event from "./components/Event"
import Gallery from "./components/Gallery"
import RSVP from "./components/RSVP"
import MusicPlayer from "./components/MusicPlayer"

export default function App() {

  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.2 }
    )

    sections.forEach(section => observer.observe(section))
  }, [])

  if (!opened) {
    return (
      <div className="opening-screen">
        <div className="opening-card">
          <p>Wedding Invitation</p>
          <h1>Duy & Linh</h1>
          <button onClick={() => setOpened(true)}>Open Invitation</button>
        </div>
      </div>
    )
  }

  return (
    <>
      <MusicPlayer />
      <Hero />
      <Story />
      <Event />
      <Gallery />
      <RSVP />
    </>
  )
}