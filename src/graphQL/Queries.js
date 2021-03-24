import { gql } from "@apollo/client";

export const LOAD_MOVIES = gql`
  query {
    movies {
      id
      name
      actor {
        id
        name
        age
      }
    }
  }
`;

// import { gql } from "@apollo/client";

// // const client = ...

// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
