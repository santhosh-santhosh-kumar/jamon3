import React, { useEffect, useRef, useState } from "react";
import playerImage from "../../assets/home-banner/01.png";
import Player from "../Player";
import { LiaRandomSolid } from "react-icons/lia";
import { IoMdSkipBackward } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { IoRepeat } from "react-icons/io5";
import { PiRepeatOnce } from "react-icons/pi";
import { TbRepeatOff } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addSongPlay } from "../../Slices/TrackPlaySlice";
import { trackData } from "../../Slices/SongsListSlice";
import { addSongDetails } from "../../Slices/TrackNameSlice";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { IoMdVolumeHigh } from "react-icons/io";


const BottomPlayer = () => {
  const tracks = useSelector(trackData);
  const audioRef = useRef(null);

  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [repeat, setRepeat] = useState("noRepeat");
  const [random, setRandom] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(addSongDetails(tracks[currentTrackIndex]));
    }
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    if (play) {
      audioRef.current.pause();
      dispatch(addSongPlay(false));
      setPlay(false);
    } else {
      audioRef.current.play();
      dispatch(addSongPlay(true));
      setPlay(true);
    }
    setPlay(!play);
  };

  const next = () => {
    setCurrentTrackIndex((preIndex) => (preIndex + 1) % tracks.length);
    setPlay(true);
    dispatch(addSongPlay(true));
  };

  const previous = () => {
    setCurrentTrackIndex(
      (preIndex) => (preIndex - 1 + tracks.length) % tracks.length
    );
    setPlay(true);
    dispatch(addSongPlay(true));
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const totalDuration = audioRef.current.duration;
    setProgress((currentTime / totalDuration) * 100);
    setDuration(totalDuration);
  };

  const image="https://www.jam-on.ch/tracklist/art-00.jpg"

  return (
    <div className="flex items-center justify-between py-2 px-4 bg-black">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20">
          <img src={image} alt="" />
        </div>
        <div className="flex items-center">
          <div>
            <p className="text-lg">JungleArea #252 | 22.02.2025 | ANTART BE-</p>
            <p>Track14-Swiss Jungle Legends</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-center gap-10">
          {/* <p className="text-slate-300">
            <LiaRandomSolid size={20} />
          </p> */}
          <p>
            {" "}
            <IoMdSkipBackward
              size={20}
              className="cursor-pointer hover:scale-125 duration-500   transition-all"
              onClick={previous}
            />
          </p>
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            src={tracks[currentTrackIndex]?.track}
            preload="metadata"
          />
          <p
            className={`${play ? "hidden" : "block"}  bg-white p-2 rounded-full text-center`}
            onClick={() => togglePlayPause()}
          >
            <FaPlay
              size={20}
              className="cursor-pointer hover:scale-125 duration-500   transition-all text-black"
            />
          </p>
          <p
            className={`${play ? "block" : "hidden"} bg-white p-2 rounded-full text-center`}
            onClick={() => togglePlayPause()}
          >
            <FaPause
              size={20}
              className="cursor-pointer hover:scale-125 duration-500   transition-all text-black"
            />
          </p>

          <p>
            <IoMdSkipForward
              size={20}
              className="cursor-pointer hover:scale-125 duration-500   transition-all "
              onClick={next}
            />
          </p>
          {/* <p>
            <TbRepeatOff size={20} className={`${repeat == "noRepeat" ? "block" : "hidden"} cursor-pointer hover:scale-125 duration-500   transition-all text-slate-300`} onClick={()=>setRepeat("repeat")}/>
            <IoRepeat
              size={20}
              className={`${
                repeat == "repeat" ? "block" : "hidden"
              } cursor-pointer hover:scale-125 duration-500   transition-all`}
              onClick={() => setRepeat("repeatOnce")}
            />
            <PiRepeatOnce
              size={20}
              className={`${
                repeat == "repeatOnce" ? "block" : "hidden"
              } cursor-pointer hover:scale-125 duration-500   transition-all`}
              onClick={() => setRepeat("noRepeat")}
            />
          </p> */}
         
        </div>
        <div>
                <Box className="w-[200px] md:w-[250px] lg:w-[500px]"  >
          <Slider  sx={{color:"white"}} aria-label="Disabled slider" value={progress} onChange={(e, newValue) => {
              const newTime = (newValue / 100) * duration;
              audioRef.current.currentTime = newTime;
              setProgress(newValue);
            }}/>
        
        </Box>
        </div>
      </div>
      <div className="flex items-center gap-4">
            <p><IoMdVolumeHigh size={20} /></p>
            <p className="mt-1">
                        <Box className="w-[100px] md:w-[250px] lg:w-[100px]"  >
          <Slider  sx={{color:"white"}} aria-label="Disabled slider" value={progress} onChange={(e, newValue) => {
              const newTime = (newValue / 100) * duration;
              audioRef.current.currentTime = newTime;
              setProgress(newValue);
            }}/>
        </Box>
            </p>
      </div>
    </div>
  );
};

export default BottomPlayer;
