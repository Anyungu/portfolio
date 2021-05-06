﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Anyungu Wanyungu",
  title: "Hi all, I'm Anyungu, aka Apot",
  subTitle: emoji("I am an agile Full Stack Engineer 🚀 having actual experience in designing, building and deploying scalable apps in  Spring Boot, NodeJs and React. I learn fast! I have worked outside my stack"),
  resumeLink: "https://drive.google.com/file/d/1oOnDDFTjwKJVt7LVILpDokrC2RfdVip8/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Anyungu",
  linkedin: "https://www.linkedin.com/in/anyungu-wanyungu-6aa7b513a/",
  gmail: "anyungucw@gmail.com",
  // gitlab: "https://gitlab.com/adams_okode",
  // facebook: "https://web.facebook.com/dan.aunndah/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section
const skillsSection = {
  title: "My Skills",
  subTitle: "VERY CURIOUS FULL STACK DEVELOPER WHO WANTS TO EXPLORE A LOT OF TECH STACKS",
  skills: [
    emoji("⚡ I can come up with technical, non technical and tutorial project presentations real quick!"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java (Spring Boot)",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python (Flask)",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "no-sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "React-Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github-square"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [

    {
      Stack: "Backend with Java Spring Boot",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend with NestJS",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend with React Native",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend with flat nodeJS",
      progressPercentage: "70%"
    },
   
    {
      Stack: "Backend with Python Flask",
      progressPercentage: "55%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "FullStack Engineer",
      company: "Libryo",
      companylogo: require("./assets/images/msz.png"),
      date: "January 2021 - Present",
      desc: "Design, Build, Maintain, Imporove the Libryo Product",
      descBullets: [
        "Scrap required Legal Data",
        "Build and Deploy graphQL APIs",
      ]
    },
    {
      role: "Backend Engineer, Microservices",
      company: "Mesozi Group, Market Force Product",
      companylogo: require("./assets/images/msz.png"),
      date: "August 2020 - Jan 2021",
      desc: "Design, Build, Maintain, Imporove the MS Architecture",
      descBullets: [
        "Set up Github Actions for CI/CD",
        "Configure consul and envoy for each microservice",
        "Set up kafka for event based inter microservice communication"
      ]
    },
    {
      role: "IoT Software Engineer",
      company: "Liquid Telecom, Kenya",
      companylogo: require("./assets/images/ltk.svg"),
      date: "January 2020 – August 2020",
      desc: "Introduce Software to Liquid IoT",
      descBullets: [
        "Analyse and support potential software partners",
        "Build Software for network traffic monitoring",
        "Build public Sigfox payloads decoders",
        "Build an internal PoC platfrom"
      ]
    },
    {
      role: "Lead Applications Developer",
      company: "Fibonacci Systems",
      companylogo: require("./assets/images/dctLogo.png"),
      date: "June 2015 – August 2018",
      desc: "Design, Build, Maintain && Imporove the Fibo API",
      descBullets: [
        "Set up Docker annd Docker compose for deployment",
        "Build, test and maintain the company product REST API",
        "Support for customers onboarding"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Anyungu", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   link: "http://saayahealth.com/"
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/"
    // }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Jomo Kenyatta University Students Association",
      subtitle: "Served as Student president for over 60,000 Students, representing them in admin meetingd",
      // image: require("./assets/images/codeInLogo.webp"),
      // footerLink: [
      //   { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
      //   { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
      //   { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      // ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://developers.decoded.africa/microservices-with-spring-boot-and-kubernetes/",
      title: "Microservices with Spring Boot and Kubernetes",
      description: ""
    },
    {
      url: "https://developers.decoded.africa/how-to-build-a-nodejs-graphql-api/",
      title: "How to Build a NodeJS GraphQL API",
      description: ""
    },
    {
      url: "https://developers.decoded.africa/react-native-state-management-with-redux/",
      title: "React Native State Management with Redux",
      description: ""
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Sigfox CUSTOM API Integration",
      subtitle: "Consume Sigfox Messages with NodeJS - Guest Speaker Session",
      slides_url: "https://docs.google.com/presentation/d/1ynkl7UICSe0_7NMyKO4Yu8vuEfLUEOSBdz0dt0571uc/edit?usp=sharing",
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project, Request a free open source collaboration or just say hi? My Inbox is open for all.",
  email_address: "anyungucw@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName: ""//Replace "twitter" with your twitter username without @
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
