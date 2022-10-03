import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Game } from "../../interfaces/Games";

interface GameState {
  games: Game[] | null;
  loading: boolean;
  singleGame: Game | null;
  errors: any;
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
  errors: null,
};

// actions are processes that get data from backend
export const getGames = createAsyncThunk<Game[]>(
  "games/",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/games");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createGame = createAsyncThunk<Object, Game>(
  "games/",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:4000/games", data);
      thunkAPI.dispatch(getGames());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducers -> reduce to a specific state -> changes state
export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.loading = false;
    });
    builder.addCase(getGames.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default gameSlice.reducer;
export const { setGames } = gameSlice.actions;
