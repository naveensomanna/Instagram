import React from 'react';
import {NavLink} from 'react-router-dom';
export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div id="ico">
<a href="" ><i className="fas fa-bars"  ref="icon1" ></i></a>
<div className="nav_main">
    <div className="in">

<NavLink to="/" id="i"><i className="fab fa-instagram"></i>
                                <h2>Instagram</h2></NavLink>
    </div>
                                <div className="f">
                        <form>
                            <input type="text" placeholder="search" />
                        </form>
                    </div>
                    <div className="r">
                        <i className="far fa-dot-circle"></i>
                        <i className="far fa-heart"></i>
                        <i className="far fa-user"></i>
                    </div>
</div>

</div>
                
</div>
        );
    }
}