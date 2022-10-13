import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="">
        <img src={google} alt="google" />
      </div>
      <div className="gpt3">
        <img src={slack} alt="google" />
      </div>
      <div className="gpt3">
        <img src={atlassian} alt="google" />
      </div>
      <div className="gpt3">
        <img src={dropbox} alt="google" />
      </div>
      <div className="gpt3">
        <img src={shopify} alt="google" />
      </div>
    </div>
  );
};

export default Brand;
