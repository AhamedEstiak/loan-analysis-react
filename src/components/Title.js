import React from 'react';

const Title = ({label}) => {
    return (
        <div className='title'>
            <h6>
                <img src='dot.png' />
                {label}
            </h6>
        </div>
    );
};

export default Title;
