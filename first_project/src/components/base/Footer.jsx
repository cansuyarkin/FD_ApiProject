function Footer (props) {
    return <>
    
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-6 col-md mx-5">
        <h5>Films</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><p className="link-secondary text-decoration-none" >Film Title</p></li>
          <li className="mb-1"><p className="link-secondary text-decoration-none" >Release Date</p></li>
          <li className="mb-1"><p className="link-secondary text-decoration-none" >On the air this week</p></li>
          
        </ul>
      </div>
      <div className="col-6 col-md mx-5">
        <h5>Film Details</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><p className="link-secondary text-decoration-none" >Resource</p></li>
          <li className="mb-1"><p className="link-secondary text-decoration-none" >Resource name</p></li>
        </ul>
      </div>
      <div className="col-6 col-md mx-5">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><p className="link-secondary text-decoration-none" >Team</p></li>
          <li className="mb-1"><p className="link-secondary text-decoration-none" >Locations</p></li>
          <li className="mb-1"><p className="link-secondary text-decoration-none" >Privacy</p></li>
          <li className="mb-1"><p className="link-secondary text-decoration-none" >Terms</p></li>
        </ul>
      </div>
    </div>
  </footer>
    </>
}

export default Footer;
