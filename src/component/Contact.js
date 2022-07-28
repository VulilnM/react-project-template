import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Input, Form, FormFeedback } from 'reactstrap';

//import validation
import { useFormik } from "formik";
import * as Yup from 'yup';

const Contact = () => {
    const validation = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",           
        },
        validationSchema: Yup.object({
            name: Yup.string().required("*Please enter a Name*"),
            email: Yup.string().required("*Please enter a Email*"),
            subject: Yup.string().required("*Please enter a Subject*"),           
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <React.Fragment>
            <section className="section bg-light" id="contact">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="title-heading mb-5">
                                <h3 className="text-dark mb-1 fw-light text-uppercase">Get in touch</h3>
                                <div className="title-border-simple position-relative"></div>
                            </div>
                        </Col>

                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className="contact-box p-5">
                                <Row>
                                    <Col lg={8} md={6}>
                                        <div className="custom-form p-3">
                                            <Form method="post" name="myForm" onSubmit={validation.handleSubmit}>
                                                <p id="error-msg"></p>
                                                <div id="simple-msg"></div>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="mb-3 app-label">
                                                            <Input
                                                                name="name"
                                                                id="name"
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Name"
                                                                value={validation.values.name || ""}
                                                                onBlur={validation.handleChange}
                                                                onChange={validation.handleChange}
                                                                invalid={validation.errors.name && validation.touched.name ? true : false}
                                                            />
                                                            {validation.errors.name && validation.touched.name ? (
                                                                <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3 app-label">
                                                            <Input
                                                                name="email"
                                                                id="email"
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Email"
                                                                value={validation.values.email || ""}
                                                                onBlur={validation.handleChange}
                                                                onChange={validation.handleChange}
                                                                invalid={validation.errors.email && validation.touched.email ? true : false}
                                                            />
                                                            {validation.errors.email && validation.touched.email ? (
                                                                <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="mb-3 app-label">
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                id="subject"
                                                                placeholder="Subject"
                                                                name="subject"
                                                                value={validation.values.subject || ""}
                                                                onBlur={validation.handleChange}
                                                                onChange={validation.handleChange}
                                                                invalid={validation.errors.subject && validation.touched.subject ? true : false}
                                                            />
                                                            {validation.errors.subject && validation.touched.subject ? (
                                                                <FormFeedback type="invalid">{validation.errors.subject}</FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="mb-3 app-label">
                                                            <textarea name="comments" id="comments" rows="5"
                                                                className="form-control" placeholder="Message" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <button type="submit" id="submit" name="send"
                                                            className="submitBnt btn btn-custom" value="Send Message" >Send Message</button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Col>

                                    <Col lg={4} md={6}>
                                        <div className="contact-cantent p-3">
                                            <div className="contact-details">
                                                <div className="float-start contact-icon me-3 mt-2">
                                                    <i className="mdi mdi-headphones text-muted h5"></i>
                                                </div>
                                                <div className="app-contact-desc text-muted pt-1">
                                                    <p className="mb-0 info-title f-13">Call :</p>
                                                    <p className="mb-0 f-13">012-345-6789</p>
                                                </div>
                                            </div>

                                            <div className="contact-details mt-2">
                                                <div className="float-start contact-icon me-3 mt-2">
                                                    <i className="mdi mdi-email-outline text-muted h5"></i>
                                                </div>
                                                <div className="app-contact-desc text-muted pt-1">
                                                    <p className="mb-0 info-title f-13">Email :</p>
                                                    <p className="mb-0 f-13"><Link to="/" className="text-muted">youremailid@gmail.com</Link>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="contact-details mt-2">
                                                <div className="float-start contact-icon me-3 mt-2">
                                                    <i className="mdi mdi-map-marker text-muted h5"></i>
                                                </div>
                                                <div className="app-contact-desc text-muted pt-1">
                                                    <p className="mb-0 info-title f-13">Location :</p>
                                                    <p className="mb-0 f-13"><Link to="/" className="text-muted">3179 Raccoon Run Seattle,
                                                        WA 98109</Link></p>
                                                </div>
                                            </div>

                                            <div className="follow mt-4">
                                                <h4 className="text-dark mb-3">Follow</h4>
                                                <ul className="follow-icon list-inline mt-32 mb-0">
                                                    <li className="list-inline-item f-15"><Link to="/#"
                                                        className="social-icon text-muted"><i className="mdi mdi-facebook"></i></Link>
                                                    </li>
                                                    <li className="list-inline-item f-15"><Link to="/#"
                                                        className="social-icon text-muted"><i className="mdi mdi-twitter"></i></Link>
                                                    </li>
                                                    <li className="list-inline-item f-15"><Link to="/#"
                                                        className="social-icon text-muted"><i
                                                            className="mdi mdi-google-plus"></i></Link></li>
                                                    <li className="list-inline-item f-15"><Link to="/#"
                                                        className="social-icon text-muted"><i className="mdi mdi-linkedin"></i></Link>
                                                    </li>
                                                    <li className="list-inline-item f-15"><Link to="/#"
                                                        className="social-icon text-muted"><i className="mdi mdi-whatsapp"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default Contact;
