import React from 'react';
import PropTypes from 'prop-types';
import * as logos from '../images';

export const ListImage = ({listImage}) => {
  // Logic in each of the next two lines should probably be split into helper functions in a util file
  const imageName = listImage.split('/')[2].split('.')[0];
  console.log(imageName);
  let imageKey = imageName.charAt(0).toUpperCase() + imageName.slice(1);
  
  if(imageKey.includes('-')){
    let arr = imageKey.split('-');
    // for (let i = 0; i < arr.length; i++) {
    //   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    //       }
    arr.map(x => x.charAt(0).toUpperCase() + x.slice(1))
    console.log(arr);
    arr = arr.filter(item => item !== "The")
    arr = arr.filter(item => item !== "Co")
    imageKey = arr.join('');
  }
  console.log(imageKey);
  // Weird syntax here is to use the string value contained in imageKey as the key, rather than literally 'imageKey'
  const Logo = logos[`${imageKey}`];
  console.log(logos);
  return(
    <div>
    {Logo ? (<Logo />) : null}
    </div>
  )
}

ListImage.propTypes = {
  listImage: PropTypes.string.isRequired
}