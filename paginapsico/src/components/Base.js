import React,{ Component } from 'react';

export const Base = () => { 
   
    /*componentDidMount(); {
        // Simple POST request with a JSON body using fetch
        let _this =this;
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if(this.readyState==4 && this.status==200){
            console.log("Entro al if");
            var myArr=JSON.parse(this.responseText);
            console.log("LOs resultados son "+myArr);
            _this.setState({users:myArr});
          }
          else{
            console.log("No entro al if");
          }
          
        };
        xhttp.open('GET','http://localhost:8080/getSkills',true);
        xhttp.send();
    }*/
        return (
            <div>
                <h5>Simple POST Request</h5>
                
            </div>
        );
}
