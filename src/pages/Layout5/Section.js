import React from 'react';
import Particles from "react-tsparticles";
import { Container, Row, Col } from 'reactstrap';

const Section = () => {  
        return (
            <React.Fragment>
                <section className="section home-5-bg" id="home">
                    <div className="bg-overlay"></div>
                    <Particles
                        params={{
                            particles: {

                                number: {
                                    value: 70,
                                    density: {
                                        enable: true,
                                        value_area: 800,
                                    },
                                },
                                color: {
                                    value: "#ffffff",
                                },
                                shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 0,
                                        color: "#000000",
                                    },
                                    polygon: {
                                        nb_sides: 5,
                                    },
                                    image: {
                                        src: "img/github.svg",
                                        width: 100,
                                        height: 100,
                                    },
                                },
                                opacity: {
                                    value: 0.5,
                                    random: false,
                                    anim: {
                                        enable: false,
                                        speed: 1,
                                        opacity_min: 0.2,
                                        sync: false,
                                    },
                                },
                                size: {
                                    value: 5,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 40,
                                        size_min: 0.1,
                                        sync: false,
                                    },
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 150,
                                    color: "#ffffff",
                                    opacity: 0.4,
                                    width: 1,
                                },
                                move: {
                                    enable: true,
                                    speed: 2,
                                    direction: "none",
                                    random: false,
                                    straight: false,
                                    out_mode: "out",
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200,
                                    },
                                },
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                            opacity: 1,
                                        },
                                    },
                                    bubble: {
                                        distance: 400,
                                        size: 40,
                                        duration: 2,
                                        opacity: 2,
                                        speed: 3,
                                    },
                                    repulse: {
                                        distance: 200,
                                    },
                                    push: {
                                        particles_nb: 4,
                                    },
                                    remove: {
                                        particles_nb: 2,
                                    },
                                },
                            },
                            retina_detect: true,
                            config_demo: {
                                hide_card: false,
                                background_color: "#b61924",
                                background_image: "",
                                background_position: "50% 50%",
                                background_repeat: "no-repeat",
                                background_size: "cover",
                            },
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: "0px",
                        }}
                    />
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={7}>
                                        <div className="mt-40 text-center home-5-content">
                                            <div className="home-icon mb-4">
                                                <i className="mdi mdi-pinwheel mdi-spin text-white h1"></i>
                                            </div>
                                            <h1 className="text-white fw-normal home-5-title mb-0">A Clean & Minimal Landing Template</h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum
                                            exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi
                                            consequatur Quis autem.</p>
                                            <div className="mt-5">
                                                <button type="submit" className="btn btn-custom">Get started</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );    
};
export default Section;