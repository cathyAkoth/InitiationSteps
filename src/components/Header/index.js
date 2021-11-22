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

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 5rem;
  height: auto;
  cursor: pointer;

  img{
    margin-right: 0.5rem;
  }
  
`;
const Header = () => {
  return( 
  
  <Headers>
    <Logo>
  
    <img src={logo} alt="initiation-steps" />
    {/* <h3>Initiation Steps</h3> */}
  </Logo>
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
