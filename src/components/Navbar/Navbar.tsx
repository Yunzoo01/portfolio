import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // 모바일 메뉴 닫기
  };

  return (
    <>
      <nav className="navbar">
        {/* 로고와 햄버거 메뉴 */}
        <div className="navbar-container">
          <div className="logo">Yunju Jo</div>
          <button
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>

        {/* 데스크톱 메뉴 */}
        <ul className="menu desktop-menu">
          <li>
            <a onClick={() => handleMenuClick("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => handleMenuClick("about")}>About</a>
          </li>
          <li>
            <a onClick={() => handleMenuClick("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => handleMenuClick("contact")}>Contact</a>
          </li>
          <li>
            <button>
              <a href="https://docs.google.com/document/d/1ISUzNO1XnDEIFfhO5XnB3uGmPyX7ZM5VnigYun3mNaE/edit?usp=sharing">Resume</a>
              </button>
          </li>
        </ul>

        {/* 모바일 메뉴 */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a onClick={() => handleMenuClick("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleMenuClick("about")}>About</a>
            </li>
            <li>
              <a onClick={() => handleMenuClick("projects")}>Projects</a>
            </li>
            <li>
              <a onClick={() => handleMenuClick("contact")}>Contact</a>
            </li>
            <li>
            <button>
              <a href="https://docs.google.com/document/d/1ISUzNO1XnDEIFfhO5XnB3uGmPyX7ZM5VnigYun3mNaE/edit?usp=sharing">Resume</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* 오버레이 (모바일 메뉴 활성화 시 배경 클릭으로 닫기) */}
      {isMobileMenuOpen && (
        <div
          className="overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;