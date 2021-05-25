import React,{ Component } from "react"
import { Link } from "react-router-dom"

class Menu extends Component{
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/alta">Registro</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu
