import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../Styles/nav.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Signup } from '../Pages/Signup';
// import { Route, Routes } from 'react-router-dom';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';
import Workout from '../Pages/Workout';



export const NavMenu = () => {
  return (
    <div className='nav1'>
        <Navbar className='nav' data-bs-theme="dark" sticky="top" xl>
        <Container>
          <Navbar.Brand href="#home">Flexify</Navbar.Brand>
          <Nav className="me-auto">
             <Nav.Link>
                  <Link to="/">Home</Link>
            </Nav.Link> 
            <Nav.Link>
                  <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
                  <Link to="/workout">Workout</Link>
            </Nav.Link>
            <Nav.Link href="#getCoach">Get a coach</Nav.Link>
            <Nav.Link href="#flexifyExpert">Talk to a flexify expert</Nav.Link>
            <Nav.Link href="#corporateWellness">Corporate wellness</Nav.Link>
            <Nav.Link href="#signup">Signup</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/workout" element={<Workout/>}></Route>
    </Routes>
    </div>
  )
}
