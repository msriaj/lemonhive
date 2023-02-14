import React from "react";
import { Heading } from "../Heading";
import "./index.css";

export const EpisodeCard = ({ subTitle, title }) => {
  return (
    <div className="ep_gradient-wrapper">
      <div className="ep_card overflow-hidden">
        <Heading variant="h6">{subTitle}</Heading>
        <Heading variant="cast">{title}</Heading>
      </div>
    </div>
  );
};
