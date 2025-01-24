import React from "react";
import "./Contact.css"; // CSS 파일 import

const contacts = [
  {
    platform: "GitHub",
    badge: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white",
    link: "https://github.com/yunzoo01",
  },
  {
    platform: "Velog",
    badge: "https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white",
    link: "https://velog.io/@yunzoo01/posts",
  },
  {
    platform: "LinkedIn",
    badge: "https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white",
    link: "https://404",
  },
  {
    platform: "Email",
    badge: "https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=Gmail&logoColor=white",
    link: "mailto:papillon8191@gmail.com",
  },
];

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-badges">
        {contacts.map((contact) => (
          <a
            key={contact.platform}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <img
              src={contact.badge}
              alt={`${contact.platform} badge`}
              className="badge-image"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;