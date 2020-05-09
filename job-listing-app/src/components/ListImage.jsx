import React, { Component } from 'react'
import { ReactComponent as Logo } from '../images/photosnap.svg';

class ListImage extends Component {
  render(){
    return   <Logo/>
    
    //<SVG src={`.${this.props.listImage}`}/>

  }
    
}

export default ListImage;