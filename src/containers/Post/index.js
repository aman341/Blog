import React from "react";
import "./style.css";
import Card from "../../component/UI/Card";
import BlogPost from "../../component/BlogPost";
import SideBar from "../Sidebar";
/**
 * @author
 * @function Post
 **/

const Post = (props) => {

  

  return (
    <section className="container">
      <BlogPost />
      <SideBar/>
    </section>
  );
};

export default Post;
