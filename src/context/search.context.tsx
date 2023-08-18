import { createContext, useEffect, useState } from 'react';
import { ISearchResultProps, SelectedImgProps } from '../types/app.types';
import { resolvers } from '../utils/resolvers';

import sample_img from '../assets/sample_img.jpg';
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

    useEffect(() => {       
        if (!query) {
          setResults([]);
          return;
        }
        
        console.log(results);
      }, [query]);

    const data = useQuery(GET_IMAGES);

    console.log(results);
    console.log(data);
    
    return (
      <SearchContext.Provider value={{ query, results, setQuery, setResults }}>
        {children}
      </SearchContext.Provider>
    );
  };


const testData = [
    {
        "id":1,
        "episode":"S1E1",
        "timestamp":297339,
        "quote": "Test quote 123",
        "url": sample_img
    },
    {
        "id":2,
        "episode":"S1E2",
        "timestamp":1250166,
        "quote": "Test quote 321",
        "url": sample_img
    },
    {
        "id":3,
        "episode":"S1E3",
        "timestamp":1250136,
        "quote": "Test quote 456",
        "url": sample_img
    },
    {
        "id":4,
        "episode":"S1E2",
        "timestamp":125776,
        "quote": "Test quote 654",
        "url": sample_img
    },
    {
        "id":5,
        "episode":"S1E3",
        "timestamp":125236,
        "quote": "Test quote 789",
        "url": sample_img
    },
    {
        "id":6,
        "episode":"S1E2",
        "timestamp":1230166,
        "quote": "Test quote 987",
        "url": sample_img
    },
    {
        "id":7,
        "episode":"S1E3",
        "timestamp":114166,
        "quote": "Test quote 10",
        "url": sample_img
    },
    {
        "id":8,
        "episode":"S1E3",
        "timestamp":550166,
        "quote": "Test quote 20",
        "url": sample_img
    },
    {
        "id":9,
        "episode":"S1E3",
        "timestamp":70166,
        "quote": "Test quote 30",
        "url": sample_img
    },
    {
        "id":10,
        "episode":"S1E3",
        "timestamp":6650166,
        "quote": "Test quote 40",
        "url": sample_img
    },
    {
        "id":11,
        "episode":"S1E3",
        "timestamp":1254666,
        "quote": "Test quote 50",
        "url": sample_img
    },
    {
        "id":12,
        "episode":"S1E3",
        "timestamp":1242166,
        "quote": "Test quote 60",
        "url": sample_img
    }
];