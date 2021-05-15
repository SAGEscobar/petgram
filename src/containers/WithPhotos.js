import React from 'react'
import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

const GET_LIST_OF_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;

export const WithPhotos = ({children, categoryId}) => (
  <Query query={GET_LIST_OF_PHOTOS} fetchPolicy='network-only' variables={{ categoryId }}>
    {children}
  </Query>
)