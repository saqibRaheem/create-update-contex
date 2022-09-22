import React from 'react'
import {Outlet,Link} from "react-router-dom";
// import bootstrap,{Navbar,Container,Nav} from 'react-bootstrap'
export default function Navb() {
  return (
  <>
       {/* <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand to="/Home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link to="/Home">HOME </Nav.Link>
      <Nav.Link to="#features">Aboout</Nav.Link>
      <Nav.Link to="#pricing">Pricing</Nav.Link>
      <link rel="stylesheet" to="/Home" >HoMe</link>
    </Nav>
    </Container>
  </Navbar> */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"   to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/search">search</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Outlet/>
  </>
  )
}
