import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useCallback,
  useEffect,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useGameQuery, useGamesQuery } from "./services/gamesApi";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useGamesQuery();
  return (
    <div>
      <h1>React Redux toolkit RTK</h1>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>isFetching...</h2>}
      {error && <h2>Something wrong...</h2>}
      {isSuccess && (
        <div>
          {data.map((game: any) => (
            <div className="data">
              <span>{game.name}</span>
              <GameDetail id={game.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const GameDetail = ({ id }: { id: string }) => {
  const { data } = useGameQuery(id);
  return <div>{JSON.stringify(data, undefined, 2)}</div>;
};

export default App;
