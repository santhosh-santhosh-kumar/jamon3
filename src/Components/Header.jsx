import { useEffect, useState } from 'react';
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import HeroBanner from "./HeroBanner";
import Text from "./Text";
import BottomPlayer from "./BottomPlayer/BottomPlayer";
import SliderCards from './SliderCards/SliderCards';

function Header() {
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowPlayer(true);
      } else {
        setShowPlayer(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showPlayer && (
        <div className="sticky top-0 z-50 transition-all duration-1000 lg:block hidden">
          <BottomPlayer />
        </div>
      )}
      <Logo />
      <div className="hidden lg:block mt-6"><Navbar /></div>
      <div className="lg:hidden sm:block">
        <MobileNavbar />
      </div>
      <div className="lg:px-40">
        <HeroBanner />
      </div>
      <div className="lg:px-96">
        <SliderCards />
      </div>

  
    
    </>
  );
}

export default Header;
