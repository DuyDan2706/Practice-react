import logo from "./logo.svg";
import "./App.scss";
import TableUsers from "./components/TableUser";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import ModalAddNewUser from "./components/ModalAddNewUser";
import { useState } from "react";

function App() {

 const [isshowModalAddNew,SetIsshowModalAddNew]=useState(false)

const handleClose = ()=>{
  SetIsshowModalAddNew(false);
}
  return (
    <div className="app-container">
   
          <Header />
          <Container>
          <div className="my-3 add-new">
           <span><b>List User :</b></span> 
            <buton className="btn btn-success" onClick={()=>SetIsshowModalAddNew(true)}>Add new user</buton>
          </div>
          <TableUsers />
          </Container>
      <ModalAddNewUser
        show={isshowModalAddNew}
        handleClose={handleClose}

      />
        
       
    </div>
  );
}

export default App;
