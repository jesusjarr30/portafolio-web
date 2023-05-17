import { useState, useEffect ,Text,h1} from 'react';
import {  Container} from "react-bootstrap";


export const Base = () =>{
    const [skillsd, setSkillsd] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8080/getSkills')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setSkillsd(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
return (
   <Container>
      <h1 style={{ color: 'red' }}>Hello world</h1>
   </Container>
    

)
};