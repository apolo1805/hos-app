import React, { useContext } from 'react';
import './DashboardPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import TenantSignup from '../../components/TenantSignup/TenantSignup';
import UsersContext from '../shared/UsersContext';
import Messages from '../../components/Messages/Messages';
import BuildingAddress from '../../components/BuildingAddress/BuildingAddress';
import Tenants from '../../components/Tenants/Tenants';

function DashboardPage({messages, activeUser, addMessage, addNewTenant, addNewComment}) {

    var users = useContext(UsersContext);

    return (
        <div className="p-dashboard">
            <h1>Dashboard</h1>
            <h5 className="greeting">
                Hello, {activeUser.isCommittee ?
                    activeUser.fname + " " + activeUser.lname :
                        activeUser.lname + " Family"}! Nice to see you again
            </h5>
            
            <div className="container">

                <Messages users={users} messages={messages} addMessage={addMessage} addComment={addNewComment}/>

                <BuildingAddress activeUser={activeUser}/>

                <Tenants users={users} address={activeUser.address} city={activeUser.city} fname={activeUser.fname} lname={activeUser.lname}/>

                {activeUser.isCommittee ? <TenantSignup createNewTenant={addNewTenant}/> : ''}

            </div>
        </div>
    );
}

export default DashboardPage;