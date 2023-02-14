import React from "react";
import bubble from "../../assets/images/home/hero/bubble.png";
import Gun from "../../assets/images/home/hero/Gun.png";
import pill from "../../assets/images/home/hero/pill.png";
import portal from "../../assets/images/home/hero/portal.png";
import { Heading } from "../Heading";

const Hero = () => {
  return (
    <div className="flex justify-center   relative -mr-[50px]  ">
      <div className="flex flex-col  ">
        <div>
          <div className="flex justify-start  md:justify-center">
            <div className="flex relative">
              <img
                src={bubble}
                alt=""
                className="absolute -top-1/2 -left-1/2"
              />
              <Heading
                variant="h1"
                className="text-[#fff] font-extrabold italic"
              >
                The
              </Heading>
            </div>
            <div>
              <img src={portal} alt="" className="h-[40px] lg:h-[128px]" />
            </div>
            <div className="relative">
              <Heading
                variant="h1"
                className=" truncate text-[#fff] font-extrabold"
              >
                RICK &
              </Heading>
              <img
                src={pill}
                className="hidden md:block absolute top-0 right-0"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="flex justify-start md:justify-center">
              <Heading
                variant="h1"
                className="font-extrabold 
              text-transparent bg-clip-text bg-gradient-to-br from-[#9DFE00] to-[#14D9E5] "
              >
                MORTY
              </Heading>
              <Heading
                variant="h1"
                className="text-[#fff] font-extrabold italic"
              >
                Wiki
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full  mx-2 mb-10 md:mx-auto  justify-start  md:justify-center  md:items-center">
          <div className="mt-8 md:mt-0 mr-0 md:mr-16">
            <button className="px-6 py-4 flex gap-3 items-center  truncate rounded-full  bg-gradient-to-r from-[#9DFE00] to-[#14D9E5]">
              <span className="md:hidden block">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.84797 14.2935C4.43745 14.2935 1.67285 11.5289 1.67285 8.11835C1.67285 4.70784 4.43745 1.94324 7.84797 1.94324C11.2585 1.94324 14.0231 4.70784 14.0231 8.11835C14.0231 11.5289 11.2585 14.2935 7.84797 14.2935ZM7.84797 13.0584C9.15816 13.0584 10.4147 12.538 11.3411 11.6115C12.2676 10.6851 12.7881 9.42855 12.7881 8.11835C12.7881 6.80816 12.2676 5.55163 11.3411 4.62518C10.4147 3.69873 9.15816 3.17826 7.84797 3.17826C6.53777 3.17826 5.28124 3.69873 4.35479 4.62518C3.42835 5.55163 2.90787 6.80816 2.90787 8.11835C2.90787 9.42855 3.42835 10.6851 4.35479 11.6115C5.28124 12.538 6.53777 13.0584 7.84797 13.0584ZM6.99704 5.90457L10.0099 7.91272C10.0438 7.93527 10.0715 7.96584 10.0908 8.00171C10.11 8.03759 10.12 8.07765 10.12 8.11835C10.12 8.15905 10.11 8.19912 10.0908 8.23499C10.0715 8.27087 10.0438 8.30144 10.0099 8.32398L6.99642 10.3321C6.95926 10.3568 6.91613 10.3709 6.8716 10.373C6.82707 10.3751 6.7828 10.3651 6.74349 10.3441C6.70418 10.3231 6.67129 10.2918 6.6483 10.2536C6.62532 10.2154 6.6131 10.1717 6.61294 10.1271V6.10959C6.61303 6.06491 6.62522 6.02109 6.64824 5.9828C6.67125 5.94451 6.70422 5.91318 6.74364 5.89214C6.78305 5.8711 6.82743 5.86115 6.87206 5.86334C6.91668 5.86553 6.95987 5.87978 6.99704 5.90457Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="hidden md:block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_2712)">
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM10.622 8.415L15.501 11.667C15.5559 11.7035 15.6009 11.753 15.632 11.8111C15.6631 11.8692 15.6794 11.9341 15.6794 12C15.6794 12.0659 15.6631 12.1308 15.632 12.1889C15.6009 12.247 15.5559 12.2965 15.501 12.333L10.621 15.585C10.5608 15.6249 10.491 15.6477 10.4189 15.6512C10.3468 15.6546 10.2751 15.6384 10.2114 15.6043C10.1477 15.5703 10.0945 15.5197 10.0573 15.4578C10.02 15.396 10.0003 15.3252 10 15.253V8.747C10.0001 8.67465 10.0199 8.60369 10.0572 8.54168C10.0944 8.47967 10.1478 8.42893 10.2116 8.39486C10.2755 8.36079 10.3473 8.34467 10.4196 8.34822C10.4919 8.35177 10.5618 8.37485 10.622 8.415Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2712">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Watch Now
            </button>
          </div>
          <Heading variant="h5" className="text-primary w-1/2 md:full">
            Brilliant but boozy scientist Rick hijacks his fretful teenage{" "}
            grandson, Morty, for wild escapades in other worlds and alternate{" "}
            dimensions.
          </Heading>
        </div>
      </div>
      <img
        src={Gun}
        alt=""
        className="absolute w-60 md:w-96 sm:top-10 -right-20 md:right-0 "
      />
    </div>
  );
};

export default Hero;
