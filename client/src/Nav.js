import React from "react";
import { Link } from "react-router-dom";


function NavBar({}) {

    return(
        <header>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          {user ? (
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </header>

    )
}

export default NavBar