import { CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";






const  Footer=()=>{

  return (
    <div className="footer " >
      <MDBFooter
        bgColor="dark " 
        className="text-center text-lg-start text-muted p-4  "
      >
        <section className="p-2" style={{color:"white"}} >
          <MDBContainer className="text-center text-md-start mt-2">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h2 className="text-uppercase fw-bold mb-4">
                  <MDBIcon  className="me-2  "  />
                <Link to="/"   style={{textDecoration:'none',color:'lightyellow'}}  ><p className="ic fst-italic  "  >  PetEASE~*  </p>  </Link>
                </h2>
                <p>
                The increasing popularity of pet stores in India has opened the doors to a world of pet care. Now you can enhance your pet's well-being and style with a visit to the charming pet stores PetEase~* across India.                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Customer Service
                </h6>
                <p>
                  <a href="#!" className="text-reset ">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help & FAQs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Payment Method
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Delivery Information
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
                
                <p>
                  <Link to='/men' className="text-reset">
                    Dog Food
                  </Link>
                </p>
                <p>
                  <Link  to='/Women'  className="text-reset">
                Cat Food
                  </Link>
                </p>
                <p>
                  <Link to='/' className="text-reset">
                  New Arrivals
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  petease@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer> 
          <CDBContainer className="d-flex justify-content-center " style={{gap:'10px  '}} > 
          
        <CDBBtn color="secondary">
        {/* <CDBIcon fab icon="facebook" /> */}
        
      </CDBBtn>
      <CDBBtn color="success">
        {/* <CDBIcon fab icon="reddit" /> */}

      </CDBBtn>
      <CDBBtn color="danger">
        {/* <CDBIcon fab icon="twitter" /> */}
    
      </CDBBtn>
      <CDBBtn color="dark">
        {/* <CDBIcon fab icon="instagram" /> */}
   
      </CDBBtn>
      <CDBBtn color="warning">
        {/* <CDBIcon fab icon="google" /> */}
    
      </CDBBtn>


      </CDBContainer>
        </section>
         
        <div className="text-center p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)",color:'white' }}> 
       <div>  © 2023 Copyright:</div> 
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> <br></br>
              Pet Store | Powered by PetEase Store
          </a>
        </div>
      </MDBFooter>
   </div>
   );
}

export default Footer;