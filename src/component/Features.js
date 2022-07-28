import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//import images
import features from '../assets/images/features-img/img-1.png';
import features2 from '../assets/images/features-img/img-2.png';
import features3 from '../assets/images/features-img/img-3.png';

const Features = () => {     
        return (
            <React.Fragment>
                <section className="section bg-features bg-light" id="features">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">Our Features</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="features-content">
                                    <div className="features-icon">
                                        <i className="pe-7s-science text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">Marketing Performance</h4>
                                    <p className="text-muted f-14">Itaque earum rerum hic tenetur sapiente delectut reiciendis
                                    voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur
                                        perferendisthat doloribus asperiores repellat.</p>
                                    <p className="text-muted f-14">Nam libero tempore cum soluta nobis eligendi optio cumque nihil
                                        impedit minusidquod maxime placeat facere possimus.</p>
                                    <p className="mb-0 text-uppercase f-13"><Link to="#" className="text-primary">learn more <span
                                        className="right-arrow ms-1">&#x21FE;</span></Link></p>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="features-img mt-32">
                                    <img src={features} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section>
                <section className="section bg-features">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="features-img">
                                    <img src={features2} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="features-content mt-32">
                                    <div className="features-icon">
                                        <i className="pe-7s-shuffle text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">Strategy Solutions</h4>
                                    <p className="text-muted f-14">Itaque earum rerum hic tenetur sapiente delectut reiciendis
                                    voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur
                                        perferendisthat doloribus asperiores repellat.</p>
                                    <p className="text-muted f-14">Nam libero tempore cum soluta nobis eligendi optio cumque nihil
                                        impedit minusidquod maxime placeat facere possimus.</p>
                                    <p className="mb-0 text-uppercase f-13"><Link to="#" className="text-primary">learn more <span
                                        className="right-arrow ms-1">&#x21FE;</span></Link></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section bg-features bg-light">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="features-content">
                                    <div className="features-icon">
                                        <i className="pe-7s-display1 text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">Marketing business</h4>
                                    <p className="text-muted f-14">Itaque earum rerum hic tenetur sapiente delectut reiciendis
                                    voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur
                                        perferendisthat doloribus asperiores repellat.</p>
                                    <p className="text-muted f-14">Nam libero tempore cum soluta nobis eligendi optio cumque nihil
                                        impedit minusidquod maxime placeat facere possimus.</p>
                                    <p className="mb-0 text-uppercase f-13"><Link to="#" className="text-primary">learn more <span
                                        className="right-arrow ms-1">&#x21FE;</span></Link></p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="features-img mt-40">
                                    <img src={features3} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )    
};
export default Features;
