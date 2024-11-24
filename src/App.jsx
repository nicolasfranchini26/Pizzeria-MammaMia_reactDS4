import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Register from './components/RegisterPage/Register'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import Pizza from './components/Pizza/Pizza'


const App = () => {
  return(
    <>
    <Navbar/>
    {/* <Home/> */}
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <Cart/> */}
    <Pizza/>
    <Footer />
    </>
  )
}
export default App