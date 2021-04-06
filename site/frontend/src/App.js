import React, { Component } from 'react';
import logo from './assets/logo.svg';
import video from './assets/landscape_drone.mp4'
import './App.css';

class App extends Component {
  render() {
    return (
    <body>
    <div id="hero" >
      <NavBar />
      <video autoPlay={true} muted loop className="background_video">
        <source src= {video} type="video/mp4"/>
      </video>
  </div>

  </body>
    );
  }
}

function Button(props){
  return(
      <a href={props.href}>
        <div className="buttons" id="next_sale" >
            {props.text}
        </div>
      </a>
  )
}

class NavBar extends React.Component {
    navButton(link, text) {
        return(
            <Button
            text = {text}
            href = {link}
            />

        );
    }
  render(){
    return(
    <span id="nav">
      <div id="img-holder">
        <img id="logo" src= {logo} alt="The Country Craftsman" />
      </div>
      <div id="right-split">
        {this.navButton("shop.thecountrycraftsman.net","Store")}
        {this.navButton("mailto:me@am.xyz?", "Contact")}
      </div>
    </span>

    );
  }

}


export default App;
