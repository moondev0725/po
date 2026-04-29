export function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="logo">
          PORTFOLIO
        </a>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
