import SearchList from '../../components/search-list/search-list.component';

import { HomeContainer } from './home.styles';
import { ISearchProps } from '../../types/app.types';

const Home = ({ results }: ISearchProps) => 
    <HomeContainer id={"main-container"}>
        <SearchList results={ results } />
    </HomeContainer>
;

export default Home;