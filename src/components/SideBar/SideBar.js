import React from 'react';
import axios from 'axios';
import './sidebar.css';
import {NavLink} from 'react-router-dom';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            self: []
        }
    }
    componentDidMount() {
        var url = "https://api.instagram.com/v1/users/self/?access_token=7456960170.651caca.ee76f190b40d42c2a5d2159812d1fd4b";
        axios.get(url).then(response => {
            this.setState({
                self: response.data.data
            });
        });
    }
    render() {
        console.log(this.state.self);
        var array = [];
        array.push(this.state.self);
        var result = array.map(el => {
            return (
                <div className="block1">
                    <div className="image">
                        <img src={el.profile_picture}  alt="" />
                    </div>
                    <div className="profile_name">
                        <div className="username_main"> 
                           <NavLink to="/self" className="username"><span>{el.username}</span></NavLink> 
                        </div>
                        <div className="full_name">{el.full_name}</div>
                    </div>
                </div>
            )
        })
        return (
<div className="side_main">
            <div className="side_wrapper">
                {result}
                <hr className="ro"/>
                <div className="story">
                    <span>Stories</span>
                    <a href="">Watch All</a>
                </div>
                <div className="peoples_wrapper">
                <div className="inner_wrap">
                    <div className="wrapper1">
                        <a href="">
                            <span>
                                <img src="" alt=""/>
                            </span>
                            <div className="people_details">
                                <div className="name">
                                    <span>bramastvari</span>
                                </div>
                                <div>22Hours</div>
                            </div>
                        </a>
                    </div>
                   
                    <div className="wrapper1">
                        <a href="">
                            <span>
                                <img src="" alt=""/>
                            </span>
                            <div className="people_details">
                                <div className="name">
                                    <span>bramastvari</span>
                                </div>
                                <div>22Hours</div>
                            </div>
                        </a>
                    </div>
                    <div className="wrapper1">
                        <a href="">
                            <span>
                                <img src="" alt=""/>
                            </span>
                            <div className="people_details">
                                <div className="name">
                                    <span>bramastvari</span>
                                </div>
                                <div>22Hours</div>
                            </div>
                        </a>
                    </div>
                    <div className="wrapper1">
                        <a href="">
                            <span>
                                <img src="" alt=""/>
                            </span>
                            <div className="people_details">
                                <div className="name" >
                                    <span>bramastvari</span>
                                </div>
                                <div>22Hours</div>
                            </div>
                        </a>
                    </div>
                    <div className="wrapper1">
                        <a href="">
                            <span>
                                <img src="" alt=""/>
                            </span>
                            <div className="people_details">
                                <div className="name">
                                    <span>bramastvari</span>
                                </div>
                                <div>22Hours</div>
                            </div>
                        </a>
                    </div>
                    <div className="wrapper1">
                        <a href="">
                            <span>
                                <img src="" alt=""/>
                            </span>
                            <div className="people_details">
                                <div className="name">
                                    <span>bramastvari</span>
                                </div>
                                <div>22Hours</div>
                            </div>
                        </a>
                    </div>
                   
                    <div className="wrapper1">
                        <a href="">
                            <span>
                                <img src="" alt=""/>
                            </span>
                            <div className="people_details">
                                <div className="name">
                                    <span>bramastvari</span>
                                </div>
                                <div>22Hours</div>
                            </div>
                        </a>
                    </div>
                    <div className="wrapper1">
                        <a href="">
                            <span>
                                <img src="" alt=""/>
                            </span>
                            <div className="people_details">
                                <div className="name">
                                    <span>bramastvari</span>
                                </div>
                                <div>22Hours</div>
                            </div>
                        </a>
                    </div>
  
                </div>
            </div>
            <hr className="ro"/>
<div className="footer_wrap">
    <ul>
        <li><a href="">About Us</a></li>
        <li><a href="">Support</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Press</a></li>
        <li><a href="">Api</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Terms</a></li>
        <li><a href="">Directory</a></li>
        <li><a href="">Profiles</a></li>
        <li><a href="">Hashtags</a></li>
        <li><a href="">Language</a></li>
    </ul>
</div>
</div>
            </div>
        );
    }
}
