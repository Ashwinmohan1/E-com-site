import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';
import Navba from '../Components/Navbar';






function Home() {
  const navigate=useNavigate()
    return (
       <div>
        <Navba/>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
         
          className="d-block w-75  m-auto"
          src="https://images.pexels.com/photos/7678412/pexels-photo-7678412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          
        />      
       

        <Carousel.Caption>
          <h4>"Delicious Delights for Your Furry Friends"</h4>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"          alt="Second slide"
        />
        <Carousel.Caption>
          <h4>Feeding Happiness, One Bowl at a Time</h4>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4>Satisfy Their Taste Buds with Quality Pet Food</h4>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='d-flex flex-row justify-content-around align-items-center gap-3 mt-5'>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/750x/24/54/1a/24541acb383ab3aaea27a5f71f3eb0ce.jpg" />
      <Card.Body>
        <Card.Title>Dog</Card.Title>
        <Button onClick={()=>navigate('/dog')} variant="primary">Dog Food</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/14/f1/93/14f19348ec6fb9af42ec317620ec7384.jpg" />
      <Card.Body>
        <Card.Title>Cat</Card.Title>
        <Button onClick={()=>navigate('/cat')} variant="primary">cat Food</Button>
      </Card.Body>
    </Card>
    </div>
    <Footer/>
    </div>
      );
}

export default Home