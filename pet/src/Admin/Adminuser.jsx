import { useContext } from "react";
import { myContext } from "../Context/Context"
// import { Outlet } from "react-router-dom";
import './Adminuser.css'

function Adminuser() {
  const { user } = useContext(myContext)
  console.log(user);
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th> 
            <th>Email</th>
          
            {/* Add other table header columns as needed */}
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.Fn}</td>
              <td>{user.Ln}</td>
              <td>{user.Ea}</td>
              {/* Add other table cells for additional user details */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-75">
          {/* <Outlet /> */}
        </div>
    </div>
  );
}

export default Adminuser;