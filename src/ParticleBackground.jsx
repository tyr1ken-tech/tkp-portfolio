import React, { useEffect } from 'react';

const ParticleBackground = () => {
    useEffect(() => {
        const particlesConfig = {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#12e8c4" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
                "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
                "line_linked": { "enable": true, "distance": 300, "color": "#12e8c4", "opacity": 0.1, "width": 1.1 },
                "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
            },
            "interactivity": {
                "detect_on": "window",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
            },
            "retina_detect": true
        };

        // Check if particles.js is already loaded
        if (!window.particlesJS) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
            script.async = true;
            script.id = 'particles-js-script';

            script.onload = () => {
                // You can initialize default particles here or pass a config path
                window.particlesJS('particles-js', particlesConfig);
            };

            // Inject the script into the document body
            document.body.appendChild(script);
        } else {
            // If it's already there, we might want to just reinitalize
            if (window.particlesJS) {
                window.particlesJS('particles-js', particlesConfig);
            }
        }

        return () => {
            // Clean up the particles instance on unmount to prevent leaks
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
        };
    }, []);

    return (
        <div
            id="particles-js"
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: -1,
                top: 0,
                left: 0,
                backgroundColor: '#1B1F24'
            }}
        />
    );
};

export default ParticleBackground;
