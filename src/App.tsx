import { useCallback, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GamePage from "./features/games/GamePage";
import { getGames } from "./features/games/gameSlice";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    getGames();
    initApp();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
