import React, { useState } from 'react';
import facebook from "../../assets/demo/facebook.png"
import tiktok from "../../assets/demo/tik-tok.png"
import instagram from "../../assets/demo/instagram.png"
import twitch from "../../assets/demo/twitch.png"
import play from "../../assets/demo/play.png"

const FooterColumn = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <div className="footer-section bg-white rounded-t-[40px] mt-5  text-gray-700 ">
      {/* Footer Section */}
      <div className="footer-columns flex justify-between flex-wrap items-start px-6">
        {/* Left Column */}
        <div className="footer-column">
          <h3 className="text-3xl font-bold text-[#e6335f] mb-5 mt-5">Programm</h3>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Sendungen</p>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Musik | Radio</p>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer" >Video | Multimedia</p>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Events</p>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Mitmachen</p>
        </div>

        {/* Center Column with Social Icons */}
        <div className="footer-column text-left">
          <h3 className="text-3xl font-bold text-[#e6335f] mb-5 mt-5">Folge Uns</h3>
         <div className="social-icons-row flex justify-center gap-[15px] mt-[10px] flex-wrap">
  {[
    { href: "https://www.facebook.com/JamOnRadioOfficial", img: facebook, alt: "Facebook" },
    { href: "https://www.tiktok.com/@jamon.culture", img: tiktok, alt: "TikTok" },
    { href: "https://www.instagram.com/jamonradio/", img: instagram, alt: "Instagram" },
    { href: "https://www.twitch.tv/jam_on_radio", img: twitch, alt: "Twitch" },
    { href: "https://www.youtube.com/@jamonradio", img: play, alt: "YouTube" },
  ].map(({ href, img, alt }) => (
    <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="icon-container">
      <img
        src={img}
        alt={alt}
        className="w-[30px] h-[30px] transition-transform duration-300 hover:animate-bounceY"
      />
    </a>
  ))}
</div>
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <h3 className="text-3xl font-bold text-[#e6335f] mb-5 mt-5 mr-[80px]">Verein Jam On</h3>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Über Uns</p>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Team</p>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Mitgliedschaft</p>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Partnerschaften & Unterstützung</p>
          <p className="hover:text-[#e6335f] transition-colors duration-300 cursor-pointer">Unser Zuhause @i45</p>
        </div>
      </div>
    </div>
  );
};

export default FooterColumn;
