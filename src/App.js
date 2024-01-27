import React from 'react';
import './App.css';
import {Card, Button} from 'react-bootstrap';
import Image from './Component/Image';
import Name from  './Component/Name';
import Description from './Component/Description'
import Price from  './Component/Price';

function App() {
  /*Declaring fistName*/
  let firstName= 'Bayouss'

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Name/>
        <Description/>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>



    <>  
    <h3>{firstName ? `Hello, ${firstName}`: `Hello,There!!`}</h3>
    
    {firstName && <img src='/Coiffeuse .jpg' alt='Coiffeuse'/>}
  
    </>

    </div>
  );
}

export default App;



