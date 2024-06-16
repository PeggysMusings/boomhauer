import { createContext, useState } from 'react';
import { ISearchResultProps } from '../types/app.types';

interface ISelectionContext {
  selection: ISearchResultProps;
  setSelection: (selection: ISearchResultProps) => void;
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
});

export const SelectionProvider = ({ children }: ISelectionProviderProps) => {
  const [selection, setSelection] = useState<ISearchResultProps>({
    id: 0,
    episode: '',
    timestamp: 0,
    quote: '',
    url: '',
  });

  return (
    <SelectionContext.Provider value={{ selection, setSelection }}>
      {children}
    </SelectionContext.Provider>
  );
};
