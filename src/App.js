import logo from "./logo.svg";
import "./App.scss";
import TableUsers from "./components/TableUser";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
function App() {
  return (
    <div className="app-container">
   
          <Header />
          <Container>
          <TableUsers />
          </Container>
        
       
    </div>
  );
}

export default App;
