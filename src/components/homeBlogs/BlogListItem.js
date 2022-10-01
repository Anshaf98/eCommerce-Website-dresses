import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = () => {
  return (
    <div className="hb-blog">
      <Link to="/blog">
        <h3 className="hb-blogTitle">AAAA</h3>
        <p className="hb-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          eaque illo consequatur molestias.
        </p>
        <div className="hb-blogFooter">
          <span>Admin</span>
          <span>20.20.2020</span>
        </div>
      </Link>
    </div>
  );
};

export default BlogListItem;
