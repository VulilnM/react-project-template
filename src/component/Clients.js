import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import clientsData from '../common/data/clients';

//Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import Images
import quotes from '../assets/images/quote-img.png';

const Clients = () => {
    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };    
    return (
        <React.Fragment>
            <section className="section bg-clients" id="clients">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="title-heading mb-5">
                                <h3 className="text-white mb-1 fw-light text-uppercase">Our Clients</h3>
                                <div className="title-border-color position-relative"></div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Slider {...settings} className="client-slider">
                                {clientsData.map((item, key) => (
                                    <div key={key}>
                                        <div className="testi-content">
                                            <div className="testi-box mt-4">
                                                <h4 className="text-white mb-3 fw-light">"{item.title}"</h4>
                                                <p className="text-white-70 fw-light mb-0 f-15">At vero eos et accusamus et iusto odio
                                                    dignissimos that site ducimus qui blanditiis praesentium voluptatum deleniti
                                                    atque
                                                    corrupti quos dolores quas molestias excepturi cupiditate non.</p>
                                                <div className="quote-img">
                                                    <img src={quotes} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="float-end ms-3">
                                                    <div className="client-img">
                                                        <img src={item.img} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="clients-name text-end pt-3">
                                                    <h6 className="text-white fw-normal position-relative f-17 mb-0"><span
                                                        className="after-border"></span> {item.author}</h6>
                                                    <p className="text-white-70 f-13 mb-0">{item.category}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};
export default Clients;
