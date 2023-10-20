
import React from "react";
import { Image } from "react-bootstrap";
import { checked, paused } from "../assets/icons";
import ReactPlayer from "react-player";
import { appPort } from "../utility/port";
const Card = ({
  title,
  img,
  duration,
  views,
  watched,
  description,
  subsType,
  amount,
  url,
  
}) => {
  return (
    <div onClick={() => {
            window.open(`${appPort}/videoplayer?${url}?type=${subsType}`, "_self")
          }} className="subs-card free-card">
      <div className="card-wrapper">
        <div className="img-wrap">
        <ReactPlayer url={`${appPort}/videoplayer?${url}`} width={'100%'} light={true} className="bg-img"  />
          {/* <div  className="bg-img" >
             <img src={url} />
        </div> */}
       
          {subsType === "free" ? (
            <span className="free-btn">{subsType}</span>
          ) : (
            <span className="premium-btn">{amount}</span>
          )}

          <Image src={watched ? checked : paused} className="label-watch" />
        </div>
        <div className="bottom-details">
          <p className="name">{title}</p>
          <a href="#" className="link-card">
            {description}
          </a>
          <div className="time-view">
            <span className="mins">{duration} </span>
            <span className="views">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

