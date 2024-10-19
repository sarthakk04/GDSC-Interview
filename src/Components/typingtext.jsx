import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./typingtxt.css";

const Typingtxt = () => {
  const [text] = useTypewriter({
    words: ["ESDS", "HOME", "OUR TEAM", "CLOUD STORAGE"],
    loop: Infinity,
    typeSpeed: 150,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="container1 animate__animated animate__fadeInUp">
      <p>
        <p style={{ color: "white" }}>Welcome to </p>{" "}
        <span className="typed-text">{text}</span>
        <Cursor className="cursor" cursorColor="#3B71CA" />
      </p>
    </div>
  );
};

export default Typingtxt;
