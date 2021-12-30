function Card(props) {

    const cardStyle = {
        card: {width: "22rem"},
        cardTitle:{color:"black", fontSize:"30px"},
        director:{color:"black", fontSize:"18px"},
        cardBody:{color: "black", fontSize: "18px", fontWeight:"350"},
        image:{width:"300px"}
        }

        

    return <>

<div className="card mb-3 mt-5">
  <div className="row g-0">
    <div className="col-3">
      <img src={props.item.image} className="img-fluid rounded-start" alt="..."  style={cardStyle.image}/>
    </div>
    <div className="col-9">
      <div className="card-body">
        <h4 className="card-title" style={cardStyle.cardTitle}>{props.item.title}</h4>
        <h5 className="card-text mt-3">Original Title: {props.item.original_title}</h5>
        <hr />
        <p className="card-text mt-4" style={cardStyle.director}>Director: {props.item.director}</p>
        <p className="card-text mt-4" style={cardStyle.director}>Release Year:{props.item.release_date}</p>
        <hr />
        <p className="card-text mt-4" style={cardStyle.cardBody}>{props.item.description}</p>
      </div>
    </div>
  </div>
</div>

    </>
}

export default Card