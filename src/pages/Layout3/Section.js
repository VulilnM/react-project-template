import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Modal Video
import ModalVideo from "react-modal-video";

//import images
import shap from '../../assets/images/home-3-shape.png';
import ipad from '../../assets/images/ipad-img.png';

const Section = () => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <section className="section home-3-bg" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={5}>
                                    <div className="mt-40 home-3-content">
                                        <h1 className="text-white fw-normal home-3-title display-4 mb-0">Optimize Your Service Business</h1>
                                        <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum
                                            exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi
                                            consequatur Quis autem.</p>
                                        <div className="mt-5">
                                            <Link to="#" className="btn btn-custom me-3">Learn More</Link>

                                            <span className="play-shadow mt-4"><Link to="#"
                                                onClick={() => setOpen(true)}
                                                className="video-play-icon text-white"><i
                                                    className="mdi mdi-play play-icon-circle text-white me-2"></i>
                                                <span className="f-14">Watch Video!</span></Link>
                                            </span>

                                        </div>
                                    </div>
                                </Col>

                                <Col lg={7}>
                                    <div className="mt-40 home-3-content position-relative p-4">
                                        <img src={ipad} alt="" className="img-fluid mx-auto d-block home-2-img" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        <Container fluid>
                            <Row>
                                <div className="home-3-shape">
                                    <img src={shap} alt="" className="img-fluid mx-auto w-100 d-block" />
                                </div>
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
