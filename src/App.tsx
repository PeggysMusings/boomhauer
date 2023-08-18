import { useRoutes } from 'react-router-dom';

import Home from './routes/home/home.component';

import SearchBar from './components/search-bar/search-bar.component';
import { useContext } from 'react';
import { SearchContext } from './context/search.context';
import { MemeGen } from './routes/meme-gen/meme-gen.component';

function App() {
  const { results } = useContext(SearchContext);

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <>
          <SearchBar />
          <Home results={results}/>
        </>
      ),
    },
    {
      path: '/:id',
      element: (
        <>
          <SearchBar />
          <MemeGen />
        </>
      ),
    },
  ]);

  return routes;
}

export default App;
