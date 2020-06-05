import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

 function Nav(props) {
console.log(props)
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


function mapStateToProps (state) {
  return state
}
export default withRouter(connect(mapStateToProps)(Nav))
