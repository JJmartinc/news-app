import React, { Component } from "react";
import { userContext } from "../../../context/usercontext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import '../Nav/NavBar.css';

class NavBar extends Component {
  render() {
    return (<Nav className="nav-bar">
      <userContext.Consumer>
        {({ logout, user }) => user ? <span>Hello, {user} <Button variant="btn btn-primary" onClick={logout}>Logout</Button></span> : ""}
      </userContext.Consumer>
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/news">News</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/form">Add an article</Link>
      </Nav.Item>
      <Link to="/*"></Link>
    </Nav>);
  }
}

export default NavBar;