import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      songName:{}
};
const songNameSlice = createSlice({
  name: "songDetails",
  initialState,
  reducers: {
      addSongDetails(state,action){
            state.songName=action.payload

      }
  },
});

export const { addSongDetails } = songNameSlice.actions;
export default songNameSlice.reducer;
export const songData = (state) => state.songDetails.songName;
