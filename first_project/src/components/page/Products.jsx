import {useEffect, useState} from "react"
import { Link } from "react-router-dom";


function Products (props) {


    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)

    function getData() {
        const baseUrl = 'https://ghibliapi.herokuapp.com/films';
        fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
            setState(json)
            setLoading(false)
        })
    }

    useEffect(() => {
      setTimeout(() => {
        getData()
    },1000)
    }, [])

    if(loading) {
      return <h3>Loading...</h3>
  }
    

    return <>
    <h3>Films</h3>

    <table className="table mt-2">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Director</th>
      <th scope="col">Release Date</th>
    </tr>
  </thead>
  
  <tbody>

    {state.map(item => (
        <tr key={item.id}>
        <td><Link to={`${item.id}`}>{item.title}</Link> </td>
        <td>{item.director}</td>
        <td>{item.release_date}</td>
      </tr>
    ))}

  </tbody>
</table>
    
    </>

    
}

export default Products;


