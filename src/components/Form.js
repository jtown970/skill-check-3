import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      content: ''
    }
    this.submitPost = this.submitPost.bind(this)
  }

  submitPost(){
    const {title, img, content} = this.state
    axios.post(`api/posts/user`, {title: title, img: img,content: content})
    .then(res => {
      this.props.history.push('/dashboard')
    })
  }

  render() {
    return (
      <div>
        <h2>New Post</h2>
        <div>
          <h3>title</h3>
          <input value={this.props.title} onChange={e => this.setState({title: e.target.value})}/>
          <textarea value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
          <button onClick={() => this.submitPost()} className='btn send-post-btn'>Post</button>
        </div>
        the form
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userId: state.userId
  }
}
export default connect(mapStateToProps)(Form)
