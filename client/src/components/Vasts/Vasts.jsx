import React from 'react';

function Vasts({ vasts }) {
    return (
        <div>{vasts && vasts.map(vast => <div key={vast}>{vast}</div>)}</div>
    );
}

export default Vasts;
