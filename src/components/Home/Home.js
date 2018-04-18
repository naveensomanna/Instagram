import React from 'react';
import './home.css';
import SideBar from '../SideBar/SideBar.js';
import axios from 'axios';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    let requesturl = "http://demo8310883.mockable.io/feedendpoint";
    axios.get(requesturl).then(response => {
      this.setState({
        data: response.data.results
      })
    });
  }
  render() {

    var result = this.state.data.map(el => {
      var profile_path = el.profile_path;
      var backdrop_path = el.backdrop_path;

      return (
        <div className="feed_body">
          <div className="contents_wrap">
            <header className="profile_section">
              <div className="profile_img">
                <img src={profile_path} alt="" />
              </div>
              <div className="profile_name"><span>{el.name}</span>
              </div>
            </header>
            <div className="backdrop_img">
              <img key={el.backdrop_path} src={backdrop_path} alt="" />
            </div>
            <div className="user_block">
              <div className="lcs">
                <div>
                  <a href=""><i className="far fa-heart"></i></a>
                  <a href=""  ><i className="far fa-comment"></i></a>
                </div>
                <div>
                  <i className="far fa-bookmark"></i>
                </div>
              </div>
              <section className="total_likes">
                <div className="likes_box">
                  <span>{el.likes}  likes</span>
                </div>
              </section>
              <div className="comments">
                <ul>
                  <li><a href="" className="name">{el.comment_details[0].name}</a><span><span>{el.comment_details[0].text}</span><a href="" className="more">more</a></span></li>
                  <li><a href="" className="loadmore">{el.comment_details[1].loadmore}</a></li>
                  <li><a href="" className="name">{el.comment_details[2].name}</a><span>{el.comment_details[2].text}</span></li>
                  <li><a href="" className="name">{el.comment_details[3].name}</a><span>{el.comment_details[3].text}</span></li>
                  <li><a href="" className="name">{el.comment_details[4].name}</a><span>{el.comment_details[4].text}</span></li>
                  <li><a href="" className="name">{el.comment_details[5].name}</a><span>{el.comment_details[5].text}</span></li>

                  <li><a href="" className="name">{el.comment_details[6].hourago}</a></li>
<section id="sec_text">
  <textarea placeholder="Add a comment ..." id="text_area"></textarea>
</section>
                </ul>
              </div>

              <div>

              </div>
            </div>
          </div>
        </div>
      )
    });


    return (
      <div className="app_body">

        <div className="main_container">
          <div>{result}</div>

          <div className="side_menu">
            <SideBar />
          </div>
        </div>

      </div>
    );
  }
}