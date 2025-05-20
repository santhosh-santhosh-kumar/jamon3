import React, { useEffect,useRef, useState } from "react";
import bannerImage from "../assets/home-banner/banner.png";
import playerImage from "../assets/home-banner/01.png";
import Player from "./Player";
import Explore from "./Explore";
import AOS from 'aos';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { trackData } from "../Slices/SongsListSlice";
import { songData } from "../Slices/TrackNameSlice";
import { isSongPlay } from "../Slices/TrackPlaySlice";
import axios from "axios";


function HeroBanner() {
  
  const textRef = useRef();
  const canvasRef = useRef(null);
  const audioVisualizerRef = useRef(null);
  const trackDetails=useSelector(songData)
  const isPlaying=useSelector(isSongPlay)
  const [trackData,setTrackData]=useState({})
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  }, [location]);

  useEffect(()=>{
    const fetchTrackData = async () => {
      try {
        const response = await axios.get('https://www.jam-on.ch/tracklist/currentlyplaying.json');
        console.log("response",response.data)
        setTrackData(response.data)
      } catch (error) {
        console.error('Error fetching currently playing data:', error);
      }
    };

    fetchTrackData();

  },[])

const image="https://www.jam-on.ch/tracklist/art-00.jpg"

  return (
    <div className="relative pb-10 lg:mt-0 mt-10 lg:h-auto ">
      <div className="lg:block hidden px-28">
        <img src={bannerImage} alt="" className="w-full lg:h-[400px] h-[200px]"/>
      </div>
      <div className="lg:absolute inset-0 pr-10 mt-4">
        <div className="lg:flex flex flex-col-reverse lg:flex-row lg:justify-center lg:gap-20 items-center">
          <div className="pl-10 lg:py-0 py-2">
            <p className="lg:text-3xl lg:block hidden font-mainfont">JungleRaiders</p>
            <p className="lg:text-2xl lg:block hidden font-semibold font-Nunito">
              JungleArea #252 | 22.02.2025 | ANTART BE-
            </p>
            <div className="overflow-hidden relative w-full ">
            <p  ref={textRef} className=" whitespace-nowrap text-xl font-semibold animate-scroll font-Nunito">{trackDetails.trackName}</p>
            </div>
            <div>
<Player />
            </div>
            <div>
            
            </div>
          </div>
          <div className="">
            <div className=" relative lg:w-[300px] h-auto lg:mt-10 w-52 mt-5" data-aos="zoom-in">
              <img src={image} alt="" className="w-full h-full object-cover rounded-2xl" />
              <div className={`${isPlaying ? "absolute" : "hidden"}  bottom-0 left-44 transform -translate-x-1/2 overflow-hidden w-full`}>
            <div className=" animate" id="animation">
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>
              <span className="py-10 a3 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a4 animationPlay"></span>
              <span className="py-10 a5 animationPlay"></span>
              <span className="py-10 a1 animationPlay"></span>
              <span className="py-10 a2 animationPlay"></span>


             </div>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
