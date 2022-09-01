// eslint-disable-next-line no-unused-vars
import React from "react";
import SignUp from "./SignUp";
import {Container} from "react-bootstrap"


function App() {
  return (
    <Container
  className="d-flex align-items-center justify-content-center"
style={{ minHeight: '100vh'}}    
  >  
      <SignUp />
    </Container>
  )
}
export default App
