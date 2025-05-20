import { createSlice } from "@reduxjs/toolkit";
import track01 from "../assets/songs/01.mp3"
import track02 from "../assets/songs/02.mp3"
import track03 from "../assets/songs/03.mp3"
import track04 from "../assets/songs/04.mp3"
import track05 from "../assets/songs/05.mp3"
import track06 from "../assets/songs/06.mp3"
import track07 from "../assets/songs/07.mp3"
import track08 from "../assets/songs/08.mp3"
import track09 from "../assets/songs/09.mp3"
import track10 from "../assets/songs/10.mp3"
import track11 from "../assets/songs/11.mp3"
import track12 from "../assets/songs/12.mp3"
import track13 from "../assets/songs/13.mp3"
import track14 from "../assets/songs/14.mp3"

const initialState = {
  songs: [
    { id: 1, track: track01, trackName:"Track01-Swiss Jungle Legends"  },
    { id: 2, track: track02, trackName:"Track02-Swiss Jungle Legends"  },
    { id: 3, track: track03, trackName:"Track03-Swiss Jungle Legends"  },
    { id: 4, track: track04, trackName:"Track04-Swiss Jungle Legends"  },
    { id: 5, track: track05, trackName:"Track05-Swiss Jungle Legends"  },
    { id: 6, track: track06, trackName:"Track06-Swiss Jungle Legends"  },
    { id: 7, track: track07, trackName:"Track07-Swiss Jungle Legends"  },
    { id: 8, track: track08, trackName:"Track08-Swiss Jungle Legends"  },
    { id: 9, track: track09, trackName:"Track09-Swiss Jungle Legends"  },
    { id: 10, track:track10, trackName:"Track10-Swiss Jungle Legends"  },
    { id: 11, track:track11, trackName:"Track11-Swiss Jungle Legends"  },
    { id: 12, track:track12, trackName:"Track12-Swiss Jungle Legends"  },
    { id: 13, track:track13, trackName:"Track13-Swiss Jungle Legends"  },
    { id: 14, track:track14, trackName:"Track14-Swiss Jungle Legends"  },
  ],};
const songsListSlice = createSlice({
  name: "trackList",
  initialState,
  reducers: {},
});

export default songsListSlice.reducer;
export const trackData = (state) => state.trackList.songs;
