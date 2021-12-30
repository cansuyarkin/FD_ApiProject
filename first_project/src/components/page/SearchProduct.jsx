import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Card from "./Card";

function SearchProduct (props) {

  const [state, setState] = useState([])

    function getData() {
        const baseUrl = 'https://ghibliapi.herokuapp.com/films';
        fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
            setState(json)
        })
    }

    useEffect(() => {
        getData()
    }, [])


    const location = useLocation()
    const navigate = useNavigate()


    const urlParams = new URLSearchParams(location.search)
    const [urlQ, seturlQ] = useState(urlParams.get('filmsearch'))

    const [searchValue, setSearchValue] = useState([])

    function submitHandler(event) {
        event.preventDefault();
        seturlQ(event.target.qInput.value)
        navigate(`/search?filmsearch=${event.target.qInput.value}`)
    }
    
    return <>
    <form onSubmit={submitHandler}>
    <div className="mb-3">
      <label htmlFor="search" className="form-label">Search</label>
      <input 
        name="qInput" 
        defaultValue={urlQ} 
        type="text" 
        className="form-control" 
        id="search"
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Film Title"
      />
    </div>
    <button type="submit" className="btn btn-primary mb-2">Search</button>
  </form>


  {
      location.pathname==="/search" && <h3 className="mt-4">Results for "{urlQ}":
        {
          state.filter(item => item.title.toLowerCase().includes(urlQ) )
          .map(
            item => <Card item={item}/>
          )
        }
        </h3>
  }

    </>
    
}

export default SearchProduct;