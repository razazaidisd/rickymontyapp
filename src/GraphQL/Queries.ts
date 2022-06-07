import { gql } from '@apollo/client';

export const LOAD_CHARACTERS = gql`
  query {
    characters(page: 3) {
      info {
        count,
        pages,
        prev,
        next,
      }
      results {
        name,
        image,
        species,
        status,
        type,
        gender,
      }
    }
  }
`;