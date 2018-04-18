import React from 'react';
import axios from 'axios';
import './self.css';
import SelfMedia from './SelfMedia';
import Save from './Save.js';

import { NavLink, Route } from 'react-router-dom';
export default class Self extends React.Component {
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
                <div className="self_details">
                    <div className="section_img">
                        <div className="im">
                            <img key={el} src={el.profile_picture} alt="" />
                        </div>
                    </div>

                    <div className="prof_details">
                        <div className="prof_wrap">

                            <div className="nami" title={el.username}>{el.username}</div>
                            
                            <div></div>
                        </div>
                        <ul className="follw">
                            <li className="follow"><span><span>{el && el.counts ? el.counts.media : null}posts</span></span></li>
                            <li className="follow"><span><span>{el && el.counts ? el.counts.followed_by : null}followers</span></span>     </li>
                            <li className="follow"><span><span>{el && el.counts ? el.counts.follows : null}following</span></span>  </li>

                        </ul>
                        <div>
                            <h1 className="full_nami">{el.full_name}</h1>
                        </div>

                        <div>

                        </div>
                    </div>

                </div>
            )
        })
        
        return (
            <div className="main">
                <div className="self_wrapper">
                    <div className="self_container">
                        {result}
                       
                    </div>
                </div>
                <div className="post_main">
                <div className="self_save">
                
                        <NavLink exact to={`${this.props.match.url}`} className="post" ><div>Posts</div></NavLink>
                    
                        <NavLink to={`${this.props.match.url}/saved`} className="post"><div>Saved   </div></NavLink>
                    
                </div>
                    
                <Route exact path={`${this.props.match.path}`} component={SelfMedia} ></Route>
                <Route   path={`${this.props.match.path}/saved`} component={Save}></Route>
                
                </div>

            </div>
        );
    }
} 