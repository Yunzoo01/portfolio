import React, { useState } from "react";
import "./Projects.css";
import languageData from "../../assets/language_badge.json";
import eyetrackingImg from "../../assets/projects_pictures/eyetracking.png";
import scooterImg from "../../assets/projects_pictures/scooterdetector.png";
import logisticManagerImg from "../../assets/projects_pictures/LogisticManager.png";
import recipeImg from "../../assets/projects_pictures/recipe_book.jpg";
import winsockImg from "../../assets/projects_pictures/winsock_member_auth.png"
import processControlImg from "../../assets/projects_pictures/processcontrol.png"
import accountImg from "../../assets/projects_pictures/account.png"
import wcfTranslatorImg from "../../assets/projects_pictures/WCF_translator.png"
import downloadManagerImg from "../../assets/projects_pictures/downloadmanager.png"
import hadoopImg from "../../assets/projects_pictures/hadoop.png"
import kilianImg from "../../assets/projects_pictures/kilian.png"
import awImg from "../../assets/projects_pictures/awburger.png"
import expenseTrackerImg from "../../assets/projects_pictures/expense_tracker.png"
import chocobratImg from "../../assets/projects_pictures/chocobrat.png"
import yogaImg from "../../assets/projects_pictures/yoga.png"
import djangGroceryImg from "../../assets/projects_pictures/django-grocery.png"



const projects = [
  {
    id: 1,
    category: "Others",
    title: "Logistic Manager",
    image: logisticManagerImg,
    link: "https://github.com/Yunzoo01/LogisticsManager",
    languages: ["C++"],
    description: "This C++ project focuses on managing logistics operations, featuring inventory tracking and order processing for practical learning.",
  },
  {
    id: 2,
    category: "Others",
    title: "Winsock Member Auth",
    image: winsockImg,
    link: "https://github.com/Yunzoo01/Winsock_Member_Auth",
    languages: ["C++"],
    description: "This C++ project implements member authentication using Winsock, showcasing basic networking protocols and secure packet transmission.",
  },
  {
    id: 3,
    category: "Others",
    title: "Process Controller",
    image: processControlImg,
    link: "https://github.com/Yunzoo01/Process_Control",
    languages: ["C++"],
    description: "This project is a personal study project designed to learn how to manage and control processes using Winsock and the Windows API in a C++ environment.",
  },
  {
    id: 4,
    category: "Others",
    title: "Account",
    image: accountImg,
    link: "https://github.com/Yunzoo01/Account",
    languages: ["C#"],
    description: "This C# application enables comprehensive account management, showcasing key banking operations and financial application development within the .NET environment.",
  },
  {
    id: 5,
    category: "Others",
    title: "WCF Translator",
    image: wcfTranslatorImg,
    link: "https://github.com/Yunzoo01/Process_Control",
    languages: ["C#"],
    description: "This WCF-based translator chatbot enables reliable multilingual communication with a scalable backend and a responsive XAML-built frontend.",
  },
  {
    id: 6,
    category: "Others",
    title: "Download Manager",
    image: downloadManagerImg,
    link: "https://github.com/Yunzoo01/DownloadManager",
    languages: ["Java"],
    description: "This project is a simple GUI-based Download Manager created using Java Swing. It allows users to enter URLs to download files, with the download status indicated by colors.",
  },
  {
    id: 7,
    category: "Others",
    title: "Hadoop MapReduce(Netflix stock)",
    image: hadoopImg,
    link: "https://github.com/Yunzoo01/Hadoop_netflix_stock",
    languages: ["Java","Hadoop"],
    description: "This project is a simple MapReduce exercise. I calculated the highest annual stock price of Netflix.",
  },
  {
    id: 8,
    category: "Web Dev",
    title: "Chocobrat website",
    image: chocobratImg,
    link: "https://github.com/Yunzoo01/chocobrat-bakery-website",
    languages: ["HTML", "CSS"],
    description: "This project is a Chocobrat Bakery website built using only HTML and CSS. ",
  },
  {
    id: 9,
    category: "Web Dev",
    title: "Yoga website",
    image: yogaImg,
    link: "https://github.com/Yunzoo01/responsive-yoga-website",
    languages: ["HTML", "CSS"],
    description: "This project is a responsive Yoga website built using only HTML and CSS. ",
  },
  {
    id: 10,
    category: "Web Dev",
    title: "Kilian Webpage",
    image: kilianImg,
    link: "https://github.com/Yunzoo01/kilian-webpage",
    languages: ["HTML", "CSS", "JavaScript"],
    description: (
      <>
        This project is a web page built with HTML, CSS, and JavaScript, featuring a product slider, filtering options, and custom animations for enhanced user interaction. 
        <a href="https://kilian-webpage.netlify.app" target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
      </>
    ),
  },
  {
    id: 11,
    category: "Web Dev",
    title: "A&W Clone Webpage",
    image: awImg,
    link: "https://github.com/Yunzoo01/aw-burger-clone",
    languages: ["HTML", "CSS", "JavaScript"],
    description: (
      <>
        This project is a responsive webpage built with HTML, CSS, and JavaScript, replicating the A&W website design for practice.
        <a href="https://aw-burger-clone.netlify.app" target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
      </>
    ),
  },
  {
    id: 12,
    category: "Web Dev",
    title: "Expense Tracker",
    image: expenseTrackerImg,
    link: "https://github.com/Yunzoo01/expense-tracker",
    languages: ["HTML", "CSS", "JavaScript"],
    description: "This project is an Expense Tracker application built with HTML, CSS, and JavaScript. It helps users manage their finances by adding, viewing, and categorizing expenses, as well as filtering transactions and analyzing spending patterns.",
  },
  {
    id: 13,
    category: "AI",
    title: "Scooter_Detector",
    image: scooterImg,
    link: "https://github.com/Yunzoo01/Scooter_Detecter",
    languages: ["Python","PyTorch","YOLOv5"],
    description: "This project uses YOLOv5 to create AI models that detect whether a driver is wearing a helmet, detect multiple passengers, and detect scooters.",
  },
  {
    id: 14,
    category: "AI",
    title: "Eye Tracking",
    image: eyetrackingImg,
    link: "https://github.com/Yunzoo01/EyeTracking",
    languages: ["Python","TensorFlow","Keras","OpenCV"],
    description: "This project utilizes a webcam and deep learning to recognize pupil movements and implements eye-tracking technology with gaze calibration and facial movement adjustments. It visualizes user gaze data through heat maps and explores the correlation between pupil movements and screen interactions.",
  },
  {
    id: 15,
    category: "Web Dev",
    title: "Recipe Book",
    image: recipeImg,
    link: "https://github.com/Yunzoo01/recipe-book",
    languages: ["React", "HTML", "CSS", "JavaScript"],
    description: "This project is a recipe book web application that uses local storage to save and manage recipe data. Users can add, edit, and delete recipes, providing an efficient way to manage their recipe collection.",
  },
  {
    id: 16,
    category: "Web Dev",
    title: "Django Grocery System",
    image: djangGroceryImg,
    link: "https://github.com/Yunzoo01/django_grocery",
    languages: ["Django", "Python"],
    description: "It is a grocery store web application built with Django, featuring role-based login for staff and customer, along with basket management functionality.",
  },
];


const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = (activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory)
  ).sort((a, b) => b.id - a.id); // 정렬 추가
  
  return (
    <section id ="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">
        Explore some of my featured projects.
      </p>
  
      {/* 카테고리 버튼 */}
      <div className="filter-buttons">
        {["All", "Web Dev", "AI", "Others"].map((category) => (
          <button
            key={category}
            className={`filter-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
  
      {/* 프로젝트 리스트 */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-category">{project.category}</h3>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
            {/* 배지 생성 */}
            <div className="project-badges">
              {project.languages.map((language, index) => {
                const badgeData = languageData.find(
                  (item) => item.language === language
                );
                return (
                  badgeData && (
                    <img
                      key={index}
                      src={badgeData.badge}
                      alt={language}
                      className="language-badge"
                    />
                  )
                );
              })}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
