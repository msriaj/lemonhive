import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import star from "../../assets/images/cast/star.png";
import logo from "../../assets/images/logo.png";
import { CastCard } from "../../components/CastCard";

export const Cast = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((cast) => {
        setData(cast.results);
      });
  }, []);

  !data && <div>Loading...</div>;

  return (
    <div className=" px-5 md:px-[80px] bg-fixed lg:px-[116px] py-[53px]  h-screen bg-[url('/src/assets/images/cast/background.png')] ">
      <img src={star} alt="" className="fixed bottom-0 z-10 left-10" />
      <div className="flex justify-center">
        <Link to="/">
          <img className="w-[227px] h-12 " src={logo} />
        </Link>
      </div>
      <div className="flex justify-between mb-7">
        <h2 className="text-info  text-[20px] lg:text-[64px]">The Cast</h2>
      </div>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
        {data.map((item) => (
          <CastCard castDetails={item} />
        ))}
      </div>
    </div>
  );
};
