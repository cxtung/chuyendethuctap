// import createBrand from "../pages/backend/brand/createBrand";
// import listBrand from "../pages/backend/brand/listBrand";
// import editBrand from "../pages/backend/brand/editbrand";
import Product from "../components/Product";
import Cart from "../components/Card";
import ProductDetail from "../components/ProductDetail";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Blog from "../components/Blog";
import BlogDetails from "../components/BlogDetails";
const routerSite = [
  { path: "/", component: Home },
  { path: "product", component: Product },
  { path: "blog", component: Blog },
  { path: "blogDetail/:id", component: BlogDetails },
  { path: "cart", component: Cart },
  { path: "productDetail/:id", component: ProductDetail },
  { path: "about", component: About },
  { path: "contact", component: Contact },
  { path: "login", component: Login },
  { path: "register", component: Register },
];
export default routerSite;
