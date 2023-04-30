import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const NavBAr = ()=>{
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
     window.addEventListener("scroll",onScroll);
       
     return ( )=> window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    }

    return (
        <NavbAr expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <NavbAr.Brand>
                    <img src={'logo'} alt="Logo"/>
                </NavbAr.Brand>
                <Navbar.Toggle aria-controls="basic-navar-nav">
                    <span className="nabar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'}onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'}onClick={()=>onUpdateActiveLink('projects')}>projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"> <img src={navIcon1} alt=""/></a>
                            <a href="#"> <img src={navIcon2} alt=""/> </a>
                            <a href="#"> <img src={navIcon3} alt=""/> </a>
                        </div>
                        <button className="vvd"><span>Let’s Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </NavbAr>
    )
}