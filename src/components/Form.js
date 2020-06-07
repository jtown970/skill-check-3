import React, { Component } from 'react'
import axios from 'axios';
import {withRouter, connect } from 'react-redux';

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

    if(this.props.users_id){
    axios.post(`api/posts/${this.props.userId}`, this.state)
    .then(res => {
      this.props.history.push('/dashboard')
    })
  }else {
    alert('You must log in to create posts')
  }
  }

  render() {
    return (
      <div>
        <h2 className='new-post-header'>New Post</h2>
        <div className='new-post-form'>
          <h3>{this.state.user_name}</h3>
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
    userId: state.userId,
    state
    
  }
}
export default  connect(mapStateToProps)(Form)
