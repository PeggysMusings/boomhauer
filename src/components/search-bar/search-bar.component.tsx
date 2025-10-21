import { useContext } from 'react';
import boom from '../../assets/boom.jpg';
import { SearchContext } from '../../context/search.context';
import { ImageEntry } from '../../types/app.types';
import { useNavigate } from "react-router-dom";

import SearchBox from "../search-box/search-box.component";
import RandomButton from "../random-button/random-button.component";

import { SearchBarContainer, BoomContainer } from "./search-bar.styles";
import { SelectionContext } from '../../context/selection.context';

import { emptySelection } from '../../utils/utils';

const SearchBar = () => {
    const { results, setQuery, setResults } = useContext(SearchContext);
    const { setSelection } = useContext(SelectionContext);

    const navigate = useNavigate();

    const onBoomClick = () => {
        navigate(`/`, { replace: true });
        setQuery('');

        setResults([]);
        const searchBox = document.getElementById('search-box-koth') as HTMLInputElement;
        if (searchBox) {
            searchBox.value = '';
        };
    };

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        navigate(`/`, { replace: true });
        setSelection(emptySelection)
        setResults([])
        setQuery(event.target.value);

        const filteredResults = results.filter((result: ImageEntry) => {
            return result.quote.toLowerCase().includes(event.target.value.toLowerCase());
        });

        setResults(filteredResults);
    };

    return (
        <SearchBarContainer id={"search-bar-container"}>
            <BoomContainer onClick={onBoomClick} src={boom} />
            <SearchBox
                id='koth'
                placeHolder="Talk 'bout dang 'ol search for a quote man, like dang ol' 'that's my purse,' man..."
                onChangeHandler={onSearchChange}
            />
            <RandomButton />
        </SearchBarContainer>
    );
};

export default SearchBar;