import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

const Error = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <p>Sorry, the page you visited does not exist.</p>
            <Link to='/'>
                <Button>Home</Button>
            </Link>
        </div>
    );
};

export default Error;
