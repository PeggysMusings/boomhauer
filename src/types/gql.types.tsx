const { gql } = require('@apollo/client');

export const gqlTypes = gql`
    type Query {
        selectedImg: [SelectedImg!]!
    }
    
    type SelectedImg {
        id: Int!
        episode: String!
        timestamp: Int!
        quote: String!
        url: String!
    }
`