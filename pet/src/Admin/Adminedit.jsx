import { useContext } from "react";
import { myContext } from '../Context/Context'
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Adminedit = () => {
  const { product, setProduct } = useContext(myContext);
  const { id } = useParams();
  const handlefilter = product.find((p) => p.id === parseInt(id));
  console.log('filtered =' + handlefilter);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: handlefilter.id,
      name: e.target.name.value,
      img: e.target.img.value,
      Category:e.target.category.value,
      price: e.target.prize.value,
    };

    const updatedProducts = product.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );

    setProduct(updatedProducts);
      
  alert("Product updated successfully!" );
 console.log("Product updated successfully!");
  };

  return (
    <div>
      <h3>Edit Product</h3>
      {handlefilter && (
        <div key={handlefilter.id}>
          <div className="container d-flex justify-content-center align-items-center vh-10 ">
            <div style={{ width: "50%" }}>
              <img width={500} src={handlefilter.img} alt="pet" />
            </div>
            <div style={{ width: "50%" }}>
              <h3>Product Details</h3>
              <h1>{handlefilter.name}</h1>
              <h2>{handlefilter.img}</h2>
              <h2>{handlefilter.category}</h2>
              <h2>{handlefilter.price}</h2>
           
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center vh-50 ">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.name}
                  name="name"
                  id="name"
                  
                  style={{ width: "500px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.img}
                  name="img"
                  id="img"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.category}
                  name="category"
                  id="category"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.price}
                  name="prize"
                  id="prize"
                />
              </Form.Group>

              <Button variant="primary" type="submit" block >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adminedit;