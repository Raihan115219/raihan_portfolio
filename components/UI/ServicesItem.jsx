import React from "react";
import classes from "../../styles/services-item.module.css";

const ServicesItem = ({ title, icon, desc }) => {
  return (
    <div className={`${classes.service__item}`}>
      <span>
        <i className={icon}></i>
      </span>

      <div className="flex flex-row bg-transparent text-white-500">
        <h5>{title}</h5>
        <h6 className="bg-transparent">{desc}</h6>
      </div>
    </div>
  );
};

export default ServicesItem;
