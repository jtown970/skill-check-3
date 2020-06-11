import React, { Component } from 'react'
import axios from 'axios';
import {connect } from 'react-redux';

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
    axios.post(`api/posts/${this.props.user_id}`, this.state)
    .then(res => {
      this.props.history.push('/dashboard')
    })

  }

  render() {
    return (
      <div>
        <h2 className='new-post-header'>New Post</h2>
        <div className='new-post-form'>
          <h3>{this.state.user_name}</h3>
          <input placeholder="Title..." className="input-text" value={this.props.title} onChange={e => this.setState({title: e.target.value})}/>
          <textarea className="post-box" placeholder="enter post..." value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
          <button onClick={() => this.submitPost()} className='btn send-post-btn'>Post</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {user_id: state.user_id}
    
  
}
export default  connect(mapStateToProps)(Form)
