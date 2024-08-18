import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing an arrow icon from react-icons

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            // Show button after 300px scroll
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-6 p-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            aria-label="Back to Top"
            style={{
                transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
        >
            <FaArrowUp />
        </button>
    );
};

export default BackToTopButton;
