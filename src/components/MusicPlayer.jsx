export default function MusicPlayer({ audioRef }) {
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <div className="music-player" onClick={toggleMusic}>
      🎵
    </div>
  );
}