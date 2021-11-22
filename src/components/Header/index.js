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

const Nav = styled.nav`
width: 25rem;
max-width: 40rem;
display: flex;
align-items:center;
justify-content: space-between;

a{
  font-weight: 600;
  color: var(--white);
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
      background: var(--purple);
    }
  }

`;
const HamburgerBtn = styled.button`
position: relative;
background-color:transparent;
width:2rem;
height:2px;
cursor:pointer;

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
&::before{
  top: -0.5rem;
  transform: rotate(0);
}
&::after{
  top: 0.5rem;
  transform: rotate(0);
}
`;

const Button = styled.button`
background-color: var(--purple);
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
    <a href="#contact">
      <Button>Contact Us</Button>
      </a>
  </Nav>
  <HamburgerBtn>
    <span />
  </HamburgerBtn>
  </Headers>
  );
};

export default Header;
