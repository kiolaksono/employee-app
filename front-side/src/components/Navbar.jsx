import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.clear()
    navigate("/login")
  }

  return (
    <>
      <div className="navbar bg-red-800">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Employee System</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>

            <Link to="/">
              <a>List of Employee</a>
            </Link>
            </li>
            <li>
              
            <Link to="/addemployee">
              <a>Input Employee</a>
            </Link>
            
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
      
          </ul>
        </div>
      </div>
    </>
  );
}
