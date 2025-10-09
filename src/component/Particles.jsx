import React, { useEffect, useRef } from "react";

const Particles = () =>  {
    const particleRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            particleRefs.current.forEach((particle, index) => {
                const speed = (index + 1) * 0.1; // parallax lebih subtle
                if (particle) {
                    particle.style.transform = `translateY(${scrolled * speed}px)`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const particleCount = 30;

    return (
        <div className="bg-particles">
            {[...Array(particleCount)].map((_, index) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const size = 4 + Math.random() * 8;
                const delay = Math.random() * 5;
                return (
                    <div
                        key={index}
                        ref={(el) => (particleRefs.current[index] = el)}
                        className="particle"
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            animationDelay: `-${delay}s`,
                        }}
                    />
                );
            })}
        </div>
    );
}

export default Particles;