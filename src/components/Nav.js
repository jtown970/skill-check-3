import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

 function Nav(props) {
  if (props.location.pathname !== '/') {
console.log(props)
    return (
      <div>
        <p>{props.user_name}</p>
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
  } else {
    return null
  }
}


function mapStateToProps (state) {
  return state
}
export default withRouter(connect(mapStateToProps)(Nav))
