import { createContext, useEffect, useState } from 'react';
import { ISearchResultProps, SelectedImgProps } from '../types/app.types';
import { resolvers } from '../utils/resolvers';

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

const GET_IMAGES = gql`
  query GetImages {
    selectedImg {
      id
    }
  }
`

export const SearchContext = createContext<ISearchContext>({
  query: '',
  results: [],
  setQuery: () => {},
  setResults: () => {},
});

export const SearchProvider = ({ children }: ISearchProviderProps) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<ISearchResultProps[]>([]);

    // useEffect(() => {       
    //     if (!query) {
    //       setResults([]);
    //       return;
    //     }
    //     const filteredResults = testData.filter((result) =>
    //         result.quote.toLowerCase().includes(query.toLowerCase())
    //     );
    //     setResults(filteredResults);
    //   }, [query]);

    // useEffect(() => {       
    //     if (!query) {
    //       setResults([]);
    //       return;
    //     }
        
    //     console.log(results);
    //   }, [query]);

    // const data = useQuery(GET_IMAGES);

    // console.log(results);
    // console.log(data);
    
    return (
      <SearchContext.Provider value={{ query, results, setQuery, setResults }}>
        {children}
      </SearchContext.Provider>
    );
  };