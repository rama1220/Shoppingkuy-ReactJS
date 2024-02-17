import { createBrowserRouter } from "react-router-dom";
import Product from "./Pages/Product";
import Men from "./Category/Men";
import Women from "./Category/Women";
import Kids from "./Category/Kids";
import Relate from "./Components/Relate/Relate";
import Cart from "./Pages/Cart";
import LoginSingUp from "./Pages/LoginSingUp";
import DetailProduct from "./Components/DetailProduct/DetailProduct";
import App from "./App";
import Search from "./Components/Search/Search";
import Checkout from "./Components/CheckOut/Checkout";
import VirtualAcount from "./Components/VirtualAcount/VirtualAcount";
import PageNotFound from "./Components/404/PageNotFound";
import About from "./Pages/About";
import Allproduct from "./Pages/Allproduct";
import NewCollection from "./Pages/NewCollection"
import BestSeller from "./Pages/BestSeller";
const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Product,
      },
      {
        path: "",
        Component: DetailProduct,
        children: [
          {
            path: "/detail/:id",
            Component: Relate,
          },
        ],
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/men",
        Component: Men,
      },
      {
        path: "/allproduct",
        Component: Allproduct,
      },
      {
        path: "/newcollection",
        Component: NewCollection,
      },
      {
        path: "/bestseller",
        Component: BestSeller,
      },
      {
        path: "",
        Component: DetailProduct,
        children: [
          {
            path: "/men/detail/:id",
            Component: Relate,
          },
        ],
      },
      {
        path: "/women",
        Component: Women,
      },
      {
        path: "",
        Component: DetailProduct,
        children: [
          {
            path: "/women/detail/:id",
            Component: Relate,
          },
        ],
      },
      {
        path: "/kid",
        Component: Kids,
      },
      {
        path: "",
        Component: DetailProduct,
        children: [
          {
            path: "/kid/detail/:id",
            Component: Relate,
          },
        ],
      },
      {
        path: "/search",
        Component: Search,
      },
      {
        path: "",
        Component: DetailProduct,
        children: [
          {
            path: "/search/detail/:id",
            Component: Relate,
          },
        ],
      },
      {
        path: "/allproduct",
        Component: Allproduct,
      },
      {
        path: "",
        Component: DetailProduct,
        children: [
          {
            path: "/allproduct/detail/:id",
            Component: Relate,
          },
        ],
      },
      {
        path: "/newcollection",
        Component: NewCollection,
      },
      {
        path: "",
        Component: DetailProduct,
        children: [
          {
            path: "/newcollection/detail/:id",
            Component: Relate,
          },
        ],
      },
      {
        path: "/bestseller",
        Component: BestSeller,
      },
      {
        path: "",
        Component: DetailProduct,
        children: [
          {
            path: "/bestseller/detail/:id",
            Component: Relate,
          },
        ],
      },
      {
        path: "/login",
        Component: LoginSingUp,
      },
      {
        path: "",
        children: [
          {
            path: "/cart",
            Component: Cart,
          },
          {
            path: "",
            children: [
              {
                path: "/checkout",
                Component: Checkout,
              },
              {
                path: "/virtualAccount",
                Component: VirtualAcount,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "",
    children: [
      { path: "*", Component: PageNotFound },
      { path: "/", Component: Product },
    ],
  },
]);

export default Router;
