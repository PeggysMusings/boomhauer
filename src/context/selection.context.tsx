import { createContext, useState } from 'react';
import { ImageEntry } from '../types/app.types';
import { emptySelection } from '../utils/utils';

interface ISelectionContext {
  selection: ImageEntry;
  setSelection: (selection: ImageEntry) => void;
  originalUrl: string;
  setOriginalUrl: (originalUrl: string) => void;
}

interface ISelectionProviderProps {
  children: React.ReactNode;
}

export const SelectionContext = createContext<ISelectionContext>({
  selection: emptySelection,
  setSelection: () => {},
  originalUrl: '',
  setOriginalUrl: () => {},
});

export const SelectionProvider = ({ children }: ISelectionProviderProps) => {
  const [selection, setSelection] = useState<ImageEntry>(emptySelection);

  const [originalUrl, setOriginalUrl] = useState<string>('');

  return (
    <SelectionContext.Provider value={{ selection, setSelection, originalUrl, setOriginalUrl }}>
      {children}
    </SelectionContext.Provider>
  );
};
