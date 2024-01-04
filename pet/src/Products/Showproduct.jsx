import React, { useContext } from "react";
import { myContext } from "../Context/Context";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Products.css';
import Navba from "../Components/Navbar";


const Showproduct = () => {
  const { product } = useContext(myContext);
  const navigate = useNavigate();

  return (
    <div>
      <Navba/>
    <div className="row gap-4 mt-5 justify-content-center">
      {product.map((p) => (
        <div
          onClick={() => {
            navigate(`/details/${p.id}`);
          }}
          className="col-lg-3 col-6 mt-5"
          key={p.id}
        >
          
          <Card style={{ width: '100%' }}>
            <Card.Img
              variant="top"
              src={p.img}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>{p.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Showproduct;
