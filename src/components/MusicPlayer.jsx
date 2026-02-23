import { useEffect, useRef, useState } from "react"

export default function MusicPlayer() {

  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (playing) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [playing])

  return (
    <div className="music-player" onClick={() => setPlaying(!playing)}>
      {playing ? "🔊" : "🔈"}
      <audio ref={audioRef} loop src="/music.mp3" />
    </div>
  )
}