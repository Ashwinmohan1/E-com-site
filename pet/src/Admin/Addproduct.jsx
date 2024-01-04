import React, { useContext, useState } from 'react'
import { myContext } from '../Context/Context'
import './Addproduct.css'

const Addproduct = () => {
    const {product,setProduct}=useContext(myContext)
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: '',
        img: '',
      });
      const handleChange = (e) => {
        setNewProduct({
          ...newProduct,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate the form fields
        if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.img) {
          alert('Please fill in all the fields');
          return;
        }
        const newProductId = Date.now();

        // Create the new product object
        const newProductData = {
          id: newProductId,
          title: newProduct.title,
          type: newProduct.category,
          price: newProduct.price,
          image: newProduct.img,
        };
    
        // Add the new product to the products list
        setProduct([...product, newProductData]);
    
        // Clear the form fields
        setNewProduct({
          name: '',
          category: '',
          price: '',
          img:'',
        });
    
        alert('Product added successfully');
    }
    
    
    
  return (
    

    <div className="add-product-container">
    <h3>Add New Product</h3>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={newProduct.title} onChange={handleChange} required />
      </label>
      <label>
        id:
        <input type="text" name="id" value={newProduct.title} onChange={handleChange} required />
      </label>

      <label>
        Type:
        <input type="text" name="type" value={newProduct.type} onChange={handleChange} required />
      </label>

      <label>
        Price:
        <input type="number" name="price" value={newProduct.price} onChange={handleChange} required />
      </label>

      <label>
        Image URL:
        <input type="text" name="image" value={newProduct.image} onChange={handleChange} required />
      </label>

      <button type="submit">Add Product</button>
    </form>
  </div>

  )
}

export default Addproduct