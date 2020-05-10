import React, { Component } from 'react'
import * as logos from '../images';

class ListImage extends Component {
  render(){
    // Logic in each of the next two lines should probably be split into helper functions in a util file
    const imageName = this.props.listImage.split('/')[2].split('.')[0];
    const imageKey = imageName.charAt(0).toUpperCase() + imageName.slice(1);
    // Weird syntax here is to use the string value contained in imageKey as the key, rather than literally 'imageKey'
    const Logo = logos[`${imageKey}`];
    return(
      <div>
      {Logo ? (<Logo />) : null}
      </div>
    )
  }
    
}

export default ListImage;