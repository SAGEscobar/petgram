import React from 'react';
import { PhotoCard } from '../PhotoCard/index';
import { withPhotos } from '../../HOC/withPhotos';

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <React.Fragment>
      {photos.map(photo => <PhotoCard key={photo.id} id={photo.id} {...photo} />)}
    </React.Fragment>
  )
}

