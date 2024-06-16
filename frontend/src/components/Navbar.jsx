import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const log = ()=>{
    navigate("/Login")
  }
  const sign=()=>{
    navigate("/Signup")
  }
  const add = ()=>{
    navigate("/addtask");
  }
 
    const all = () => {
      navigate("/");
    };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <p className="navbar-brand">USER MANAGEMENT</p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p
                  className="nav-link active"
                  aria-current="page"
                  onClick={add}
                >
                  Add user
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={sign}>
                  Signup
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={log}>
                  Login
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={all}>
                  Viewall users
                </p>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
