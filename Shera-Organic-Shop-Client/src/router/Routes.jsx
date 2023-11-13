import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../layout/LayoutMain";
import Login from "../pages/Authentication/Login/Login";
import Signup from "../pages/Authentication/signup/Signup";
import Home from "../pages/Home/Home";
import LayoutCategories from "../layout/LayoutCategories";
import Products from "../pages/Products/Products";
import Campaigns from "../pages/Campaigns/Campaigns";
import Coupons from "../pages/Coupons/Coupons";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import Carts from "../pages/Carts/Carts";
import Checkout from "../pages/Checkout/Checkout";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/AddProduct";
import AddCategory from "../pages/Dashboard/AddCategory";
import ProductsDetails from "../pages/Dashboard/products/ProductsDetails";
import EditProduct from "../pages/Dashboard/products/editProduct";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "signup",
          element: <Signup/>,
        },
        {
          // TODO: Need to change here
          path:"categories",
          element:<LayoutCategories/>,
          children:[
            {
              path:'biscuits',
              element: <Login/>,
            },
            {
              path:'breakfast',
              element: <Login/>,
            },
            {
              path:'baby',
              element: <Login/>,
            },
            {
              path:'organic',
              element: <Login/>,
            }
          ]
        },
        {
          path:'products',
          element:<Products/>
        },
        {
          path:'carts',
          element:<Carts/>
        },
        {
          path:'checkout',
          element:<Checkout/>
        },
        {
          path:'campaigns',
          element:<Campaigns/>
        },
        {
          path:'coupons',
          element:<Coupons/>
        },
        {
          path:'blog',
          element:<Blog/>
        },
        {
          path:'about-us',
          element:<AboutUs/>
        },
        {
          path:'contact-us',
          element:<ContactUs/>
        },
        {
          path:'terms-conditions',
          element:<TermsConditions/>
        }
      ],
    },
    {
      path:"dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:'',
          element: <Dashboard/>,
        },
        {
          path:'addCategory',
          element: <AddCategory/>,
        },
        {
          path:'addProduct',
          element: <AddProduct/>,
        },
        {
          path:'products',
          element: <ProductsDetails/>,
        },
        {
          path:'products/:id',
          element: <EditProduct/>,
        }
      ]
    },
  ]);