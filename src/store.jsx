import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./Slices/NavbarSlice";
import songsListReducer from "./Slices/SongsListSlice"
import songNameReducer from "./Slices/TrackNameSlice"
import songPlayReducer from "./Slices/TrackPlaySlice"

export const store = configureStore({
  reducer: {
      navbar: navbarReducer,
      trackList:songsListReducer,
      songDetails:songNameReducer,
      songPlay:songPlayReducer
  },
});

export default store;
