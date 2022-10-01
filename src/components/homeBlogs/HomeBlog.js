import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../../style/HomeBlog.css";
import HomeBlogItem from "./HomeBlogItem";

const HomeBlog = () => {
  return (
    <div id="blog" className="hb-conatiner">
      <div className="hb-row">
        <div className="hb-col">
          <div className="hb-blogDiv">
            <div className="hb-blogs">
              <HomeBlogItem />
            </div>
          </div>
        </div>
        <div className="hb-col">
          <Link className="hb-more" to="/blog">
            View More <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
