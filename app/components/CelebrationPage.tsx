import { useState, useEffect } from "react";

export default function CelebrationPage() {
    const [showConfetti, setShowConfetti] = useState(true);
    const [isMusicPlaying, setIsMusicPlaying] = useState(true);

    useEffect(() => {
        // Hide confetti after 10 seconds
        const timer = setTimeout(() => setShowConfetti(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    const toggleMusic = () => {
        setIsMusicPlaying(!isMusicPlaying);
    };

    // Generate confetti pieces
    const confettiColors = ["#ff6b9d", "#c06c84", "#f67280", "#ffa07a", "#ff9aa2", "#FFD700", "#FF69B4"];
    const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 4}s`,
    }));

    return (
        <div className="romantic-gradient min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Hidden YouTube Video for Background Music */}
            {isMusicPlaying && (
                <iframe
                    className="hidden"
                    width="0"
                    height="0"
                    src="https://www.youtube.com/embed/7Lna4Hu4-AQ?autoplay=1&loop=1&playlist=7Lna4Hu4-AQ"
                    title="Background Music"
                    allow="autoplay; encrypted-media"
                    style={{ display: 'none' }}
                />
            )}

            {/* Music Control Button */}
            <button
                onClick={toggleMusic}
                className="fixed top-6 right-6 z-50 glass-card rounded-full p-4 hover:scale-110 transition-all duration-300 shadow-2xl group"
                title={isMusicPlaying ? 'Pause Music' : 'Play Music'}
            >
                <div className="text-3xl">
                    {isMusicPlaying ? '🔊' : '🔇'}
                </div>
            </button>

            {/* Confetti Animation */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {confettiPieces.map((piece) => (
                        <div
                            key={piece.id}
                            className="confetti-piece"
                            style={{
                                left: piece.left,
                                backgroundColor: piece.color,
                                animationDelay: piece.delay,
                                animationDuration: piece.duration,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Floating Hearts */}
            <div className="floating-heart">💕</div>
            <div className="floating-heart">💖</div>
            <div className="floating-heart">💗</div>
            <div className="floating-heart">💝</div>
            <div className="floating-heart">💘</div>
            <div className="floating-heart">❤️</div>

            {/* Main Celebration Content */}
            <div className="max-w-4xl w-full text-center relative z-10">
                {/* Celebration Message */}
                <div className="fade-in-up mb-8">
                    <div className="text-7xl md:text-9xl mb-6">
                        🎉 💕 🎊
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg pulse-heart" style={{ fontFamily: "'Great Vibes', cursive" }}>
                        Yay! 💖
                    </h1>
                    <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed" style={{ fontFamily: "'Dancing Script', cursive" }}>

                        Can't wait to spend this special day with you! 🌹
                    </p>
                </div>

                {/* Special Photo Card */}
                <div className="glass-card rounded-3xl p-6 md:p-8 mb-8 fade-in-up mx-auto max-w-3xl" style={{ animationDelay: '0.3s' }}>
                    <div className="relative">
                        <img
                            src="/images/20260118_152915.jpg.jpeg"
                            alt="Our special moment"
                            className="rounded-2xl w-full shadow-2xl"
                        />
                        <div className="absolute top-4 right-4 text-4xl sparkle">✨</div>
                        <div className="absolute bottom-4 left-4 text-4xl sparkle" style={{ animationDelay: '0.5s' }}>💕</div>
                    </div>
                    <p className="text-white text-xl md:text-2xl mt-6 font-medium italic">
                        "Every moment with you is a treasure" 💝
                    </p>
                </div>

                {/* Romantic Messages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="glass-card rounded-2xl p-6 fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="text-5xl mb-3">🌹</div>
                        <p className="text-white text-lg">You're my forever Valentine</p>
                    </div>
                    <div className="glass-card rounded-2xl p-6 fade-in-up" style={{ animationDelay: '0.7s' }}>
                        <div className="text-5xl mb-3">👩🏽‍❤️‍💋‍👨🏾</div>
                        <p className="text-white text-lg"></p>
                    </div>
                    <div className="glass-card rounded-2xl p-6 fade-in-up" style={{ animationDelay: '0.9s' }}>
                        <div className="text-5xl mb-3">💖</div>
                        <p className="text-white text-lg">I love you more every day</p>
                    </div>
                </div>

                {/* Hearts Row */}
                <div className="text-6xl mt-12 fade-in-up" style={{ animationDelay: '1.1s' }}>
                    💕 💖 💗 💝 💘 ❤️ 💕
                </div>
            </div>
        </div>
    );
}
