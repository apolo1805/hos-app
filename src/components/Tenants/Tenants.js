import React from 'react';
import './Tenants.css';

function Tenants({users, address, city, fname, lname}) {

    const tenants = users.filter(user => user.address === address && user.city === city && user.fname !== fname && user.lname !== lname);

    return (
        <div className="c-tenants">
            <h3>Building Tenants:</h3>

            <ul>
                {tenants === [] ? tenants.map((user, index) => <li item={index}>{user.fname} {user.lname}</li>) : "No tenants added yet"}
            </ul>
        </div>
    );
}

export default Tenants;