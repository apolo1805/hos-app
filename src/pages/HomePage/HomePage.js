import React from 'react';
import './HomePage.css';

function HomePage(props) {
    return (
        <div className="p-home">
            <h1>Home OWner System</h1>
            <h2>The best system to manage your building community!</h2>
            <img src="https://storage.googleapis.com/website-production/uploads/2011/10/real-estate-landing-pages-case-study-770x384.jpg" alt="key"/>
            <p className="info">
                Home Owner System is a unique building community management system which allows the committee to post messages,
                create voting polls and open repair issues.
            </p>
        </div>
    );
}

export default HomePage;