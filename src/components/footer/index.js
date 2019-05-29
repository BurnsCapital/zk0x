import React from 'react';
import  Logo  from './logo.js';
import  Menu  from './menu.js';
import './footer.css'; 

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return <>
    <Logo />
    <Menu />
    </>;
  }
}

export default Footer;
