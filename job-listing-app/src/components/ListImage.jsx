import React, { Component } from 'react'
//import SVG from 'react-inlinesvg';

class ListImage extends Component {
  render(){
    return  <img alt="Logo" src={`.${this.props.listImage}`}></img>

  }
    
}

export default ListImage;