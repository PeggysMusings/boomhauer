import { ChangeEvent } from 'react';

import { SearchBoxContainer } from './search-box.styles';
import './search-box.styles';

interface ISearchBoxProps {
    id: string;
    placeHolder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ id, placeHolder, onChangeHandler }: ISearchBoxProps) => (
    <SearchBoxContainer
        id={`search-box-${id}`}    
        type='search'
        placeholder={placeHolder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;