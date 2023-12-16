import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFileInvoiceDollar, faChartLine, faPlay, faBook } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Content from './Content';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleSidebarToggle = () => {
        setExpanded(!expanded);
    };
   

    return (
        <div className='flex flex-row'>
            <div className={`sidebar ${expanded ? 'expanded' : ''}`} onMouseEnter={handleSidebarToggle} onMouseLeave={handleSidebarToggle}>
            <div className="icon" >
            <FontAwesomeIcon icon={faHouse} />
                <span className="label">Home</span>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faUser} />
                <span className="label">Mangager</span>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
                <span className="label">Billing</span>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faChartLine} />
                <span className="label">Dashboard</span>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faPlay} />
                <span className="label">Video</span>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faBook} />
                <span className="label">E-Books</span>
            </div>
        </div>
        <Content/>
        </div>
    );
};

export default Navbar;
