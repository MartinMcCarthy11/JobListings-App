import React from 'react';
import PropTypes from 'prop-types';
import * as logos from '../images';

export const ListImage = ({listImage}) => {
  // Logic in each of the next two lines should probably be split into helper functions in a util file
  console.log(listImage);
  const imageName = listImage.split('/')[2].split('.')[0];
  const imageKey = imageName.charAt(0).toUpperCase() + imageName.slice(1);
  // Weird syntax here is to use the string value contained in imageKey as the key, rather than literally 'imageKey'
  const Logo = logos[`${imageKey}`];
  return(
    <div>
    {Logo ? (<Logo />) : null}
    </div>
  )
}

ListImage.propTypes = {
  listImage: PropTypes.string.isRequired
}