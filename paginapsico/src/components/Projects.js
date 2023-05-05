import { useState, useEffect } from "react";
import {  Nav, Container,Row,Col } from "react-bootstrap";



export const Projects = () =>{
    const projects =[
        {
            title : "Business Startup",
            description: "Desing & Development",
            imgUrl: projImg1,
        },
        {
            title : "Business Starup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title : "Business Starup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title : "Business Starup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title : "Business Starup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        

    ]
    return(
        <section className= "project" id = "project">

            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>aqui se debe de poner todo el texto</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="/home">

                    <Nav variant="pills" defaultActiveKey={"/home"}>
                       
                        <Nav.Item>
                            <Nav.Link eventkey="first">Tab</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventkey="second">Tab</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventkey="third">Tab</Nav.Link>
                        </Nav.Item>
                    </Nav>


                    </Tab.Container>
                    
                    
                    </Col>
                </Row>
            </Container>


        </section>

    )
    
}