import React from 'react';
import { WithPhotos } from './WithPhotos';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCard/index';

const renderProp = ({data = {}, loading, error}) => {
  if (loading) return <h3>Loading</h3>
  if (error) return <h3>Error...</h3>
  return <ListOfPhotoCardsComponent {...data} />
}

export const ListOfPhotoCards = ({categoryId}) => (
  <WithPhotos categoryId={categoryId}>
    {renderProp}
  </WithPhotos>
)