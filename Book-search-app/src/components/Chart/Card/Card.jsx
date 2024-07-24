import React from 'react';
import './Card.css';

const Card = ({ title, number }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-number">{number}</p>
            </div>
        </div>
    );
};

export default Card;