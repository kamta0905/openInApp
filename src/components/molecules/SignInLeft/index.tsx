import React from "react";
import github from "../../../assets/gitHub.svg";
import twitter from "../../../assets/twitter.svg";
import linkedin from "../../../assets/linkeDin.svg";
import discord from "../../../assets/discord.svg";
export const SignInLeft = () => {
  return (
    <div className="left_container">
      <div className="logo_title">Base</div>
      <div className="social_media_container">
        <a href="">
          <img src={github} alt="github" />
        </a>
        <a href="">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="">
          <img src={discord} alt="discord" />
        </a>
      </div>
    </div>
  );
};
