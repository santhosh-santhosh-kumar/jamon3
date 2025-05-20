import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      isPlaying:false
};
const songPlaySlice = createSlice({
  name: "songPlay",
  initialState,
  reducers: {
      addSongPlay(state,action){
            state.isPlaying=action.payload

      }
  },
});

export const { addSongPlay } = songPlaySlice.actions;
export default songPlaySlice.reducer;
export const isSongPlay = (state) => state.songPlay.isPlaying;
