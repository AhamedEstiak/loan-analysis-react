import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";

const Layout = (props) => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={4} className='content-wrapper'>
                    {props.header ? <Header /> : null}
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
};

Layout.defaultProps = {
    header: true,
}

export default Layout;
