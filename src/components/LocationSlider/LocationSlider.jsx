import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EpisodeCard } from "../EpisodeCard/EpisodeCard";
import { Heading } from "../Heading";

export const LocationSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((cast) => {
        setData(cast.results);
      });
  }, []);

  !data && <div>Loading...</div>;

  return (
    <div className="my-16">
      <div className="flex justify-between mb-7">
        <Heading variant="h2" className="text-[#fff]">
          Location
        </Heading>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 2.2,
            },

            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3.5,
            },
            1280: {
              width: 1280,
              slidesPerView: 3.5,
            },
            1920: {
              width: 1920,
              slidesPerView: 4.5,
            },
          }}
          navigation={{
            nextEl: ".next-button-lc",
            prevEl: ".prev-button-lc",
          }}
        >
          {data.map((info) => (
            <SwiperSlide>
              <EpisodeCard subTitle={"#" + info.id} title={info.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="next-button-lc absolute z-10 rounded-full bg-white p-3 md:p-5 top-0 md:top-4 right-0 -mr-8 cursor-pointer">
          <svg
            width="12"
            height="17"
            viewBox="0 0 12 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.26667 8.48533L0.666672 15.0853L2.55201 16.9707L11.0373 8.48533L2.552 -8.24105e-08L0.666672 1.88533L7.26667 8.48533Z"
              fill="#9DFE00"
            />
          </svg>
        </div>
        <div className="prev-button-lc absolute left-0 top-0 md:top-4 z-10 rounded-full bg-white p-3 md:p-5 disabled:hidden  -ml-8  cursor-pointer">
          <svg
            width="12"
            height="17"
            viewBox="0 0 12 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.73337 8.48533L11.3334 15.0853L9.44804 16.9707L0.962707 8.48533L9.44804 -8.24105e-08L11.3334 1.88533L4.73337 8.48533Z"
              fill="#9DFE00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
