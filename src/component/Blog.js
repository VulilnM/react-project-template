import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import blogData from "../common/data/blog";

const Blog = () => {   
    return (
        <React.Fragment>
            <section className="section" id="blog">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="title-heading mb-5">
                                <h3 className="text-dark mb-1 fw-light text-uppercase">The Blog</h3>
                                <div className="title-border-simple position-relative"></div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {blogData.map((item, key) => (
                            <Col key={key} lg={4}>
                                <div className="blog position-relative">
                                    <div className="blog-img position-relative mt-4">
                                        <div className="blog-date">
                                            <p className="mb-0 fw-light text-white f-15">{item.date}</p>
                                        </div>
                                        <img src={item.img} alt="" className="img-fluid mx-auto d-block rounded" />
                                    </div>
                                    <div className="position-relative">
                                        <div className="blog-content text-center bg-white p-4">
                                            <p className="text-uppercase f-13 mb-2 text-muted">{item.category}</p>
                                            <h5 className="fw-normal f-18"><Link to="#" className="text-dark">{item.title}</Link>
                                            </h5>
                                            <p className="text-muted f-14">{item.textContent}</p>
                                            <div className="read-more">
                                                <Link to="/#" className=" text-primary f-15">Read more<i
                                                    className="mdi mdi-arrow-right"></i></Link>
                                            </div>
                                        </div>
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
export default Blog;