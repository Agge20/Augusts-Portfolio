const particlesTSLightModeConfig = {
    fpsLimit: 144,
    background: {
        color: {
            value: "transparent",
        },
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        // Number of particles
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        // Color of particles
        color: {
            value: "#37F286",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#0F0F0F",
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 1,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 0,
            random: false,
            anim: {
                enable: false,
                speed: 2,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#181B1F",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onclick: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                grap: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
            },
        },
    },
    detectRetina: true,
};

export { particlesTSLightModeConfig };
