import { useState, useEffect} from "react";
import { Navbar, Container} from "react-bootstrap";
import logo from '../assest/img/logo.svg';
import navIcon1 from '../assest/img/nav-icon1.svg';
import navIcon2 from '../assest/img/nav-icon2.svg';
import navIcon3 from '../assest/img/nav-navIcon3.sv';
export const NavBAr = ()=>{
    const [activeLink,setActiveLink]=useState('home');
    cont [scolled,setCrolled]=useState(false);

    useEffect(()=>{
     const onScroll = () => {
        if(window.scrollY>50){
            seScrolled(true);
        }else{
            seScrolled(false);
        }
     }
     window.addEventListener("scroll",onScroll);
       
     return ( )=> window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    }

    return (
        <NavBAr expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <NavBAr.Brand>
                    <img src={'logo'} alt="Logo"/>
                </NavBAr.Brand>
                <Navbar.Toggle aria-controls="basic-navar-nav">
                    <span className="nabar-toggler-icon"> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink=== 'home' ? 'active navbar-link': 'naver-link'} onClick={()=>onUpdateActiveLink('home')}>home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink=== 'skills' ? 'active navbar-link': 'naver-link'}onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink=== 'projects' ? 'active navbar-link': 'naver-link'}onClick={()=>onUpdateActiveLink('projects')}>projects</Nav.Link>
                    </Nav>
                    <span className="navbatr-text">
                        <div className="social-icon">
                            <a href="#"> <img src={navIcon1} alt=""/></a>
                            <a href="#"> <img src={navIcon2} alt=""/> </a>
                            <a href="#"> <img src={navIcon3} alt=""/> </a>
                        </div>

                    </span>
                </Navbar.Collapse>
            </Container>
        </NavBAr>

    )
}