import React, { useState, useEffect } from "react";

const UpButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                padding: "1rem",
                borderRadius: "20px",
                border: "none",
                fontSize: "1.5rem",
                background: "linear-gradient(135deg, #EA173F, #A82158)",
                cursor: "pointer",
                color:"white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 1000,
                fontWeight: "bold",
            }}
            aria-label="Scroll to top"
        >
            ↑ Scroll To Top
            
        </button>
    );
};

export default UpButton;