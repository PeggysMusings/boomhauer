import { SearchCardContainer } from "./search-card.styles";
import { ISearchResultItemProps } from "../../types/app.types";
import { useContext } from "react";
import { SelectionContext } from "../../context/selection.context";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ result }: ISearchResultItemProps) => {
    const { id, url } = result;

    const { setSelection, setOriginalUrl } = useContext(SelectionContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setSelection(result);
        setOriginalUrl(result.url);
        navigate(`${result.id}`);
    };

    return(
        <SearchCardContainer id={"search-card-container"} src={url} alt={`${id}`} onClick={handleClick} />
    );
};

export default SearchCard;
