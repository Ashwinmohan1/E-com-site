import { useState, useContext } from "react";
import { myContext } from "../Context/Context";
import { Button, Card } from "react-bootstrap";
import Navba from "../Components/Navbar";

function Cart() {
  const { product, details, setDetails } = useContext(myContext);

  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartid = details.map((item) => parseInt(item));

  const filterproduct = product.filter((item) => cartid.includes(item.id));

  const removeFromCart = (productId, price, quantity) => {
    const updatedCart = cartid.filter((item) => item !== productId);
    setDetails(updatedCart);

    // Update total quantity and total price
    setTotalQuantity((prevQuantity) => prevQuantity - quantity);
    setTotalPrice((prevPrice) => prevPrice - price * quantity);
  };

  const incrementQuantity = (productId, price) => {
    setDetails([...details, productId]); // Add the product to the cart
    setTotalQuantity((prevQuantity) => prevQuantity + 1);
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const decrementQuantity = (productId, price, quantity) => {
    const updatedCart = cartid.filter((item) => item !== productId);
    setDetails(updatedCart);

    // Update total quantity and total price
    setTotalQuantity((prevQuantity) => prevQuantity - 1);
    setTotalPrice((prevPrice) => prevPrice - price);

    // Remove the product if the quantity becomes zero
    if (quantity === 1) {
      removeFromCart(productId, price, quantity);
    }
  };

  return (
    <>
    <Navba/> 
      <div>
        <div className="gap-5 container">
          <div className="row" style={{ background: "rgb(230, 230, 217)" }}>
            <h1>CART</h1>
            {filterproduct.map((x) => {
              return (
                <div key={x.id} className="col-lg-4 col-6 mt-3">
                  <Card style={{ maxWidth: "18rem", cursor: "pointer" }} className="hovereffect">
                    <Card.Img variant="top" src={x.img} style={{ maxWidth: "100%", height: "auto" }} />
                    <Card.Body>
                      <Card.Title>{x.name}</Card.Title>
                      <Card.Text>${x.price}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button variant="danger" onClick={() => removeFromCart(x.id, x.price, 1)}>
                          Remove
                        </Button>
                        <div className="d-flex gap-2">
                          <Button variant="success" onClick={() => incrementQuantity(x.id, x.price)}>
                            +
                          </Button>
                          <div>{details.filter((item) => item === x.id).length}</div>
                          <Button
                            variant="warning"
                            onClick={() => decrementQuantity(x.id, x.price, details.filter((item) => item === x.id).length)}
                          >
                            -
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Display total quantity and total price */}
          <div className="mt-3">
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
