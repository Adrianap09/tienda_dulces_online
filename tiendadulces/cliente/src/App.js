import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar.jsx";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from "./context/shop-context";
import { ShopAddtoCart } from "./pages/shopAddtoCart/shopAddtoCart";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import EditAdmin from "./pages/admin/editProfileAdmin/editProfileAdmin";
import { EditProduct } from "./pages/admin/editProduct/editProduct";
import StripeContainer from "./pages/Payment/stripeContainer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}/> /*la ruta principal sera para la tienda*/
            <Route path="/shop" element={<ShopAddtoCart />}/>/*ruta principal para cuando se a logeado alguien y pueda usar el boton*/
            <Route path="/cart" element={<Cart />}/>/*ruta para el carrito*/
            <Route path="/login" element={<Login />}/>/*ruta para el login*/
            <Route path="/register" element={<Register />}/>/*ruta para el register*/
            <Route path="/editAdmin" element={<EditAdmin />}/>/*ruta para editar el admin*/
            <Route path="/editInventory" element={<EditProduct />}/>/*ruta para poder editar el inventario*/
            <Route path="/stripe" element={<StripeContainer />}/>/*ruta para poder llegar a la pagina de pago */
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
