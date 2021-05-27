import React, { useContext } from 'react';
import './HomePage.css';

function HomePage() {

    return (
        <div className="p-home">
            <h1>Home OWner System</h1>
            <h3>The best system to manage your building community!</h3>
            <p className="info">
                HOS app allows the committee to: post a messages,
                create voting polls and open repair issues.
            </p>
            <div className="img-container">
                <img src="https://storage.googleapis.com/website-production/uploads/2011/10/real-estate-landing-pages-case-study-770x384.jpg"/>
            </div>
        </div>
    );
}

export default HomePage;