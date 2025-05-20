import { useContext, useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

import news01 from "../../assets/news/news01.jpg";
import news02 from "../../assets/news/news02.jpg";
import news03 from "../../assets/news/news03.jpg";
import news04 from "../../assets/news/news04.jpg";

import { useLocation, useNavigate } from "react-router-dom";

const SliderCards = () => {
  const carData = [
    {
      id: 1,
      label: "Title Will Come Here",
      track: "Track Details Will Come Here",
      img: news01,
    },
    {
      id: 2,
      label: "Title Will Come Here",
      track: "Track Details Will Come Here",
      img: news02,
    },
    {
      id: 3,
      label: "Title Will Come Here",
      track: "Track Details Will Come Here",
      img: news03,
    },
    {
      id: 4,
      label: "Title Will Come Here",
      track: "Track Details Will Come Here",
      img: news04,
    },
    {
      id: 4,
      label: "Title Will Come Here",
      track: "Track Details Will Come Here",
      img: news04,
    },
    {
      id: 4,
      label: "Title Will Come Here",
      track: "Track Details Will Come Here",
      img: news04,
    },
    {
      id: 4,
      label: "Title Will Come Here",
      track: "Track Details Will Come Here",
      img: news04,
    },
  ];
  const navigate = useNavigate();

  const location = useLocation();
  const [hiddentext, setHiddentext] = useState(false);

  useEffect(() => {
    const carDataURL = carData.map(({ name }) => {
      return `/guru/${name}`;
    });
    if (carDataURL.includes(location.label)) {
      setHiddentext(true);
    } else {
      setHiddentext(false);
    }
  }, [location.pathname, carData]);
  return (
    <>
      <section className="w-full h-full relative overflow-hidden group">
        <p className="flex justify-center font-semibold text-2xl text-white">
          NEWS
        </p>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
          slidesPerView={1}
          loop={true}
          speed={1500}
         
          navigation={{
            nextEl: ".front-next",
            prevEl: ".front-prev",
          }}
          pagination={{
            clickable: true,
            el: ".front-pagination",
            bulletClass: "front-bullets",
            bulletActiveClass: "front-active-bullets",
          }}
        >
          {carData.map(({ id, label, track, img }) => (
            <SwiperSlide key={id} className="flex w-full mt-8 bg-white rounded-xl cursor-pointer text-gray-800">
              <div className="flex  gap-6 w-full ">
                <div className=" flex items-center p-6 gap-6 w-full ">
                  <div className="w-[300px] h-60 rounded-xl overflow-hidden">
                    <img
                      src={img}
                      className="w-full h-full rounded-xl"
                      alt={label}
                    />
                  </div>
                  <div className=" pt-3">
                    <h1 className="font-mainFont1 text-2xl font-semibold">{label}</h1>
                    <h2 className="font-mainFont2 text-md font-semibold">{track}</h2>
                    <div className="mt-10 flex ">
                        <p className="cursor-pointer border border-gray-800 px-4 py-2 rounded-full">Read More</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center items-center gap-4">
          <div className="cursor-pointer h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100  front-prev text-white text-3xl">
          <RiArrowLeftWideLine />
        </div>
        <div className="front-pagination flex items-center justify-center gap-2 py-4 rounded-b-xl"></div>

        
        
            <div className="cursor-pointer h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100  front-next text-white text-3xl">
          <RiArrowRightWideLine />
        </div>
      </div>
        </Swiper>
      
      </section>
    </>

  );
};

export default SliderCards;
