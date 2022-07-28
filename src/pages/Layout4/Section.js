import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

// Modal Video
import ModalVideo from "react-modal-video";

///import images
import home from '../../assets/images/home-4-img.png';

const Section = () => {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <section className="section home-4-bg" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={6} className="position-static">
                                    <div className="mt-40 home-4-content">
                                        <h1 className="text-white fw-normal home-2-title mb-0">Simple And Clean But
                                            Professional</h1>
                                        <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum
                                            exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi
                                            consequatur Quis autem.</p>
                                        <div className="subcribe-form mt-5">
                                            <form>
                                                <input type="text" className="mdi mdi-send me-1" placeholder="Enter Email.." />
                                                <button type="submit" className="btn btn-w btn-custom-primary mt-10">Get
                                                    started</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="video-button">
                                        <p className="play-shadow mb-0"><Link
                                            onClick={() => setOpen(true)}
                                            to="#" className="video-play-icon">
                                            <i className="mdi mdi-play play-icon-circle "></i></Link>
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
                                                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />

                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} className="position-static">
                                    <div className="mt-40 home-4-img position-relative ps-5">
                                        <img src={home} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <ModalVideo
                        channel="vimeo"
                        isOpen={open}
                        videoId="287684225"
                        autoplay
                        onClose={() => setOpen(false)}
                    />
                </div>
            </section>
        </React.Fragment>
    );
};
export default Section;
