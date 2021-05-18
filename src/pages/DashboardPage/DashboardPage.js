import React, { useContext } from 'react';
import './DashboardPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import TenantSignup from '../../components/TenantSignup/TenantSignup';
import UsersContext from '../shared/UsersContext';
import Messages from '../../components/Messages/Messages';
import BuildingAddress from '../../components/BuildingAddress/BuildingAddress';
import Tenants from '../../components/Messages/Tenants/Tenants';

function DashboardPage({messages, activeUser, addMessage, addNewTenant}) {

    var users = useContext(UsersContext);

    return (
        <div className="p-dashboard">
            <h1>Dashboard</h1>
            <h5 className="greeting">Hello, {activeUser.fname}! Nice to see you again</h5>
            
            <div className="container">

                <Messages users={users} messages={messages} addMessage={addMessage}/>

                <BuildingAddress activeUser={activeUser}/>

                <Tenants users={users} address={activeUser.address} city={activeUser.city} fname={activeUser.fname} lname={activeUser.lname}/>

                {activeUser.isCommittee ? <TenantSignup createNewTenant={addNewTenant}/> : ''}

            </div>
        </div>
    );
}

export default DashboardPage;