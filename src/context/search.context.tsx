import { createContext, useEffect, useState } from 'react';
import { ISearchResultProps, SelectedImgProps } from '../types/app.types';
import { resolvers } from '../utils/apollo-init';

import { gql, useQuery } from '@apollo/client';

interface ISearchContext {
  query: string;
  results: ISearchResultProps[];
  setQuery: (query: string) => void;
  setResults: (results: ISearchResultProps[]) => void;
}

interface ISearchProviderProps {
    children: React.ReactNode;
  }

export const SearchContext = createContext<ISearchContext>({
  query: '',
  results: [],
  setQuery: () => {},
  setResults: () => {},
});

export const SearchProvider = ({ children }: ISearchProviderProps) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<ISearchResultProps[]>([]);

    const { loading, error, data } = useQuery(
      gql`
        query QuoteQuery($query: String!) {
          imgByQuote(query: $query) {
            id
            episode
            timestamp
            quote
            url
          }
        }
      `,
      {variables: {query: query}}
    );
  
    if (loading) {
      console.log("querying...")
    }
    if (error) {
      console.error(error);
    }

    useEffect(() => {       
      if (!data || !data.imgByQuote) {
        setResults([]);
        return;
      }
      console.log(data.imgByQuote);
      setResults(data.imgByQuote);
    }, [data]);

    return (
      <SearchContext.Provider value={{ query, results, setQuery, setResults }}>
        {children}
      </SearchContext.Provider>
    );
  };