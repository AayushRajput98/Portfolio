import React from 'react';

function ProgressBar(props) {

    const { completed } = props;

    const containerStyles = {
        height: 20,
        width: 'inherit',
        backgroundColor: "grey",
        borderRadius: 50,
        margin: 10
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'white',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>   
            </div>
        </div>
    );
}

export default ProgressBar;