import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import LayoutAdmin from "./layouts/layout-Admin/layoutAdmin";
import LayoutSite from "./layouts/layouts-Site/layoutSite";
import routerAdmin from "./router/routerAdmin";
import routerSite from "./router/routerSite";
import { CartProvider } from "./Context/CardContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutSite />}>
            {routerSite.map((route, index) => {
              const Page = route.component;
              return <Route path={route.path} element={<Page />} key={index} />;
            })}
          </Route>
          <Route path="admin" element={<LayoutAdmin />}>
            {routerAdmin.map((route, index) => {
              const Page = route.component;
              return <Route path={route.path} element={<Page />} key={index} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
