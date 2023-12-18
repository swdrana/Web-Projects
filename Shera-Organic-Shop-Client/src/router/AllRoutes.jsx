import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "../utilities/ScrollToTop"
import {LayoutMain, Login, Signup, Home, Products, Campaigns, Coupons, Blog, AboutUs, ContactUs, TermsConditions, Carts, Checkout, DashboardLayout, Dashboard, AddProduct, AddCategory, AllProducts, EditProduct, AdminManagement, PrivateRoute, AdminRoute, ProductDetails, MyOrders, OrderManagement, OrderDetails, UserProfileLayout, UserDashboard, Invoice, EditProfile, AddressBook, AddAddress,NotFound } from './RouteImport'
function AllRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<LayoutMain/>}>
                  <Route index element={<Home/>}/>
                  <Route path="login" element={<Login/>}/>
                  <Route path="signup" element={<Signup/>}/>

                  <Route path="products" element={<Products/>}/>
                  <Route path="products/:category" element={<Products/>}/>
                  <Route path="details/:id" element={<ProductDetails/>}/>
                  <Route path="carts" element={<PrivateRoute><Carts/></PrivateRoute>}/>
                  <Route path="checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}/>
                  <Route path="campaigns" element={<Campaigns/>}/>
                  <Route path="coupons" element={<Coupons/>}/>
                  <Route path="blog" element={<Blog/>}/>
                  <Route path="about-us" element={<AboutUs/>}/>
                  <Route path="contact-us" element={<ContactUs/>}/>
                  <Route path="terms-conditions" element={<TermsConditions/>}/>
                </Route>
                
                <Route path="dashboard" element={<AdminRoute><DashboardLayout/></AdminRoute>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path="addCategory" element={<AddCategory/>}/>
                  <Route path="addProduct" element={<AddProduct/>}/>
                  <Route path="products" element={<AllProducts/>}/>
                  <Route path="products/:id" element={<EditProduct/>}/>
                  <Route path="manage-admin" element={<AdminManagement/>}/>
                  <Route path="all-orders" element={<OrderManagement/>}/>
                  <Route path="all-orders/details/:id" element={<OrderDetails/>}/>
                </Route>

                <Route path="profile" element={<PrivateRoute><UserProfileLayout/></PrivateRoute>}>
                  <Route index element={<UserDashboard/>}/>
                  <Route path="my-order" element={<MyOrders/>}/>
                  <Route path="invoice/:id" element={<Invoice/>}/>
                  <Route path="edit-profile" element={<EditProfile/>}/>
                  <Route path="address" element={<AddressBook/>}/>
                  <Route path="add-address" element={<AddAddress/>}/>
                </Route>
                <Route path="*" element={<LayoutMain/>}>
                  <Route path="*" element={<NotFound/>}/>
                </Route>
              </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes
