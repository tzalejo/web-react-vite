import React from 'react';
import './bubble.modules.css';

const TitleComponent = ({ title }) => {
    return (
        <div className="grid">
            <BubbleText title={title} />
        </div>
    );
};

const BubbleText = ({ title }) => {
    return (
        <h2>
            {title.split('').map((child, idx) => (
                <span className="hoverText" key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    );
};

export default TitleComponent;
