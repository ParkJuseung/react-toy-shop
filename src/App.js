import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from './data.js'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios'

function App() {
  let [shoes] = useState(data)

  return (
    <div className="App">
    <Link to = "/detail">상세페이지</Link>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to = "/">
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
              
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>  
      <Route path = '/' element = {<Main shoes = {shoes}/>}/>
      <Route path = '/detail/:id' element = { <Detail shoes = {shoes}/>}/>
      <Route path = '/detail/:id' element = { <Detail shoes = {shoes}/>}/>
      <Route path = '/detail/:id' element = { <Detail shoes = {shoes}/>}/>
    </Routes>
     <button onClick={() => {
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((data) => {console.log(data.data)})
      .catch(() => {
        console.log('error')
      })
     }}>버튼</button>
    </div>
  );
}

function Main(props){

  return(
    <>
    <div className='main-bg'/>
    <Container>
    <Row>
      {
        props.shoes.map(function(a, i){
          return (
            <Card shoes = {props.shoes[i]}/>
          )
        })
      }
    </Row>
  </Container>
  </>
  )

}


function Card(props) {
  return (
    <Col sm>
          <img src = {props.shoes.img} width = "80%"/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;
