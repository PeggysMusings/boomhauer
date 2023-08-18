import SearchCard from "../search-card/search-card.component";

import { SearchListContainer } from "./search-list.styles";
import { ISearchProps } from "../../types/app.types"

const SearchList = ({ results }: ISearchProps) => (
    <SearchListContainer id={"search-results-container"}>
        {results.map(result => {
            return(<SearchCard key={ result.id } result={ result } />);
        })
        }
    </SearchListContainer>
);

export default SearchList;
