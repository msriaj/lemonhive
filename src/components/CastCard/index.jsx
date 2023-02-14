import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../Heading";
import "./index.css";

export const CastCard = ({ castDetails }) => {
  console.log(castDetails);
  return (
    <div className="gradient-wrapper">
      <div className="card overflow-hidden">
        <Link to={`/cast/${castDetails.id}`}>
          <img src={castDetails.image} alt="" />

          <Heading variant="h4" className="mt-2 md:mt-4 ">
            {castDetails.name}
          </Heading>
        </Link>
      </div>
    </div>
  );
};
