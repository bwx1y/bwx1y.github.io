import {useEffect, useState} from "react";

const ScrollIndicatorComponent = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollWidth(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="scroll-indicator"
            style={{ width: `${scrollWidth}%` }}
        ></div>
    );
}

export default ScrollIndicatorComponent