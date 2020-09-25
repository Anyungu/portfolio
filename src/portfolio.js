
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Anyungu Wanyungu",
  title: "Hi all, I'm Anyungu",
  subTitle: emoji("I am an agile Full Stack Engineer 🚀 having actual experience in designing, building and deploying scalable apps in  Spring Boot, NodeJs and React. I learn fast! I have worked outside my stack"),
  resumeLink: "https://drive.google.com/file/d/15qF2VAsXvrABhp7h4AofFVUJk1te23Ig/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Anyungu",
  linkedin: "https://www.linkedin.com/in/anyungu-wanyungu-6aa7b513a/",
  gmail: "anyungucw@gmail.com",
  gitlab: "https://gitlab.com/adams_okode",
  // facebook: "https://web.facebook.com/dan.aunndah/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section
const skillsSection = {
  title: "My Skills",
  subTitle: "VERY CURIOUS FULL STACK DEVELOPER WHO WANTS TO EXPLORE A LOT OF TECH STACK EXCEPT PHP",
  skills: [
    // emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
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
      fontAwesomeClassname: "fab fa-cubes"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend with React Native",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend with Java Spring Boot",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend with nodeJS",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend with nodeJS",
      progressPercentage: "25%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer, Microservices",
      company: "Mesozi Group, Market Force Product",
      companylogo: require("./assets/images/eed-logo.png"),
      date: "August 2020 - Present",
      desc: "",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "IoT Software Engineer",
      company: "Liquid Telecom, Kenya",
      companylogo: require("./assets/images/dctLogo.png"),
      date: "January 2020 – August 2020",
      desc: ""
    },
    {
      role: "Lead Applications Developer",
      company: "Fibonacci Systems",
      companylogo: require("./assets/images/dctLogo.png"),
      date: "June 2015 – August 2018",
      desc: ""
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
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
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
      title: "IoT In the Wild",
      subtitle: "ALU African Industrial Internet Programme 2019 - Guest Speaker Session",
      slides_url: "https://www.youtube.com/watch?v=ZWnzLzTk1EQ",
      event_url: "https://www.youtube.com/watch?v=ZWnzLzTk1EQ"
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
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+254722173654",
  email_address: "anyungucw@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName: ""//Replace "twitter" with your twitter username without @
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
