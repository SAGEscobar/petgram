import { graphql } from '@apollo/client/react/hoc';
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

export const withPhotos = graphql(GET_LIST_OF_PHOTOS);