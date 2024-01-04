import React from 'react'
import Example from './sidebar'
import { useContext } from "react";
import { myContext } from "../Context/Context";
import { Table, Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';



const AdHome = () => {
 const navigate=useNavigate()
 const {id}= useParams()
  const { product,setProduct } = useContext(myContext);
  console.log(product);

  const handleDelete = (productId) => {
    const deleteproduct= product.filter((produ)=>produ.id!==productId)
    setProduct(deleteproduct)
      console.log(`Delete product with ID: ${productId}`);
  };
 

  // Function to handle the update button click
  const handleUpdate = (productId) => {
    navigate(`/adhome/adminedit/${productId}`)
  // navigate(`adminedit/${productId}`)
  console.log(`Update product with ID: ${productId}`);
  };

  return (
    <div className="mt-5">
     <Example/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p) => (
            <tr key={p.id} >
              <td>
                <img src={p.img} alt={p.name} width="100" />
              </td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
               <button onClick={() => handleUpdate(p.id)}>Edit</button> &nbsp;
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    
  );
};



export default AdHome