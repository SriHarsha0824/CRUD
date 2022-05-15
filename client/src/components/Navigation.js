import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navbar">
        <Link to="/">
            <img src="" alt="logo"/>
        </Link>
        <Link to="/retrieve">Retrieve</Link>
        <Link to="/register">Registration</Link>
    </div>
  )
}
