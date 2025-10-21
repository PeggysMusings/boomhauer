import { useContext, useState } from 'react';
import { SelectionContext } from '../../context/selection.context';
import { useNavigate } from "react-router-dom";
import { RandomButtonContainer } from "./random-button.styles";
import { fetchRandomResult } from '../../api/api';

const RandomButton = () => {
    const { setSelection, setOriginalUrl } = useContext(SelectionContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const onRandomClick = async () => {
        setLoading(true);
        const result = await fetchRandomResult();
        navigate(`/${result.id}`);
        setSelection(result);
        setOriginalUrl(result.url);
        setLoading(false);
    };

    return (
        <RandomButtonContainer onClick={onRandomClick} disabled={loading}>
            {loading ? 'Loading...' : 'Random'}
        </RandomButtonContainer>
    );
};

export default RandomButton;