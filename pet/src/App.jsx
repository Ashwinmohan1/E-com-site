
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navba from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
// import Footer from './Components/Footer';
import {myContext} from './Context/Context'
import { useState } from 'react';
import { Products } from './Products/Products';
import Showproduct from './Products/Showproduct';
import Dog from './Components/Dog';
import Cat from './Components/Cat';
import ProDetails from './Components/product-details';
import Cart from './Cart/Cart';
import AdHome from './Admin/Adminhome';
import Adminedit from './Admin/Adminedit';
import Adminuser from './Admin/Adminuser';
import Addproduct from './Admin/Addproduct';




function App() {
  const [product,setProduct]=useState(Products)
  const [user,setUser]=useState([])
  const [cart,setCart]=useState([])
  const[details,setDetails]=useState([])
  const[name , setName]=useState([])
  const [login,setLogin] = useState([])
  const [newProduct,setNewproduct] = useState(Products)


  return (

    <>
      <div>
        <myContext.Provider value= {{product,setProduct,user,setUser,cart,setCart,details,setDetails,name,setName,login,setLogin,newProduct,setNewproduct}}>
        
        <BrowserRouter>
        {/* <Navba/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/product' element={<Showproduct/>}/>
          <Route path='/dog' element={<Dog/>}/>
          <Route path='/cat' element={<Cat/>}/>
          <Route path='/cart' element={<Cart/>}/>
         <Route path='/details/:id' element={<ProDetails/>}/>
         <Route path='/adhome' element={<AdHome/>}/>
         <Route path='/adhome/adminedit/:id' element={<Adminedit/>}/>
         <Route path='/adminuser' element={<Adminuser/>}/>
         <Route path ='/addproduct' element={<Addproduct/>}/>

         

        </Routes>
        </BrowserRouter>
        </myContext.Provider>
      
      </div>
      
    </>
  )
}

export default App
