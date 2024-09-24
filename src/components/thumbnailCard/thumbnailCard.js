import React from "react";
import "./thumbnailCard.css";

const ThumbnailCard = ({ title, description, thumbnailSrc }) => {
  return (
    <div className="container">
      <div className="thumbnail-section">
        <img src={thumbnailSrc} alt={title} className="thumbnail" />
      </div>
      <div className="text-section">
        <h2 className="titley">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ThumbnailCard;