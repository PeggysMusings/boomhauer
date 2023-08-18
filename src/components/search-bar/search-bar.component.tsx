import { useContext } from 'react';
import boom from '../../assets/boom.jpg';
import { SearchContext } from '../../context/search.context';
import { SelectionContext } from '../../context/selection.context';
import { ISearchResultProps } from '../../types/app.types';
import { useNavigate } from "react-router-dom";

import SearchBox from "../search-box/search-box.components";

import { SearchBarContainer, BoomContainer, RandomButtonContainer } from "./search-bar.styles";


const SearchBar = () => {        
    const { results, setQuery, setResults } = useContext(SearchContext);
    const { setSelection } = useContext(SelectionContext);

    const navigate = useNavigate();

    function onBoomClick() {
        navigate(`/`, { replace: true });
        setQuery('');

        setResults([]);
        const searchBox = document.getElementById('search-box-koth') as HTMLInputElement;
        if(searchBox) {
            searchBox.value = '';
        };
    };

    function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setQuery(event.target.value);

        const filteredResults = results.filter((result: ISearchResultProps) => {
            return result.quote.toLowerCase().includes(event.target.value.toLowerCase());
        });

        setResults(filteredResults);
      };

    // TODO: refactor to use all data, not search data
    function onRandomClick() {
        const randomIndex = Math.floor(Math.random() * results.length);
        const randomResult = results[randomIndex];
        setSelection(randomResult);
        navigate(`/${randomResult.id}`, { replace: true });
    };

   
    return(
        <SearchBarContainer id={"search-bar-container"}>
            <BoomContainer onClick={ onBoomClick } src={ boom } />
            <SearchBox 
                id='koth'
                placeHolder="Talk 'bout dang 'ol search for a quote man, like dang ol' 'that's my purse,' man..."
                onChangeHandler={ onSearchChange }
            />
            <RandomButtonContainer onClick={ onRandomClick }>Random</RandomButtonContainer>
        </SearchBarContainer>
    );
};

export default SearchBar;