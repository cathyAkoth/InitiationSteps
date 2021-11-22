import HeroSection from "../Sections/Hero";
import About from "../Sections/About";
import Services from "../Sections/Services";
import Testimonials from "../Sections/Testimonials";
import Contact from "../Sections/Contact";
import styled from "styled-components";


const Container = styled.div`

`
const Home = () => {
  return (
  <Container>
    <HeroSection />
    <About />
    <Services />
    <Testimonials />
    <Contact />
  </Container>
  );
};

export default Home;
