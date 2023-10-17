import { useQuery } from 'react-query';
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { getMovieGenres, getMovieGenresQueryKey } from '../../services/tmdb';

export const Root = () => {
     
    const query = useQuery({
    queryFn: getMovieGenres,
    queryKey: getMovieGenresQueryKey()
  });

    console.log(query.data);
    
    return (
        <>
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
            </p>
            </>
    )
}