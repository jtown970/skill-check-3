import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <button>
          <Link to="/dash">Dashboard</Link>
        </button>
        <button>
          <Link to="/new">New Post</Link>
        </button>
        <button>
          <Link to="/">Logout</Link>
        </button>
      </div>
    )
  }
}
