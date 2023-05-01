import React from 'react';
import s from './Particle.module.css'
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import {Engine} from 'tsparticles-engine/types/engine';

export const Particle = () => {

    const particlesInit = async (main: Engine) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };


    return (
            <Particles
                id="tsparticles"
                init={particlesInit}
                className={s.particles}
                options={{
                    "fullScreen": {
                        "enable": false,
                        "zIndex": 1
                    },
                    "particles": {
                        "number": {
                            "value": 15,
                            "density": {
                                "enable": true,
                                "value_area": 400
                            }
                        },
                        "color": {
                            "value": "#fff",
                        },
                        "shape": {
                            "type": "star",
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 250,
                            "color": "#9068D0FF",
                            "width": 3,
                            "opacity": 0.3,
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": ["bounce"]
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                            },
                            "push": {
                                "particles_nb": 1
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },

                }}
            />
    );
};
