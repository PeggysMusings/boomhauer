import SearchCard from "../search-card/search-card.component";

import { SearchListContainer } from "./search-list.styles";
import { ImageEntry } from "../../types/app.types"

interface ISearchListProps {
    results: ImageEntry[];
}

const SearchList = ({ results }: ISearchListProps) => (
    <SearchListContainer id={"search-results-container"}>
        {results.map(result => {
            return (<SearchCard key={result.id} result={result} />);
        })
        }
    </SearchListContainer>
);

export default SearchList;
