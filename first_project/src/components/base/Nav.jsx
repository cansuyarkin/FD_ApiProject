import { Link } from "react-router-dom";

function Nav (props) {

  const navStyle = {
    navColor: {backgroundColor: "#e5f2fd"},
    navTitle: {fontWeight: "700", fontSize:"25px"},
    navOthers: {fontWeight: "500"}
    }

    return <>
        
    <nav className="navbar navbar-expand-lg navbar-light mb-5" style={navStyle.navColor}>
        <Link className="navbar-brand mx-5" to="/" style={navStyle.navTitle}>
          MyFilms
        </Link>

        <div className="navbar">
          <Link className="nav-item nav-link active" to="/" style={navStyle.navOthers}>
            Home
          </Link>

          <Link className="nav-item nav-link" to="about" style={navStyle.navOthers}>
            About
          </Link>

          <Link className="nav-item nav-link" to="products" style={navStyle.navOthers}>
            Films
          </Link>

          
        </div>
    </nav>

    

    
    </>
    
}

export default Nav;