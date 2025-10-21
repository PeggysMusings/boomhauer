import { createContext, useEffect, useState } from 'react';
import { ImageEntry } from '../types/app.types';
import { fetchSearchResults } from '../api/api';

interface ISearchContext {
  query: string;
  results: ImageEntry[];
  setQuery: (query: string) => void;
  setResults: (results: ImageEntry[]) => void;
}

interface ISearchProviderProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<ISearchContext>({
  query: '',
  results: [],
  setQuery: () => { },
  setResults: () => { },
});

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ImageEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const debouncedQuery: string = useDebouncedValue(query, 300);

  useEffect(() => {
    (async () => {
      setLoading(true);

      if (debouncedQuery.length >= 2) {
        console.log("Searching for:", debouncedQuery);
        const data: ImageEntry[] = await fetchSearchResults(debouncedQuery);

        if (!data) {
          setResults([]);
          return;
        }

        setResults(data);
      }

      setLoading(false);
    })();
  }, [debouncedQuery]);

  if (loading) {
    console.log("querying based on quote property...")
  }
  if (error) {
    console.error(error);
  }

  return (
    <SearchContext.Provider value={{ query, results, setQuery, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}