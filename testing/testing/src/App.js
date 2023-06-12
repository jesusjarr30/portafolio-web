import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetchData(); // Llamar a la función fetchData al montar el componente
  }, []);

  function fetchData() {
    fetch('http://localhost:8080/getProjects')
      .then(response => response.json())
      .then(data => {
        // Aquí puedes manejar los datos de respuesta de la API
        console.log(data);
      })
      .catch(error => {
        // Aquí puedes manejar cualquier error de la solicitud
        console.error('Error:', error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>
          MMM
        </a>
      </header>
    </div>
  );
}

export default App;
