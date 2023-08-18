const { gql } = require('@apollo/client');

export interface ISearchBarProps {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface ISearchProps {
    results: ISearchResultProps[]
};

export interface ISearchResultItemProps {
    result: ISearchResultProps;
};

export interface ISearchResultProps {
    id: number;
    episode: string;
    timestamp: number;
    quote: string; 
    url: string;
};

export interface SelectedImgProps {
    id: number;
    episode: String;
    timestamp: number;
    quote: String;
    url: String;
};

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