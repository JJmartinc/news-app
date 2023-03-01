import React, { Component } from "react";
import { userContext } from "../../../context/usercontext";
import Button from 'react-bootstrap/Button';
import '../Home/Home.css'

class Home extends Component {
  static contextType = userContext;

  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.state = {
      username: "",
    };
  }
//? Coge la constante, ejecuta la funcion login, y setea el nombre del usuario.
  sendName = () => {
    const { login } = this.context;
    login(this.state.username);
    alert("¡Welcome " + this.state.username + "!");
    this.username.current.value = "";
    this.setState({ username: "" });
  };
//? Setea el estado del nombre de usuario
  handleChange = () => {
    const username = this.username.current.value;
    this.setState({ username });
  };

  render() {
    const { user } = this.context;

    return (
      <div className="home">
        <h1 className="title">Welcome enjoy the NewsApp</h1>
        {!user && (<div>
          <input className="inputHome" type="text" ref={this.username} onChange={this.handleChange} placeholder="Please write your username" />
          {this.state.username ? (<Button variant="btn btn-primary" onClick={this.sendName}>Login</Button>) : ("")}</div>
        )}
      </div>
    );
  }
}

export default Home;