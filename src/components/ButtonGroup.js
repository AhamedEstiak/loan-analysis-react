import React from 'react';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const ButtonGroup = ({nextButtonLabel, handleSubmit, disabled}) => {
    const history = useHistory();

    return (
        <div className='btn-group-wrapper'>
            <Button
                variant="primary"
                className='btn-left-small'
                onClick={() => history.goBack()}
            >
                Prev
            </Button>
            <Button
                variant="primary"
                type="submit"
                className='btn-right-large'
                onClick={handleSubmit ? handleSubmit : null}
                disabled={disabled}
            >
                {nextButtonLabel || 'Next'}
            </Button>
        </div>
    );
};

ButtonGroup.defaultProps = {
    disabled: false,
}

export default ButtonGroup;
