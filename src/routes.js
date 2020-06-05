import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dash from './components/Dash'
import Form from './components/Form'
import Post from './components/Post'

export default (
  <Switch>
    <Route exact path="/" component={Auth}/>
    <Route path="/dash" component={Dash}/>
    <Route path="/form" component={Form}/>
    <Route path="/new" component={Post}/>
  </Switch>
)