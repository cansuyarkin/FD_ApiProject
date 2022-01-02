import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail (props) {

    const params = useParams();

    const [data, setData] = useState([]);

   useEffect(() => {
        
        const url = 'https://ghibliapi.herokuapp.com/films'
        fetch(`${url}/${params.productId}`)
        .then(response => response.json())
        .then(json => {
                setData(json)
        })
    

    }, [params.productId])


    const newdata = [];
    newdata.push(data)

    const detailStyle= {
        image: {maxWidth:"100%"}
    }

    return <>
    <h3 className="mb-5">Film Details</h3>

    {
        newdata.map(item => (
            <>
            <div className="row">
                <div className="col-4">
                    <img src={item.image} alt="" style={detailStyle.image}/>
                </div>
                <div className="col-8">
                    <h3>{item.title}</h3>
                    <h4 className="mt-3">Original Title: {item.original_title}</h4>
                    <hr />
                    <p>Release Date: {item.release_date} - Duration: {item.running_time} min.</p>
                    <p>Director: {item.director}</p>
                    <hr />
                    <p>Content: </p>
                    <p>{item.description}</p>
                </div> 
            </div>

            </>
        ))
    }
    </>
}

export default ProductDetail;
