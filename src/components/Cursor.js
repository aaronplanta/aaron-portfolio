import React, { useState, useEffect } from 'react';
import '../css/cursor.css'

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Track mouse movement and update the position state
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            // Adjust for scrolling using window.scrollX and window.scrollY
            setPosition({ x: clientX + window.scrollX, y: clientY + window.scrollY });
        };

        // Add event listener for mouse movement
        document.body.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listener on component unmount
        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);  // Empty dependency array to run the effect once when component mounts

    return (
        <>
            <div id="blob"
                style={{
                    top: `${position.y - 100}px`,  // Center the div at the cursor
                    left: `${position.x - 100}px`, // Center the div at the cursor
                    pointerEvents: "none", // To ensure it doesn't interfere with other elements
                }}
            ></div>
        </>
    );
}
