import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import pricingData from "../common/data/pricing";

const Pricing = () => {      
        return (
            <React.Fragment>
                <section className="section" id="pricing">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">Our Pricing</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        {pricingData.map((item, key) => (
                            <Col key={key} lg={3} md={6}>
                                <div className={item.isActive ? "pricing-box active mt-4" : "pricing-box mt-4"}>
                                    <div className="price bg-light position-relative p-4">
                                        <div className="float-start">
                                            <h5 className="text-dark title mt-2 fw-normal f-18 mb-0">{item.title}</h5>
                                        </div>
                                        <div className="">
                                            <h2 className="text-dark fw-normal text-end mb-0"><sup>$</sup> {item.price}</h2>
                                        </div>
                                    </div>
                                    <div className="p-4 pricing-list">
                                        <ul className="list-unstyled mb-0">
                                        {item.isChilItem.map((items, key) => (
                                            <li key={key} className="text-muted f-14">{items.subItem}</li>                                           
                                        ))}                                            
                                        </ul>
                                    </div>
                                    <div className="ps-4 mb-4 mt-2">
                                        <Link to="#" className={item.isBtnActive ? "btn btn-outline active btn-sm" : "btn btn-outline btn-sm"}>Buy Now</Link>
                                    </div>
                                </div>
                            </Col>
                        ))}                   
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );    
};
export default Pricing;
