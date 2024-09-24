import React, { useState, useEffect } from "react";

import movieImg from "../../resources/projectimages/movie.png";
import playerImg from "../../resources/projectimages/player.png";
import siteImg from "../../resources/projectimages/site.png";

import githubIcon from "../../resources/githubicon.png";
import javaicon from "../../resources/techicon/java.gif";

import reacticon from "../../resources/skillIcons/reacticon.png";
import htmlicon from "../../resources/skillIcons/htmlicon.png";
import cssicon from "../../resources/skillIcons/cssicon.png";
import booticon from "../../resources/skillIcons/booticon.png";
import flaskicon from "../../resources/skillIcons/flaskicon.png";
import phpicon from "../../resources/skillIcons/phpicon.png";
import firebaseicon from "../../resources/skillIcons/realtimeicon.png";
import sqlicon from "../../resources/skillIcons/sqlicon.png";
import giticon from "../../resources/skillIcons/githubicon.png";
import dockericon from "../../resources/skillIcons/dockerImg.png";
import mongoicon from "../../resources/skillIcons/mongodbIcon.png";

import springicon from "../../resources/skillIcons/springicon.png";
import webIcon from "../../resources/webImg.png";

import javaimg3 from "../../resources/projectimages/1_java/3_java.png";

import doubtStack from "../../resources/projectimages/doubtStack.png";
import pokedex from "../../resources/projectimages/pokedex.png";

import handimg1 from "../../resources/projectimages/3_hand/hand_1.png";

import portalimg1 from "../../resources/projectimages/4_portal/portal_1.png";

import fakeNewsImg1 from "../../resources/projectimages/5_fakeNews/fakenews_1.png";

import expense1 from "../../resources/projectimages/expense/expense_1.png";

import "./Projects.css";

const Projects = () => {
  const scrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cards = [
    {
      title: "Build faster",
      text: "C, C#, C++, Python, Dart, Java, HTML, Javascript, PHP, SQL",
    },
    {
      title: "Build f",
      text: "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express",
    },
    {
      title: "Build a",
      text: "C, C#, C++, Python, Dart, Java, HTML, Javascript, PHP, SQL",
    },
    {
      title: "Build d",
      text: "ROS, OpenCL, CUDA, OpenCV, TensorFlow, Pytorch, .NET, Flutter, Unity, NodeJS, Express",
    },
  ];

  return (
    <div id="projects" className="bodyContainerProject">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="project-list">
          <div className="proCard">
            <img className="tokenImage" src={doubtStack} alt="doubtstackImg" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">DoubtStack</h2>
              <div className="linkPro">
                <a
                  href="https://github.com/Sudhanva1999/DockerDoubtStack"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={githubIcon} />
                </a>

                <a
                  href="https://sudhanva1999.github.io/DoubtStackFrontEnd/"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={webIcon} />
                </a>
              </div>
            </div>

            <p class="description blackText">
              A doubt-solving forum using the MERN stack, complete with a robust
              testing suite and Docker containerization, ensuring seamless
              deployment.
            </p>
            <div class="wrapper">
              <img className="actual-icon" src={reacticon} />
              <img className="actual-icon" src={dockericon} />
              <img className="actual-icon" src={htmlicon} />
              <img className="actual-icon" src={cssicon} />
              <img
                className="actual-icon"
                src="https://img.icons8.com/color/48/javascript--v1.png"
              />
              <img className="actual-icon" src={mongoicon} />
            </div>
          </div>

          <div className="proCard">
            <img class="tokenImage" src={javaimg3} alt="javaprojectimage" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">Pixel Manipulation</h2>
              <div className="linkPro">
                <a
                  href="https://github.com/Sudhanva1999/image-frontend"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={githubIcon} />
                </a>

                <a
                  href="https://sudhanva1999.github.io/image-frontend/"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={webIcon} />
                </a>
              </div>
            </div>

            <p class="description blackText">
              An Java based image manipulation software made with strict
              adherance to MVC principles.
              <span>Code can be made available on request.</span>
            </p>
            <div class="wrapper">
              <img
                className="actual-icon"
                src="https://img.icons8.com/fluency/48/java-coffee-cup-logo.png"
              />
            </div>
          </div>

          <div className="proCard">
            <img class="tokenImage" src={handimg1} alt="handwriting image" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">
                Handwriting Recognizer and Analysis Tool
              </h2>
              <div className="linkPro">
                <a
                  href="https://github.com/Sudhanva1999/Handwritting_Classifier"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={githubIcon} />
                </a>
              </div>
            </div>
            <p class="description blackText">
              An pattern analysis based handwriting recognizer tool .
            </p>
            <div class="wrapper">
              <img
                className="actual-icon"
                src="https://img.icons8.com/color/48/python--v1.png"
              />
              <img className="actual-icon" src={flaskicon} />
              <img className="actual-icon" src={htmlicon} />
              <img className="actual-icon" src={cssicon} />
              <img className="actual-icon" src={booticon} />
            </div>
          </div>

          <div className="proCard">
            <img class="tokenImage" src={expense1} alt="expense1" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">Expense Tracker App</h2>
              <div className="linkPro">
                <a
                  href="https://github.com/Sudhanva1999/expenseBos"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={githubIcon} />
                </a>
              </div>
            </div>
            <p class="description blackText">
              A react based expense tracker based on Dinic’s maxflow algorithm.
            </p>
            <div class="wrapper">
              <img
                className="actual-icon"
                src="https://img.icons8.com/color/48/python--v1.png"
              />
              <img className="actual-icon" src={flaskicon} />
              <img className="actual-icon" src={htmlicon} />
              <img className="actual-icon" src={cssicon} />
              <img className="actual-icon" src={booticon} />
              <img className="actual-icon" src={firebaseicon} />
            </div>
          </div>

          <div className="proCard">
            <img class="tokenImage" src={portalimg1} alt="portalimg1" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">
                Paper Presentation Conference Portal
              </h2>
              <div className="linkPro">
                <a
                  href="https://spandanycce.in/"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={webIcon} />
                </a>
              </div>
            </div>
            <p class="description blackText">
              A php based CRUD application complete with admin dashboard.
            </p>
            <div class="wrapper">
              <img className="actual-icon" src={phpicon} />
              <img className="actual-icon" src={htmlicon} />
              <img className="actual-icon" src={cssicon} />
              <img className="actual-icon" src={booticon} />
              <img className="actual-icon" src={sqlicon} />
            </div>
          </div>

          <div className="proCard">
            <img class="tokenImage" src={pokedex} alt="pokedex image" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">PokeDex</h2>
              <div className="linkPro">
                <a
                  href="https://github.com/Sudhanva1999/supply-frame-pokedex"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={githubIcon} />
                </a>
              </div>
            </div>
            <p class="description blackText">
              A vanilla javascript client to consume public open api for Pokemon
              with a likeness recommendation engine.
            </p>
            <div class="wrapper">
              <img
                className="actual-icon"
                src="https://img.icons8.com/color/48/javascript--v1.png"
              />
              <img className="actual-icon" src={htmlicon} />
              <img className="actual-icon" src={cssicon} />
            </div>
          </div>

          <div className="proCard">
            <img class="tokenImage" src={movieImg} alt="NFT" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">Moview Review Board</h2>
              <div className="linkPro">
                <a
                  href="https://github.com/Sudhanva1999/JavaReacMovies"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={githubIcon} />
                </a>
              </div>
            </div>
            <p class="description blackText">
              A JAVA-REACT Communication POC that communicates via RESTful Apis.
            </p>
            <div class="wrapper">
              <img
                className="actual-icon"
                src="https://img.icons8.com/fluency/48/java-coffee-cup-logo.png"
              />
              <img className="actual-icon" src={reacticon} />
              <img className="actual-icon" src={springicon} />
              <img className="actual-icon" src={htmlicon} />
              <img className="actual-icon" src={cssicon} />
              <img className="actual-icon" src={booticon} />
            </div>
          </div>

          <div className="proCard">
            <img class="tokenImage" src={playerImg} alt="NFT" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">
                Client Host Multimedia Player
              </h2>
              <div className="linkPro">
                <a
                  href="https://github.com/"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={githubIcon} />
                </a>
              </div>
            </div>
            <p class="description blackText">
              A multimedia player capable of controlling client multimedia
              players accross network and controls like play, pause and vloume
              controls.
            </p>
            <div class="wrapper">
              <img
                className="actual-icon"
                src="https://img.icons8.com/color/48/python--v1.png"
              />
              <img className="actual-icon" src={reacticon} />
              <img
                className="actual-icon"
                src="https://img.icons8.com/color/48/javascript--v1.png"
              />
            </div>
          </div>

          <div className="proCard">
            <img class="tokenImage" src={siteImg} alt="NFT" />
            <div className="proCardTitle">
              <h2 className="blackText textBlack">This Site !</h2>
              <div className="linkPro">
                <a
                  href="https://sudhanvapaturkar.com/"
                  target="_blank"
                  class="github-btn"
                >
                  <img className="git-icon" src={webIcon} />
                </a>
              </div>
            </div>
            <p class="description blackText">
              This site made entirely using ReactJS and hosted on github pages.
            </p>
            <div class="wrapper">
              <img className="actual-icon" src={reacticon} />
              <img className="actual-icon" src={htmlicon} />
              <img className="actual-icon" src={cssicon} />
              <img className="actual-icon" src={booticon} />
              <img className="actual-icon" src={giticon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
