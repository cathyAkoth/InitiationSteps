import styled from "styled-components";
import logo from "../../assets/logos.png";

const Headers = styled.header`
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
`;
const Header = () => {
  return( 
  
  <Headers>
  <div>
    <img src={logo} alt="initiation-steps" />
    {/* <h3>Initiation Steps</h3> */}
  </div>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">
      <button>Home</button>
      </a>
  </nav>

  </Headers>
  );
};

export default Header;
