import React, { Component } from "react";
import '../Footer/Footer.css'

class Footer extends Component {
  render() {
    return <div className="justify-content-center">This website has been created by: <a className="footerText" href="https://github.com/JJMartinc">Jorge Martin</a></div>;
  }
}

export default Footer;