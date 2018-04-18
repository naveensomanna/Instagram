import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
export default class SelfNavbar extends React.Component{

    render(){
        return(
            <div>
<NavLink to="/selfmedia">self</NavLink>
            </div>
        );
    }
}
 class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            media: []
        }
    }
    componentDidMount() {
        var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=7456960170.651caca.ee76f190b40d42c2a5d2159812d1fd4b";
        axios.get(url).then(response => {
            this.setState({
                media: response.data.data
            });
        });
    }
    render() {
            var arr=[];
for(var i=0;i<this.state.media.length;i++){
arr.push(this.state.media[i].images.low_resolution.url);
}
var result=arr.map(el=>{
            return (
                <div>
<img src={el} alt=""/>
                </div>
            );
        })
        console.log(result);
        return (
            <div>
{result}
            </div>
        )
    }

}
