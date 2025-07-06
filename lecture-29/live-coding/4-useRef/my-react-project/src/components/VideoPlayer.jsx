/*
    VideoPlayer
    - render a video player
    - functionality: play or pause the video
*/

import "./Demos.css";
import { useRef } from "react";

// useRef: allow us to access an element on the DOM directly
function VideoPlayer() {

    const videoRef = useRef(null);
    console.log(videoRef);

    const handlePlay = () => {
        console.log("Play button clicked.");
        if(videoRef.current !== null) {
            videoRef.current.play();
        }
    }
    
    const handlePause = () => {
        console.log("Pause button clicked.");
        if(videoRef.current !== null) {
            videoRef.current.pause();
        }
    }

    return (
        <div className="use-ref-demo">
            <h2>Interactive Video Player</h2>
            <video
                ref={videoRef}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                width="400">
                    Sorry, your browser doesn't support HTML5 video.
            </video>
            <div className="controls">
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    )
}

export default VideoPlayer;