import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { myContext } from "../Context/Context";

const Login = () => {
  const nav = useNavigate();
  const { user,name,setName,setLogin} = useContext(myContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.N.value;
    const password = event.target.P.value; 
    event.target.reset();
    if (password == "admin" || email == "admin@g") {
      setLogin('admin')
      nav("/adhome");
    } else {  
    const filterUser = user.filter((use) => {
      return use.Ea == email;
    });
    if (filterUser[0].Sp == password) {
      setName([filterUser[0].Fn])
      console.log(name);
      nav("/");
    }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-3">Sign In</h3>
            <div className="mb-3">
              <label htmlFor="N" className="form-label">
                Email address
              </label>
              <input
                id="N"
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="N"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="P" className="form-label">
                Password
              </label>
              <input
                id="P"
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="P"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="customCheck1"
                />
                <label className="form-check-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-3">
              <Link to='/signup'> signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
