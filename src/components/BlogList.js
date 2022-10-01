import React from "react";
import BlogListItem from "./homeBlogs/BlogListItem";

const BlogList = () => {
  return (
    <div id="blog" className="hb-conatiner">
      <div className="hb-row">
        <h2 className="f-title">Our Blog</h2>
      </div>
      <div className="hb-row">
        <div className="hb-col">
          <div className="hb-blogDiv">
            <div className="hb-blogs">
              <BlogListItem />
              <BlogListItem />
              <BlogListItem />
              <BlogListItem />
              <BlogListItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
