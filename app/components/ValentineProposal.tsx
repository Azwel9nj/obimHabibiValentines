import { useState } from "react";
import CelebrationPage from "./CelebrationPage";

export default function ValentineProposal() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonText, setNoButtonText] = useState("No");
  const [noButtonClicks, setNoButtonClicks] = useState(0);

  const noButtonMessages = [
    "No",
    "Are you sure? 🥺",
    "Really? 💔",
    "Think again! 🤔",
    "Please? 🙏",
    "One more chance? 💝",
  ];

  const handleYes = () => {
    setAnswer("yes");
  };

  const handleNoHover = () => {
    // Generate random position
    const maxX = window.innerWidth - 200; // button width
    const maxY = window.innerHeight - 80; // button height
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleNoClick = () => {
    const newClicks = noButtonClicks + 1;
    setNoButtonClicks(newClicks);
    
    if (newClicks < noButtonMessages.length) {
      setNoButtonText(noButtonMessages[newClicks]);
    }
    
    handleNoHover();
  };

  if (answer === "yes") {
    return <CelebrationPage />;
  }

  return (
    <div className="romantic-gradient min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="floating-heart">💕</div>
      <div className="floating-heart">💖</div>
      <div className="floating-heart">💗</div>
      <div className="floating-heart">💝</div>
      <div className="floating-heart">💘</div>
      <div className="floating-heart">❤️</div>

      {/* Main Proposal Card */}
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center fade-in-up relative z-10">
        {/* Emoji Header */}
        <div className="text-6xl md:text-8xl mb-6 pulse-heart">
          💝
        </div>

        {/* Main Question */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Will you be my
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
          Valentine? 💕
        </h1>

        {/* Sweet Message */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
          You light up my world like nobody else ✨
          <br />
          Let's make this Valentine's Day special together! 🌹
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative">
          {/* Yes Button */}
          <button
            onClick={handleYes}
            className="yes-button text-white font-bold text-2xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Yes! 💖
          </button>

          {/* No Button (runs away!) */}
          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            onClick={handleNoClick}
            className="no-button text-white font-bold text-2xl px-12 py-6 rounded-full transition-all duration-200"
            style={{
              position: noButtonClicks > 0 ? 'fixed' : 'relative',
              left: noButtonClicks > 0 ? `${noButtonPosition.x}px` : 'auto',
              top: noButtonClicks > 0 ? `${noButtonPosition.y}px` : 'auto',
            }}
          >
            {noButtonText}
          </button>
        </div>

        {/* Hint Text */}
        {noButtonClicks > 2 && (
          <p className="text-white/80 mt-8 text-lg fade-in-up italic">
            The "No" button seems to be running away... Maybe it's a sign? 😏
          </p>
        )}
      </div>
    </div>
  );
}
