import { useRef, useState } from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Event from "./components/Event";
import RSVP from "./components/RSVP";

export default function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const openInvitation = () => {
    setOpened(true);

    // delay 1 tick để audio mount xong
    requestAnimationFrame(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.6;
        audio.play().catch((err) => {
          console.log("Autoplay blocked:", err);
        });
      }
    });
  };

  return (
    <>
      {!opened ? (
        <div className="opening-screen">
          <div className="opening-card">
            <p>Wedding Invitation</p>
            <h1>Duy & Linh</h1>
            <button onClick={openInvitation}>
              Open Invitation
            </button>
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <Story />
          <Event />
          <RSVP />
        </>
      )}

      {/* Audio luôn tồn tại trong DOM */}
      <audio
        ref={audioRef}
        src="/DuyLinh/music/wedding.mp3"
        loop
        preload="auto"
      />
    </>
  );
}