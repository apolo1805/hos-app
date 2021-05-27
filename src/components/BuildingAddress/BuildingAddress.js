import React from 'react';
import './BuildingAddress.css';

function BuildingAddress({activeUser}) {
    return (
        <div className="c-buildingAddress">
            <h3>Building Address:</h3>
            {activeUser.street}, {activeUser.city}
        </div>
    );
}

export default BuildingAddress;