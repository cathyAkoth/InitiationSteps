import logo from "../../assets/logo.svg";

const Header = () => {
  return( <header>
  
  <div>
    <img src={logo} alt="initiation-steps" />
    <h3>Initiation Steps</h3>
  </div>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">
      <button>Home</button>
      </a>
  </nav>

  </header>
  );
};

export default Header;
