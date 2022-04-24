import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className="NotFound">
        <div className="NotFound-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            <h1 className="title">NOT FOUND!</h1>
            <p className="subtitle">The resource requested could not be found on this server</p>
            <div className="notfound-image">
                <img src="https://tse1.mm.bing.net/th?id=OIP.YYhDfedxmyi6_3BKbuBepgHaEl" alt="Not Found"/>
            </div>
            <button className="primary-button notfound-button">Back to home</button>
            
        </div>
    </div>
    );
};

export default NotFound;