import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EpList from "../../assets/images/cast-details/icons/PNG/Episode(s).png";
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
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/2")
      .then((res) => res.json())
      .then((cast) => {
        setData(cast);
      });
  }, []);
  console.log(data);
  !data && <div>Loading...</div>;

  return (
    <div className="px-5 md:px-[80px] bg-fixed lg:px-[116px] py-[53px] overflow-hidden   bg-[url('/src/assets/images/cast-details/background.png')] ">
      <div className="flex justify-center mb-[50px]">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <img src={star} alt="" className="fixed bottom-0 z-10 left-10" />
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <div>
            <h2>
              <span className="text-info text-5xl ">{data?.name}</span>
            </h2>
            <div className="flex pt-4">
              <div className="gradient-border rounded p-[50px]">
                <img className="w-[300px] h-[300px]" src={data?.image} alt="" />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-[1px] gradient-border h-[300px]"></div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="gradient-border rounded p-2">
                <img src={statusImg} alt="" />
                <p>status</p>
                <Heading variant="h2" className="text-[#fff]">
                  {data?.status}
                </Heading>
              </div>
              <div className="gradient-border rounded p-2 ">
                <img src={speciesImg} alt="" />
                <p>species</p>
                <Heading variant="h2" className="text-[#fff]">
                  {data?.species}
                </Heading>
              </div>
              <div className="gradient-border rounded p-2">
                <img src={genderImg} alt="" />
                <p>gender</p>
                <Heading variant="h2" className="text-[#fff]">
                  {data?.gender}
                </Heading>
              </div>
            </div>
            <div>
              <div className="gradient-border rounded p-2  mb-10">
                <img src={originImg} alt="" />
                <Heading variant="h2" className="text-[#fff]">
                  {data?.origin?.name}
                </Heading>
              </div>
              <div className="gradient-border rounded p-2  mb-10">
                <img src={locationImg} alt="" />
                <Heading variant="h2" className="text-[#fff]">
                  {data?.location?.name}
                </Heading>
              </div>
              <div>
                <div className="gradient-border rounded h-[300px] overflow-y-scroll p-2">
                  <img src={EpList} alt="" />
                  <Heading variant="h2" className="text-[#fff]">
                    {data?.episode?.length}
                  </Heading>
                  {data?.episode?.map((item) => {
                    return (
                      <Heading variant="h2" className="text-[#fff]">
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
  );
};
