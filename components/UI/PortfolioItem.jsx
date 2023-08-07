import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword, clientRepo, serverRepo } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn m-lg-1">
          <Link href={`https://${liveUrl}`}>
            <a rel="noreferrer" target="_blank">
              Launch
            </a>
          </Link>
        </button>
        <button className="primary__btn m-lg-1">
          <Link href={`https://${clientRepo}`}>
            <a rel="noreferrer" target="_blank">
              GitHub
            </a>
          </Link>
        </button>
        {serverRepo && (
          <button className="primary__btn m-lg-1">
            <Link href={`https://${serverRepo}`}>
              <a rel="noreferrer" target="_blank">
                server Repo
              </a>
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
