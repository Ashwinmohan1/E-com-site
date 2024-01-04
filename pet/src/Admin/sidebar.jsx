import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Adminedit from './Adminedit';
import { Link } from 'react-router-dom';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Adminedit/>
      <Button variant="primary" onClick={handleShow}>
        Dashboard
      </Button>
      <br/>
      <br/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ADMIN</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to ='/addproduct' className='nav-link '>Add product</Link><br/>
          <Link to ='/adminuser' className='nav-link '>Users</Link><br/>
          <Link to ='/' className='nav-link '>Revenue</Link><br/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;