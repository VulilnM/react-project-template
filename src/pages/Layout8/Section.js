import React, { useState } from 'react'
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import ReactTextRotator from "react-text-rotator";

// Modal Video
import ModalVideo from "react-modal-video";

const Section = () => {
    const [open, setOpen] = useState(false);

    const content = [
        {
            text: "We Make Beautiful Things",
            animation: "zoom",
            easing: "easeOutExpo",
            duration: 500,
            translateY: [100, 0],
            translateZ: 200,
            opacity: [0, 1],
        },
    ];    
    

    return (
        <React.Fragment>
            <section className="section home-8-bg" id="home">
                <ReactPlayer
                    id="myVideo"
                    url="http://techslides.com/demos/sample-videos/small.mp4"
                    type="video/mp4"
                    width="100%"
                    height="unset"
                    loop={true}
                    playing={true}
                    muted={true}
                />
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={7}>
                                    <div className="mt-40 text-center home-8-content">                                      
                                        <h1 className="text-white fw-light home-8-title mb-0">
                                            <ReactTextRotator
                                                content={content}
                                                time={5000}
                                                startDelay={2000}
                                            />                                            
                                        </h1>
                                        <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum
                                            exercitationem
                                            ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis
                                            autem.</p>
                                        <div className="home-8-content mt-5">
                                            <p className="play-shadow mb-0">
                                                <Link to="#"
                                                    onClick={() => setOpen(true)}
                                                    className="video-play-icon text-white">
                                                    <i className="mdi mdi-play play-icon-circle me-2" ></i>
                                                    <span>Watch The Video!</span></Link>
                                            </p>
                                        </div>
                                        <div className="modal fade bd-example-modal-lg" id="watchvideomodal" data-keyboard="false"
                                            tabIndex="-1" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
                                                <div className="modal-content home-modal">
                                                    <div className="modal-header border-0">
                                                        <button type="button" className="btn-close"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <video id="VisaChipCardVideo" className="video-box" controls>
                                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                            type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <ModalVideo
                            channel="vimeo"
                            isOpen={open}
                            videoId="287684225"
                            autoplay
                            onClose={() => setOpen(false)}
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default Section;
