import Home from "./components/page/Home";
import About from "./components/page/About";
import Products from "./components/page/Products";
import ProductDetail from "./components/page/ProductDetail";
import SearchProduct from "./components/page/SearchProduct";

const routes = [
    {title:"Home", path:"/", element: Home, isNav: true },
    {title:"About", path:"about", element: About, isNav: true},
    {title:"Products", path:"products", element: Products, isNav: true},
    {title:"ProductDetail", path:"products/:productId", element: ProductDetail, isNav: false},
    {title:"Search Product", path:"search", element: SearchProduct, isNav: false}
]

export default routes;