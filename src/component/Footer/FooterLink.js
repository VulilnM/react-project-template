import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const FooterLink = () => {
    return (
        <React.Fragment>
            <section className="footer-alt bg-dark pt-3 pb-3 position-relative">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <p className="copyright text-white f-14 fw-light mb-0">
                                {(new Date().getFullYear())}{" "} © Zooki. Design By Themesbrand
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )

}
export default FooterLink;
