import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!) {
  photo(id: $id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if(loading) return <h1> Loading... </h1>
  if(error) return <h1> Error </h1>
  const { photo = {} } = data;
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)