import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { myContext } from '../Context/Context';

function Navba() {
  const nav = useNavigate();
  const { name, setName, details } = useContext(myContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  const handleClick = () => {
    nav('/signup');
  };

  return (
    <div className="mb-3">
      <Navbar bg="dark" variant="dark" style={{ height: '100px' }}>
        <Container className="text-white">
          <Link to="/" className="navbar-brand">
            PetEase
          </Link>
          <Nav className="me-auto d-flex gap-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/cat" className="nav-link">
              Cat
            </Link>
            <Link to="/dog" className="nav-link">
              Dog
            </Link>
            <Link to="/product" className="nav-link">
              Product
            </Link>
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="badge bg-danger">{details.length}</span>
            </Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
            &nbsp;&nbsp;
          </Form>
          {name.length === 0 ? (
            <Button onClick={handleClick}>
              <FontAwesomeIcon icon={faUser} beatFade />
            </Button>
          ) : (
            <>
              <Button onClick={() => setName([])}>Logout</Button>&nbsp;
              <span style={{ color: 'white' }}>{name}</span>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Navba;
