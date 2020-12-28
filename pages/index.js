import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Row, Col, Button, Form, FormGroup, Input
} from 'reactstrap';

import Image from 'next/image';
import Head from 'next/head';

export default function Home() {

    return (
        <div className="body">
            <Head>
                <title>Projeto</title>
                <link href="/src/style.css" rel="stylesheet" />
            </Head>
            <Container>
                <Container>
                <h3>Free Ebook: The Complete Guide to Facebook Ads</h3>
                <hr color="white" height="3px"></hr>
                <Row>
                    <Col xs="6">
                        <p><b>Want a crash course in everything you need to know about Facebook Ads?</b></p>
                        <p>This 82-page ebook will teach you everything, from budgeting and design to advanced targeting, strateges to get the most bang for you buck, and much more!</p>
                        <Image
                            src="/src/img/logo.png"
                            width={473}
                            height={329}
                        />
                    </Col>
                    <Col xs="6">
                        <div className="form">
                        <h4>Download Your Free Guide Today!</h4>
                        <Form className="formu">
                            <FormGroup>
                                <Input type="email" name="email" placeholder="Your First Name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="password" placeholder="Your Email" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="site"  placeholder="Your Business Website" />
                            </FormGroup>
                            <Button color="warning" className="text-white"><b>Get My FREE Ebook</b></Button>
                        </Form>
                        </div>
                    </Col>
                </Row>
                </Container>
            </Container>
        </div>
    );
};