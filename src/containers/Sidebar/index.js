import React from "react";
import Card from "../../component/UI/Card";
import "./style.css";
import img2 from "../../wallapaper/2.jpg";
/**
 * @author
 * @function SideBar
 **/

const SideBar = (props) => {
  return (
    <div className="sidebarContainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profile">
          <img src={img2} />
        </div>

        <div className="cardBody">
          <p className="PersonalBio">
            My Name is Aman Kumar I am a Software Developer Specialization in
            Front-End Developer..
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Education</span>
          <h6>
            <a href="http://cbseresults.nic.in/CBSEResults/Page/Page?PageId=19&LangId=P">
              {" "}
              10th{" "}
            </a>
          </h6>
          <h6>
            <a href="https://crida.in/bihar-board-12th-result/"> 12th </a>
          </h6>
          <h6>
            {" "}
            <a href="https://www.brabu.net/professional_result.php">
              {" "}
              Graduation
            </a>
          </h6>
          <h6>
            <a href="http://bputexam.in/studentsection/resultpublished/studentresult.aspx">
              {" "}
              Masters
            </a>
          </h6>
        </div>

        <div className="cardHeader">
          <span>Social Network</span>
          <h6>FaceBook</h6>
          <h6>Instagram</h6>
          <h6>LinkdIn</h6>
          <h6>Twitter</h6>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3>Fitness Mantra To Live Fit Life</h3>
            <span>August 11, 2021</span>

            <h3>Beautiful & Special Moment</h3>
            <span>July 25, 2021</span>

            <h3>Beautiful within Special</h3>
            <span>June 21, 2021</span>

            <h3>Sliding My Way To Life</h3>
            <span>March 26, 2021</span>

            <h3>Beautiful & Special Moment</h3>
            <span>July 25, 2021</span>

            <h3>Fitness Mantra To Live Fit Life</h3>
            <span>August 11, 2021</span>

            <h3>Beautiful & Special Moment</h3>
            <span>July 25, 2021</span>

            <h3>Beautiful within Special</h3>
            <span>June 21, 2021</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
