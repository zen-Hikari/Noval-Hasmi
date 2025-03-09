import { useState, useEffect } from "react";
import "./LoadingPage.css";

function LoadingPage() {
  const textLines = [
    "Booting up system...",
    "Checking hardware...",
    "Loading assets...",
    "Connecting to server...",
    "Initializing user session...",
    "System ready.",
    "Welcome to my Portfolio Website :)"
  ];

  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < textLines.length) {
      if (charIndex < textLines[lineIndex].length) {
        setTimeout(() => {
          setDisplayText((prev) => prev + textLines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 45); // Kecepatan mengetik
      } else {
        setTimeout(() => {
          setDisplayText((prev) => prev + "\n");
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 500); // Delay sebelum masuk ke baris berikutnya
      }
    }
  }, [charIndex, lineIndex, textLines]);

  return (
    <div className="terminal-fullscreen">
      <div className="terminal-header">
        <div className="buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <span className="title">Terminal</span>
      </div>

      <div className="terminal-body">
        <pre>{displayText}<span className="blink">█</span></pre>
      </div>
    </div>
  );
}

export default LoadingPage;
