import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div id="ico">
                    <div id="icon1">
                         <a href="" ><i className="fas fa-bars" ref="" ></i></a>
                    </div>
                    <div className="nav_main">
                        <div className="in">

                            <NavLink to="/" id="i"><i className="fab fa-instagram"></i>
                                <h2>Instagram</h2></NavLink>
                        </div>
                        <div className="f">
                            <form>
                                <input type="text" placeholder="search" size="9"/>
                            </form>
                        </div>
                        <div id="r">
                            <div><i className="far fa-dot-circle"></i></div>
                            <div><i className="far fa-heart"></i></div>
                            <div><i className="far fa-user"></i></div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}