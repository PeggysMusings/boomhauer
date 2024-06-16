import { createContext, useState } from 'react';
import { ISearchResultProps } from '../types/app.types';

interface ISelectionContext {
  selection: ISearchResultProps;
  setSelection: (selection: ISearchResultProps) => void;
  originalUrl: string;
  setOriginalUrl: (originalUrl: string) => void;
}

interface ISelectionProviderProps {
  children: React.ReactNode;
}

export const SelectionContext = createContext<ISelectionContext>({
  selection: {
    id: 0,
    episode: '',
    timestamp: 0,
    quote: '',
    url: '',
  },
  setSelection: () => {},
  originalUrl: '',
  setOriginalUrl: () => {},
});

export const SelectionProvider = ({ children }: ISelectionProviderProps) => {
  const [selection, setSelection] = useState<ISearchResultProps>({
    id: 0,
    episode: '',
    timestamp: 0,
    quote: '',
    url: '',
  });

  const [originalUrl, setOriginalUrl] = useState<string>('');

  return (
    <SelectionContext.Provider value={{ selection, setSelection, originalUrl, setOriginalUrl }}>
      {children}
    </SelectionContext.Provider>
  );
};
