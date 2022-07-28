import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import FooterLink from './FooterLink';
import footerData from "../../common/data/footer";

const Footer = () => {
    return (
        <React.Fragment>
            <section className="footer-bg bg-white">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="mb-5">
                                <p className="text-uppercase text-dark footer-title mb-4">About Us</p>
                                <p className="text-muted f-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem that
                                    is doloremque totam that laudantiume.</p>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Row>
                                {footerData.map((item, key) => (
                                    <Col lg={4} key={key}>
                                        <div className="mb-5">
                                            <p className="text-uppercase text-dark footer-title mb-4">{item.title}</p>
                                            <ul className="list-unstyled footer-sub-menu">
                                                {item.childItem.map((items, key) => (
                                                    <li className="f-14" key={key}><Link to="/" className="text-muted">{items.subItem}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterLink />
        </React.Fragment>
    );
};
export default Footer;
