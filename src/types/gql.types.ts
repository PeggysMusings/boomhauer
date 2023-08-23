const { gql } = require('@apollo/client');

export const gqlTypes = gql`    
    type SelectedImg {
        id: Int!
        episode: String!
        timestamp: Int!
        quote: String!
        url: String!
    }

    type Query {
        selectedImg: [SelectedImg!]!
    }
`