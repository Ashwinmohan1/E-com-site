import React, { useContext } from "react";
import { myContext } from "../Context/Context";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navba from "./Navbar";

const Dog = () => {
  const navigate = useNavigate();
  const { product, cart, setCart } = useContext(myContext);
  const dog = product.filter((value) => value.category === "dog");

  const tocart = (id) => {
    const newcartitem = product.find((x) => x.id === id);
    if (cart.includes(newcartitem)) {
      alert("Product already exists in the cart");
    } else {
      setCart([...cart, newcartitem]);
    }
  };

  return (
    <div>
      <Navba/>
    <div className="d-flex row 3 gap-card-hover">
      {dog.map((p) => (
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

export default Dog;
