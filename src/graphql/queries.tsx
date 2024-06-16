import { gql } from "@apollo/client";

export const IMG_BY_QUOTE_QUERY = gql`
    query ImgByQuoteQuery {
        imgByQuote {
            id
            episode
            timestamp
            quote
            url
        }
    }
`;

export const IMG_BY_ID_QUERY = gql`
    query ImgByIdQuery {
        imgById {
            id
            episode
            timestamp
            quote
            url
        }
    }
`;

export const RANDOM_SELECTION_QUERY = gql`
    query RandomSelectionQuery {
        randomSelection {
            id
            episode
            timestamp
            quote
            url
        }
    }
`;