import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <h1>welcome to the nav bar</h1>
        <Link to='/'><button>Home</button> </Link> <br/>
        <Link to='/api/users'><button>Users</button></Link>
        {/* <Link></Link> */}
      </div>
    )
  }
}
