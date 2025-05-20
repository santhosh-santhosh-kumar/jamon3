import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { LiaRandomSolid } from "react-icons/lia";
import { IoMdSkipBackward } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { IoRepeat } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { trackData } from "../Slices/SongsListSlice";
import { addSongDetails } from "../Slices/TrackNameSlice";
import { PiRepeatOnce } from "react-icons/pi";
import { addSongPlay } from "../Slices/TrackPlaySlice";
import { TbRepeatOff } from "react-icons/tb";


function Player() {
  const tracks=useSelector(trackData)
  const audioRef=useRef(null)
 
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [repeat,setRepeat]=useState("noRepeat")
  const [random,setRandom]=useState(false)
  const dispatch=useDispatch()
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(addSongDetails(tracks[currentTrackIndex]))     
    }

  }, [currentTrackIndex]);
  
  const togglePlayPause=()=>{
  if(play){
    audioRef.current.pause()
    dispatch(addSongPlay(false))
    setPlay(false)
  }else{
    audioRef.current.play();
    dispatch(addSongPlay(true))
    setPlay(true)
  }
  setPlay(!play);
  }
 
  const next=()=>{
    setCurrentTrackIndex((preIndex)=>(preIndex+1) % tracks.length)
    setPlay(true)
    dispatch(addSongPlay(true))
  }

  const previous=()=>{
    setCurrentTrackIndex((preIndex)=>(preIndex - 1 + tracks.length) % tracks.length)
    setPlay(true)
    dispatch(addSongPlay(true))
  }

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const totalDuration = audioRef.current.duration;
    setProgress((currentTime / totalDuration) * 100);
    setDuration(totalDuration);
  };

  return (
    <div className="flex  mt-5">
      <div className="lg:px-12 lg:py-2 px-6  rounded-[100px] lg:bg-[#231f20]">
        <Box className="w-[200px] md:w-[250px] lg:w-[300px]"  >
          <Slider  sx={{color:"white"}} aria-label="Disabled slider" value={progress} onChange={(e, newValue) => {
              const newTime = (newValue / 100) * duration;
              audioRef.current.currentTime = newTime;
              setProgress(newValue);
            }}/>
        
        </Box>
        <div className="flex justify-center items-center lg:gap-9 gap-6">
          {/* <p className={`${random ? "bg-white rounded-full text-black" : ""} cursor-pointer hover:scale-125 duration-500   transition-all p-1`} onClick={()=>setRandom(!random)}>
          <LiaRandomSolid size={20} />
          </p> */}
        
          <IoMdSkipBackward size={20} className="cursor-pointer hover:scale-125 duration-500   transition-all" onClick={previous}/>
          <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        src={tracks[currentTrackIndex]?.track}
        preload="metadata"
      />
          <p  className={`${play ? "hidden" : "block"} `} onClick={() => togglePlayPause()}>
            <FaPlay size={20} className="cursor-pointer hover:scale-125 duration-500   transition-all" />
          </p>
          <p  className={`${play ? "block" : "hidden"} `} onClick={() => togglePlayPause()}>
            <FaPause size={20} className="cursor-pointer hover:scale-125 duration-500   transition-all" />
          </p>
     
          <IoMdSkipForward size={20} className="cursor-pointer hover:scale-125 duration-500   transition-all" onClick={next}/>
          {/* <TbRepeatOff size={20} className={`${repeat == "noRepeat" ? "block" : "hidden"} cursor-pointer hover:scale-125 duration-500   transition-all`} onClick={()=>setRepeat("repeat")}/>
          <IoRepeat size={20} className={`${repeat == "repeat" ? "block" : "hidden"} cursor-pointer hover:scale-125 duration-500   transition-all`} onClick={()=>setRepeat("repeatOnce")}/>
          <PiRepeatOnce size={20} className={`${repeat == "repeatOnce" ? "block" : "hidden"} cursor-pointer hover:scale-125 duration-500   transition-all`} onClick={()=>setRepeat("noRepeat")}/> */}

        </div>
      </div>
    </div>
  );
}

export default Player;
