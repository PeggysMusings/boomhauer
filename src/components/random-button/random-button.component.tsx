import { useContext, useEffect, useState } from 'react';
import { SelectionContext } from '../../context/selection.context';
import { useNavigate } from "react-router-dom";
import { RandomButtonContainer } from "./random-button.styles";
import { gql, useLazyQuery } from '@apollo/client';

import { RANDOM_SELECTION_QUERY } from '../../graphql/queries';

const RandomButton = () => {        
    const { setOriginalUrl, setSelection } = useContext(SelectionContext);
    const navigate = useNavigate();
    const [randomId, setRandomId] = useState(null);

    // Use useLazyQuery to fetch randomSelection manually
    const [fetchRandomSelection, { loading, error, data }] = useLazyQuery(
        gql`
            query RandomSelectionQuery {
                randomSelection {
                    id
                    episode
                    timestamp
                    quote
                    url
                }
            }
        `
    );

    useEffect(() => {
        if (data && data.randomSelection) {
            setSelection(data.randomSelection);
            setOriginalUrl(data.randomSelection.url);
            setRandomId(data.randomSelection.id);
        }
    }, [data, setSelection]);

    const onRandomClick = () => {
        fetchRandomSelection();
        navigate(`/${randomId}`); 
    };

    return (
        <RandomButtonContainer onClick={onRandomClick} disabled={loading}>
            {loading ? 'Loading...' : 'Random'}
        </RandomButtonContainer>
    );
};

export default RandomButton;