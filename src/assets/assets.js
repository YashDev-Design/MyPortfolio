// This file contains the configuration and data for the portfolio website.
// It includes sections for the header, footer, about, education, certifications, skills, projects, and gallery.
// The data is structured in arrays and objects for easy management and customization.
// Importing necessary icons from react-icons library
import {
  FaInstagramSquare,
  FaLinkedin,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaCss3Alt,
  FaYoutube,
} from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import profilePic from './myprofile.png'; 


// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  {
    name: "x", // Social media name
    component: FaSquareXTwitter, // Twitter icon from react-icons
    link: "Your twitter link", // Replace with your actual Twitter URL
  },
  {
    name: "linkedIn", // LinkedIn icon
    component: FaLinkedin, 
    link: "Your linkedIn link", 
  },
  {
    name: "facebook",// Facebook icon
    component: FaYoutube,
    link: "Your facebook link",
  },
  {
    name: "instagram",// Instagram icon
    component: FaInstagramSquare, 
    link: "Your instagram link",
  },
  {
    name: "github",
    component: IoLogoGithub, // GitHub icon
    link: "Your github link",
  },
  //can add more icons or remove existing ones based on my social profiles.
];

// Header Text and Logo Configuration
// This section defines the text and logo for the header.
const textLogo = "Javeed Quadri Mohammad"; 
const imgLogo = ""; 

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Education", "Skills", "Projects", "Gallery","Contact"];

// About Section
// This section contains your personal information, including a brief description, contact details, and a profile image.
// You can customize the 'authorDescription', 'authorName', and other fields as per your preference.
 
const AboutPage = {
  authorProfile: profilePic, 
  authorDescription: "I'm a passionate Software Engineer with a strong background in computer science and hands-on experience building modern web applications using React, Node.js, and Python. I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of the tech world. Currently pursuing my Master's in Computer Science, I'm actively looking for opportunities to contribute to impactful software projects and collaborate with innovative teams.",
  getInTouchUrl: "./Contact.jsx", 
  authorName: "Javeed Quadri Mohammad", 
  profileImgTagLine: "Web and UI / UX Developer", 
  authorContactMail: "jmohamma@aum.edu", 
  authorContactNumber: "(334) - 719 - 4520", 
};
// Education Section
// This section contains my educational background.
// Each entry in the 'EducationPage' array represents a degree or certification.
// You can add or remove entries as needed.
const EducationPage = [
  {
    graduationYear: 2026, // Year of graduation
    degreeType: " Master's In Computer Science Graduate ", // Degree type
    institution: "Auburn University At Montgomery", // Institution name
    institutionUrl: "", // Institution URL (if applicable)
  },
  {
    graduationYear: 2022, 
    degreeType: "Bachelor's In Technology (computer science) Degree",
    institution: "Aurora Technological And Research University", 
    institutionUrl: "", 
  },
  {
    graduationYear: 2018, 
    degreeType: "Intermediate (12th)",  
    institution: "Sri Gayatri Junior College", 
    institutionUrl: "", 
  },
  {
    graduationYear: 2016, 
    degreeType: "Secondary School Certificate (10th)",  
    institution: "Little Angels High School", 
    institutionUrl: "", 
  },
];

// Certifications Section
// This array holds the details of certifications you have earned. 

const CertificatesPage = [
  {
    img: "credential.png", // Your certificate image
    title: "Coursera Build a website with WordPress",// Certification title
    description: "This guided project is an introduction to WordPress and is designed for people who would like to have their own website.", // Description of the certification
    issuedDate: "2023", // Date of issue
    issuedBy: "Coursera", // Issuing organization
    credentialURL: "https://www.coursera.org/account/accomplishments/verify/069QZ5LXBQCT", // Credential URL (if applicable)
  },
  {
    img: "credential2.png", 
    title: "Search Engine Optimization (SEO) Specialization",
    description: "This specialization covers the fundamentals of SEO, including keyword research, on-page optimization, and link building.",
    issuedBy: "Google", 
    credentialURL: "", 
  },
  {
    img: "credential3.png", 
    title: "Fundraiser: How to Raise Money for Your Startup",
    description: "This course provides insights into effective fundraising strategies for startups, including pitching to investors and crowdfunding.",
    issuedBy: "Street Cause Foundation", 
    credentialURL: "https://www.streetcause.org", 
  },
  {
    img: "credential4.png", 
    title: "Professional Theatre Training - Acting",
    description: "This course offers professional training in acting techniques, voice modulation, and stage presence.",
    issuedBy: "Annapurna International School of Film and Media", 
    credentialURL: "https://www.acfm.edu.in/learn-more-film-acting-course-part-time", 
  },
 
  // Add more certificates following the structure above
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
const skillsPage = [
  FaGitAlt,
  FaGithub,
  TbBrandCpp,
  FaJava,
  FaJs,
  TbBrandKotlin,
  FaPython,
  FaHtml5,
  BsFiletypeXml,
  FaCss3Alt,
  RiTailwindCssFill,
  FaYoutube,
];

// Gallery Section
// Add your design showcase items here. Supports pagination/carousel-style navigation.
const GalleryPage = [
  {
    img: "design1.jpg",
    title: "Modern Logo Design",
  },
  {
    img: "design2.jpg",
    title: "Social Media Post",
  },
  {
    img: "design3.jpg",
    title: "Business Product Post",
  },
  {
    img: "design4.jpg",
    title: "Advertisement Mockup",
  },
  {
    img: "design12.jpg",
    title: "Product Promotion Design",
  },
  {
    img: "design6.jpg",
    title: "Branding Poster",
  },
  {
    img: "design7.jpg",
    title: "Packaging Design",
  },
  {
    img: "design8.jpg",
    title: "Mobile App Banner",
  },
  {
    img: "design9.jpg",
    title: "Corporate Flyer",
  },
  {
    img: "design10.jpg",
    title: "Poster Concept",
  },
  {
    img: "design11.jpg",
    title: "Festival Promo",
  },
  {
    img: "design13.jpg",
    title: "UX Case Study",
  },
];

// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.
const projectsPage = [
  {
    projectName: "Dynamic Project Gallery", // Project name
    projectDescription: "A dynamic project gallery showcasing various projects with detailed descriptions and links to GitHub repositories. Built using React.js, Node.js, and MongoDB.", // Project description
    projectURL: "https://yashdev-design.github.io/JSON_project/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "YashDev-Design/JSON_project", // Optional: GitHub repository link
    tags: "Html, Css, Javascript", // Tech stack used in the project
    date: "Jan 2025 - May 2025", // Project duration
  },
  {
    projectName: "My Portfolio", // Project name
    projectDescription: "looking for a job as a software engineer, I created this portfolio to showcase my skills and projects. It includes sections for about me, education, skills, projects, and a gallery.", // Project description
    projectURL: "", 
    githubRepositoryURL: "", 
    tags: "Tailwind CSS, React.js, Vite, JSX", 
    date: "Jan 2025 - May 2025", 
  },
  
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,
  GalleryPage,
};
