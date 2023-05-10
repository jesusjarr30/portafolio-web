import {useState } from "react";
import { Row,Container,Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"; 

export const Contact = () => { 
    const formInitialDetails = {
        firstname:'',
        LastName:'',
        email:'',
        phone:'',
        message:'',
    }

    const[formDetails,setFormDetails] = useState(formInitialDetails)
    const [buttomText, setButtonText] = useState('send');
    const [status,setStatus] = useState({});
    const onFormUpdate =(category,value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })

    }
        

    

    return(
        <section className="contact" id="connect">
            <Container>

                <Row className=""aling-items-center>
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                    <h2>Get in touch</h2>
                    <form>
                        <Row>
                            <Col>
                            <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate
                            ('firstName', e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate
                            ('firstName', e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate
                            ('firstName', e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate
                            ('firstName', e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate
                            ('firstName', e.target.value)}/>
                            </Col>
                           
                        </Row>

                    </form>
                </Col>
                </Row>
            </Container>

        </section>
    )

}