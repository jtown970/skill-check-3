import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


 class Dash extends Component {
  constructor(){
    super()
    this.state = {
      search: '',
      myPosts: true,
      posts: [],
      loading: true
    }
  }

  componentDidMount(){
    this.getPosts();
    console.log(this.state.posts)
  }

  getPosts(){
    let {search, myPost} = this.state;
    axios.get(`/api/posts/`, this.state.posts)
    .then(res => {
      this.setState({
        posts:res.data,
        loading: false
      })
    })
  }



  render() {
    let posts = this.state.posts.map((elem) => {
      return <Link to={`api/posts/${elem.post_id}`} key={elem.post_id}>
        <div className="each-post">
        <h2 className="post-content">{elem.title}</h2>
        <p className="post-content">{elem.user_name}</p>
        <p className="post-content">{elem.content} </p>
        <img src={elem.profile_pic} alt='profile-pic'/>
        </div>
      </Link>
    })
    return (
      <div>
        <input/>
        <button>Seach</button>
        <button>Reset</button>
        <input type="checkbox"/>

        <div>
          <h3 className="posts">{posts} </h3>
        </div>

        the dash
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    userId: state.userId
  }
}

export default connect(mapStateToProps)(Dash)
