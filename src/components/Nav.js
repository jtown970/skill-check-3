import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

 function Nav(props) {
  if (props.location.pathname !== '/') {
console.log(props)
    return (
      <div className="navigation">
        <section className="nav-list">
          <div className="user-namea">
            <p className="user-name">{props.user_name}</p>
          </div>
          <div className="nav-top-btn">
            <button className="dash-btn">
              <Link className="dash-btn" to="/dash">Dashboard</Link>
            </button>
            <button className="dash-btn">
              <Link className="dash-btn" to="/form">New Post</Link>
            </button>
          </div>
          <div className="logout-btn">
            <button className="dash-btn btn-logout">
              <Link className="dash-btn" to="/">Logout</Link>
            </button>
          </div>
        </section>
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
