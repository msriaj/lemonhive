import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import genderImg from "../../assets/images/cast-details/icons/PNG/Gender.png";
import locationImg from "../../assets/images/cast-details/icons/PNG/Location.png";
import originImg from "../../assets/images/cast-details/icons/PNG/origin.png";
import speciesImg from "../../assets/images/cast-details/icons/PNG/Species.png";
import statusImg from "../../assets/images/cast-details/icons/PNG/Status.png";
import star from "../../assets/images/cast-details/star.png";

import logo from "../../assets/images/logo.png";
import { Heading } from "../../components/Heading";
export const CastDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((cast) => {
        setData(cast);
      });
  }, []);

  !data && <div>Loading...</div>;

  return (
    <div className="px-5 md:px-[80px] bg-fixed lg:px-[116px] py-[53px] min-h-screen    bg-[url('/src/assets/images/cast-details/background.png')] ">
      <div className="flex justify-center mb-[50px]">
        <Link to="/">
          <img className="w-[227px] h-12 " src={logo} alt="" />
        </Link>
      </div>
      <img src={star} alt="" className="fixed bottom-0 z-10 left-10" />
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <div>
            <h2 className="text-center">
              <span className="text-info text-2xl md:text-5xl ">
                {data?.name}
              </span>
            </h2>

            <div className="flex pt-4">
              <div className="gradient-border rounded p-[30px] md:p-[50px]">
                <img
                  className="w-[180px] md:w-[300px] h-[180px] md:h-[300px]"
                  src={data?.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-[1px] gradient-border h-[300px]"></div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="gradient-border rounded p-2">
                <img className="w-3 md:w-8" src={statusImg} alt="" />
                <p>status</p>
                <Heading variant="h3" className="text-[#fff]">
                  {data?.status}
                </Heading>
              </div>
              <div className="gradient-border rounded p-2 ">
                <img className="w-3 md:w-8" src={speciesImg} alt="" />
                <p>species</p>
                <Heading variant="h3" className="text-[#fff]">
                  {data?.species}
                </Heading>
              </div>
              <div className="gradient-border rounded p-2">
                <img className="w-3 md:w-8" src={genderImg} alt="" />
                <p>gender</p>
                <Heading variant="h3" className="text-[#fff]">
                  {data?.gender}
                </Heading>
              </div>
            </div>
            <div>
              <div className="gradient-border rounded p-2  mb-10">
                <img className="w-3 md:w-8" src={originImg} alt="" />
                <p>origin</p>
                <Heading variant="h2" className="text-[#fff]">
                  {data?.origin?.name}
                </Heading>
              </div>
              <div className="gradient-border rounded p-2  mb-10">
                <img className="w-3 md:w-8" src={locationImg} alt="" />
                <p>location</p>
                <Heading variant="h2" className="text-[#fff]">
                  {data?.location?.name}
                </Heading>
              </div>
              <div>
                <div className="gradient-border rounded max-h-[300px] overflow-auto p-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0593 16.62V18.36H2.65933V16.62H20.0593ZM2.65933 4.005L9.61933 8.355L2.65933 12.705V4.005ZM20.0593 10.53V12.27H11.3593V10.53H20.0593ZM20.0593 4.44V6.18H11.3593V4.44H20.0593Z"
                      fill="url(#paint0_linear_1_1932)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_1932"
                        x1="1.02169"
                        y1="1.15875"
                        x2="22.0934"
                        y2="5.41509"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9DFE00" />
                        <stop offset="1" stop-color="#14D9E6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>episode</p>
                  <div className="pt-2 md:pt-5 ">
                    {data?.episode?.map((item) => {
                      return (
                        <Heading variant="h4" className="text-[#fff]">
                          {item}
                        </Heading>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
