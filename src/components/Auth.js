import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../redux/reducer'
import {loginUser} from '../redux/reducer'


class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  register = (e) => {
    const {user_name, password} = this.state
    axios.post('/auth/register', {user_name, password})
    .then( res => {
        this.props.updateUser(res.data)
        this.props.history.push('/dashboard')
    })
    .catch(err => {
        // console.log(err.response.data)
        alert(err => {alert('could not register')})
    })
}

  login = (e) => {
    const {user_name, password} = this.state
    axios.post(`/auth/login`, {user_name, password})
    .then(res => {
      this.props.updateUser(res.data)
      this.props.history.push('/dashboard')
    })
    .catch(err => { alert('could not login')})
  }


  render() {
    const {user_name, password} = this.state
    return (
      <div>
        <input
            type="text" 
            placeholder="user_name..."
            name="user_name"
            value={user_name}
            onChange={e => this.changeHandler(e)}/>
        <input
            type="password"
            placeholder="password..."
            name="password"
            value={password}
            onChange={e => this.changeHandler(e)}/>

        <button type="submit" value="Login" onClick={this.login}>Login</button>
        <button type="submit" value="Register"  onClick={this.register}>register</button>
      </div>
    )
  }
}

export default connect(null, {updateUser})(Auth)