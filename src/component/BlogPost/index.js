import React from "react";
import Card from "../UI/Card";
import "./style.css";
import img1 from "../../wallapaper/1.jpg";
import img2 from "../../wallapaper/frog.jpg";
/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Beautiful is always beautiful</h1>
          <span className="postedBy">
            Posted On August 13, 2021 by Aman Blogging Tips
          </span>
        </div>

        <div className="postimageContainer">
          <img src={img1} />
        </div>

        <div className="postContent">
          <h3>Post Title</h3>
          <p>Beautiful Image</p>
        </div>
      </Card>

      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Beautiful Friends alway </h1>
          <span className="postedBy">
            Posted On August 14, 2021 by Aman Blogging Tips
          </span>
        </div>

        <div className="postimageContainer">
          <img src={img2} />
        </div>

        <div className="postContent">
          <h3>Post Title</h3>
          <p>Beautiful Friends</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
