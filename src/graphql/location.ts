import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_LOCATION = gql`
  query GetLocation($locationId: ID!) {
    location(id: $locationId) {
      id
      name
      description
      photo
    }
  }
`;
