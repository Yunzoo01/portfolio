import "./About.css";
import aboutme from "../../assets/aboutme.jpg"

function About() {
    return (
      <>
      <section id="about">
      {/* 제목은 맨 위 */}
      <h1>About Me</h1>
      <p className="sub">Junior developer passionate about web development and continuous growth</p>
      <div className="about-content">
        {/* 이미지 왼쪽 */}
        <img
          src={aboutme}
          alt="Profile"
          className="about-img"
        />
        <p>Hello! I’m a junior developer with a strong passion for learning and growing in the field of web development. Although I am new to the industry, I am enthusiastic about leveraging my knowledge of HTML, CSS, and JavaScript to create responsive and user-friendly websites. Additionally, I have experience in backend development using Django, PHP, and Java, and I am continually working to improve my skills in implementing server-side logic and integrating databases.
        <br/>I genuinely enjoy solving problems and am always looking for opportunities to enhance my skills through hands-on projects. I look forward to contributing to meaningful projects, collaborating with others, and continuing my journey of learning and growth as a developer. Thank you for visiting my portfolio!</p>
      </div>
      </section>
      </>
    );
  }
  
  
  export default About;