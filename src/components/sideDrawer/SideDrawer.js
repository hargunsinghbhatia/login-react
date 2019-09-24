import React from 'react';

import './SideDrawer.css';
const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className = {drawerClasses}>
            <div></div>
            <ul>
                <li><a href="/">Dashboard</a><br/></li>
                <li><a href="/">Accounts</a><br/></li>
                <li><a href="/">Jobs</a><br/></li>
            </ul>
        </nav>
    );
    }
export default SideDrawer;