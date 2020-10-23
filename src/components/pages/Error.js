import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
import Layout from "../Layout";

const Error = () => {
    return (
        <Layout header={false}>
            <div className='text-center mt-lg-5'>
                <div>
                    <h1>Not Found</h1>
                    <p>Sorry, the page you visited does not exist.</p>
                    <Link to='/'>
                        <Button>Home</Button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Error;
