import React, { useState, useEffect } from "react";

const phrases = [
  "Find a quiet place: Choose a quiet, distraction-free place where you can sit or lie down comfortably. Make sure you are comfortable and have a relaxed posture. You can sit on a chair, a cushion or directly on the floor. The important thing is to find a position that allows you to be stable and comfortable.",
  "Focus on breathing:Start focusing on your breathing. Breathe normally and observe the movement of your breath as it enters and exits your body. You can count your inhalations and exhalations if this helps you stay focused. The breath is a common anchoring point in meditation and helps you keep your mind present.",
  "Be aware and relax:As you observe your breath, you may notice that your mind begins to wander with thoughts. This is normal. The goal is not to eliminate the thoughts, but to notice them and gently bring your attention back to your breathing. By practicing this awareness, you can develop a calmer, more focused mind over time.",
];

function Phrase() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 2 * 60 * 1000); // Cambia frase ogni 2 minuti (2 * 60 * 1000 millisecondi).

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p className="phrase-text">{phrases[currentPhraseIndex]}</p>
    </div>
  );
}

export default Phrase;