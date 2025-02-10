/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation




const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aman SIngh Tkakur",
  title: "Hi all, I'm Aman",
  subTitle: emoji(
    "A Game Developer 🎮 with experience in building immersive games and simulations using Unreal Engine, C++, Blueprints, and integrating gameplay mechanics, UI, AI, and multiplayer features with cutting-edge tools and frameworks. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qDsgYA2ivl7ADAdjIXbmtYuWkOfVecVb/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kartyos-india",
  linkedin: "https://www.linkedin.com/in/kartyos/",
  gmail: "aman.kartyos@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Game Developer driven by curiosity, constantly exploring new technologies to craft unique and immersive experiences. 🚀",
  skills: [
    "⚡ 3D Game Developer specialising in Unreal Engine 5 and Unity.",
    "⚡ Experienced in VR, AR, and multiplayer game development.",
    "⚡ Strong background in C++ and C#, creating immersive experiences across platforms."
  ],

  softwareSkills: [
    { skillName: "Unreal Engine" },
    { skillName: "Unity" },
    { skillName: "C++"},
    { skillName: "C#" },
    { skillName: "Android SDK" },
    { skillName: "Game Development" },
    { skillName: "Game Design" },
    { skillName: "Game Programming" },
  ],

  display: true
};



// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Space Science and Technology",
      logo: "data:image/jpeg;base64,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",
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2021 - 2025",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unreal Engine", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Unity",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section 
  experience: [
    {
      role: "Junior Unreal Developer",
      company: "VRadicals India Pvt Ltd",
      companylogo: require("./assets/images/Vradicals.png"),
      date: "Dec 2023 – Present",
    },
    {
      role: "App Development Intern",
      company: "codenscious",
      companylogo: require("./assets/images/cond.jpeg"),
      date: "Aug 2023 – Nov 2023",
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Campus Quest",
      projectDesc: "A College Exploration Adventure is a groundbreaking project that merges gamification and education by offering an interactive virtual campus where users solve puzzles and answer trivia to boost college knowledge, foster community connections, and showcase the potential of game-based learning.",
     
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "aman.kartyos@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  skillsSection
};
