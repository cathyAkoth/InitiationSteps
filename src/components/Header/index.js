import styled from "styled-components";
import logo from "../../assets/logos.png";
import { useEffect, useRef, useState } from "react";

const Headers = styled.header`
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 1rem 5rem;
  /* background-color: var(--nav); */
  background-color: whitesmoke;
  color: #09009b;
  /* color: var(--white); */
  /* position: relative; */
  z-index: 500;
  position:fixed;
  width: 100%;
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

const Nav = styled.nav`
width: 25rem;
max-width: 40rem;
display: flex;
align-items:center;
justify-content: space-between;

@media only Screen and (max-width: 48em) {
  display: none;
}

a{
  font-weight: 600;
  /* color: var(--white); */
  color: #09009b;
  line-height: 1.5;

  &::after{
    content:"";
    display: block;
    height:3px;
    width: 3px;
    background: transparent;
    transition: width 0.5s;
  }
    &:not(:last-child):hover::after {
      width: 100%;
      background: #ffa400;
    }
  }

`;
const HamburgerBtn = styled.button`
position: relative;
background-color:transparent;
width:2rem;
height:2px;
cursor:pointer;
display:none;

@media only Screen and (max-width: 48em) {
  display: inline-block;
}

&::before,
::after{
  content:"";
  background-color:var(--white);
  width:2rem;
  height:2px;
  display:inline-block;
  position:absolute;
  left:0;
  cursor: pointer;
  transition: all 0.3s;
}
&::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  
}
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;

const Button = styled.button`
background-color: #ffa400;
padding: 0.5rem 1rem;
border-radius: 20px;
color:var(--white);
font-weight: 600;
cursor:pointer;
transition: all 0.2s;

&:hover{
  transform: scale(1.1);
}
&:focus{
  transform: scale(0.9);
}
`;
const Header = () => {

  const [click, setClick] = useState(false); 
  const handleClick = () => setClick(!click);
  
  return( 
  
  <Headers>
    <Logo>
  
    <img src={logo} alt="initiation-steps" />
    {/* <h3>Initiation Steps</h3> */}
  </Logo>
  <Nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact" onClick={() => {}}>
      <Button>Contact Us</Button>
      </a>
  </Nav>
  <HamburgerBtn clicked={click} onClick={() => setClick(!click)}>
        <span></span>
  </HamburgerBtn>
  <MobileMenu clicked={click}>
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => handleClick("about", e)}>
          About Us
        </a>
        <a href="#services" onClick={(e) => handleClick("services", e)}>
          Services
        </a>
        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>

  </Headers>
  );
};

export default Header;
