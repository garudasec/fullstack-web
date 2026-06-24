import { useRef } from "react";

export default function Video() {
  const ref = useRef(null);
  console.log(ref);

  const handlePlay = () => {
    return ref.current.play();
  };

  const handlePause = () => {
    return ref.current.pause();
  };

  return (
    <div>
      <h1>welcome to video player</h1>
      <video
        ref={ref}
        controls
        src="https://a2f13054-7a21-438f-8714-8600f90eecb8.mdnplay.dev/shared-assets/videos/flower.webm"
      ></video>

      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
