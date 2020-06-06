import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      author_pic: '',
      title: '',
      img: '',
      content: '',
      loading: true
    }
  }
  componentDidMount() {
    axios.get(`/api/post/${this.props.match.params.id}`)
      .then(res => {
        setTimeout(_ => this.setState({ ...res.data, loading: false }), 500)
      })
  }
  render() {
    
    return (

          <div>
            <div>
              <h2 className='title'>{this.state.title}</h2>
                <p>by {this.state.author}</p>
                <img src={this.state.profile_img} alt='author' />
              </div>
              <p>{this.state.content}</p>
            <div className='oops_box'>
              <h2 className='title'>Oops!</h2>
              <p>Looks like this post doesn't exist anymore</p>
            </div>
            <div className='load_box'>
              <div className='load_background'></div>
              <div className='load'></div>
            </div>
          </div>
    )
  }
}

export default Post;
