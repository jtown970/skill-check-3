import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


export default class Dash extends Component {
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
  }

  getPosts(){
    let {search, myPost} = this.state;
    axios.get(`/api/posts/${this.state.userId}`)
    .then(res => {
      setTimeout(_ => this.setState({
        posts:res.data,
        loading: false
      }),200)
    })
  }



  render() {
    let posts = this.state.posts.map((elem) => {
      return <Link to={`api/posts/${elem.post_id}`} key={elem.post_id}>
        <h2>{elem.title}</h2>
        <p>{elem.author_username}</p>
        <img src={elem.profile_pic} alt='author'/>
      </Link>
    })
    return (
      <div>
        <input/>
        <button>Seach</button>
        <button>Reset</button>
        <input type="checkbox"/>
        the dash
      </div>
    )
  }
}
