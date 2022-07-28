import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import servicesData from '../common/data/services';

const Services = () => {   
    return (
        <React.Fragment>
            <section className="section" id="services">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="title-heading mb-5">
                                <h3 className="text-dark mb-1 fw-light text-uppercase">Our Services</h3>
                                <div className="title-border-simple position-relative"></div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {servicesData.map((item, key) => (
                            <Col lg={4} md={6} key={key}>
                                <div className="service-box rounded mt-4 p-4">
                                    <div className="service-icon mb-3">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="services-desc">
                                        <div className="service-title mb-2 position-relative">
                                            <h5 className="fw-normal mb-3"><Link to="/#" className="text-dark">{item.title}</Link></h5>
                                        </div>
                                        <p className="text-muted mb-3 f-14">{item.description}</p>
                                        <p className="mb-0 text-uppercase f-13"><Link to="/#" className="text-primary">learn more
                                            <i className="mdi mdi-arrow-right ms-2"></i></Link></p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
};
export default Services;

