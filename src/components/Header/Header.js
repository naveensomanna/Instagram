import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
export default class Header extends React.Component {
    render() 
    {
        
         
        
        return (
            <div>
            <div className="header_main">
                <div className="inner_head">
                    <div className="icon_main">
                        <div className="icon">
                            <NavLink to="/" id="insta"><i className="fab fa-instagram"></i>
                                <h2>Instagram</h2></NavLink>

                        </div>
                    </div>
                    <div className="form1">
                        <form>
                            <input type="text" placeholder="search" />
                        </form>
                    </div>
                    <div className="routing">
                        <i className="far fa-dot-circle"></i>
                        <i className="far fa-heart"></i>
                        <i className="far fa-user"></i>
                    </div>
                </div>
            </div>
            <Navbar/>
            </div>
        );
    }
}