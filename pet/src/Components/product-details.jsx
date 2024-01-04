import { useContext } from "react"
import { myContext } from "../Context/Context"
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";



const ProDetails = () => {
  const {user,setUser,name}=useContext(myContext)
  const nav= useNavigate()
  const {product,details,setDetails}=useContext(myContext)
  console.log(product);

  const { id } = useParams()
  const filterid = product.filter((item) => item.id == id);
  console.log(id);


  const addtocart = () => {
    
    if (name.length!==0) {
      setDetails([...details, id]);
      alert("Item added to cart. Go to cart.");
      nav("/cart");
    } else {
      
      alert('please log in')
    }
  };
  
 
  return (
    <div className="row gap-3 mt-5">
      {filterid .map((p)=>(
        <Card style={{ width: '18rem' }} className="col-9 col-lg-6 ">
        <Card.Img variant="top" src={p.img}/>
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Text>
           {p.price}
          </Card.Text>
          <Button onClick={addtocart}> Add to cart</Button> <br />
        </Card.Body>
      </Card>
      ))}
    </div>
  )
}

export default ProDetails