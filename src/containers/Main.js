import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter"
import Profile from "./profile/Profile";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <WorkExperience />
        <Projects />
        {/* <StartupProject /> */}
        {/* <Achievement /> */}
        <Blogs />
        <Talks />
        <Twitter />
        {/* <Podcast /> */}
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
