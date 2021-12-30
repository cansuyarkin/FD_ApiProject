import routes from "../../routes";
import { Link } from "react-router-dom";

function Nav (props) {
    return <>
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <Link className="navbar-brand mx-5" to="#">
          Navbar
        </Link>

        <div className="navbar">
          <Link className="nav-item nav-link active" to="/">
            Home
          </Link>

          <Link className="nav-item nav-link" to="about">
            About
          </Link>

          <Link className="nav-item nav-link" to="products">
            Films
          </Link>

          
        </div>
    </nav>

    

    
    </>
    
}

export default Nav;