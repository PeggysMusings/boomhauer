import SearchList from '../../components/search-list/search-list.component';

import { HomeContainer } from './home.styles';
import { ImageEntry } from '../../types/app.types';

interface IHomeProps {
    results: ImageEntry[];
}

const Home = ({ results }: IHomeProps) => (
    <HomeContainer id={"main-container"}>
        <SearchList results={results} />
    </HomeContainer>
);

export default Home;