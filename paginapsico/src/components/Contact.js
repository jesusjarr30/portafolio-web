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
        

    const handleSubmit = () => {
        
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
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                            <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate
                            ('firstName', e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" value={formDetails.LastName} placeholder="last name Name" onChange={(e) => onFormUpdate
                            ('lastName', e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="email" value={formDetails.email} placeholder="Email adsress" onChange={(e) => onFormUpdate
                            ('email', e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="tel" value={formDetails.phone} placeholder="phone No" onChange={(e) => onFormUpdate
                            ('phone', e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate
                            ('message', e.target.value)}/>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                            
                        </Row>

                    </form>
                </Col>
                </Row>
            </Container>

        </section>
    )

}