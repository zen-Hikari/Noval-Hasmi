import { useState, useEffect } from "react";
import "./LoadingPage.css";

function LoadingPage() {
  const textLines = [
    "[0.001] Initializing system...",
    "[0.004] Loading kernel modules...",
    "[0.012] Detecting hardware...",
    "[0.024] Mounting root filesystem...",
    "[0.037] Starting system services...",
    "[0.045] Configuring network interfaces...",
    "[0.058] Checking security modules...",
    "[0.069] Starting user session...",
    "[0.075] Loading graphical interface...",
    "[0.089] System ready. Welcome user!"
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
        }, 30); // Kecepatan mengetik lebih cepat
      } else {
        setTimeout(() => {
          setDisplayText((prev) => prev + " [OK]\n"); // Tambahin status [OK]
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 300);
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
