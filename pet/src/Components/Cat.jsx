import { useContext } from "react";
import { myContext } from "../Context/Context";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navba from "./Navbar";

const Cat = () => {
  const { product } = useContext(myContext);
  const cat = product.filter((value) => value.category === "cat");
  const navigate = useNavigate();

  return (
    <div>
      <Navba/>
    <div className="d-flex row 3 gap-card-hover">
      {cat.map((p) => (
        <div
          onClick={() => {
            navigate(`/details/${p.id}`);
          }}
          className="col-lg-3 col-6 mt-5"
          key={p.id}
        >
          
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={p.img} style={{ height: '300px', objectFit: 'cover' }} />
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
}

export default Cat;
