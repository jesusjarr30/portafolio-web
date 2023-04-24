import { useState } from "react";
import { Navbar, Container} from "react-bootstrap";

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
       
    },[])
    return (
        <NavBAr expand="lg">
            <Container>
                <NavBAr.Brand>
                    <img src={''} alt="Logo"/>
                </NavBAr.Brand>
                <Navbar.Toggle aria-controls="basic-navar-nav">
                    <span className="nabar-toggler-icon"> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">projects</Nav.Link>
                    </Nav>
                    <span className="navbatr-text">
                        <div className="social-icon">
                            <a href="#"> <img src={} alt=""/></a>
                            <a href="#"> <img src={} alt=""/> </a>
                            <a href="#"> <img src={} alt=""/> </a>
                        </div>

                    </span>
                </Navbar.Collapse>
            </Container>
        </NavBAr>

    )
}