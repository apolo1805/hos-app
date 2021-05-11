import React from 'react';
import './DashboardPage.css';

function DashboardPage({users, messages}) {

    return (
        <div className="p-dashboard">
            <h1>Dashboard</h1>

            <p className="messages">
                <h3>Last Messages:</h3>

                <ul>
                    {messages.map((message, index) => <li key={index}>{message.content}"</li>)}
                </ul>
            </p>
        </div>
    );
}

export default DashboardPage;