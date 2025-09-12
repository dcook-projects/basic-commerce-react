import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import product1 from './images/camera lens.jpg'
import product2 from './images/camera.jpg'
import product3 from './images/lighter.jpg'
import product4 from './images/lipstick.jpg'
import product5 from './images/sd card.jpg'


function App() {
  
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

function Navbar() {
  return (
    <>
      <Link to='/'><strong>Home</strong></Link>
      <Link style={{marginLeft: "1rem"}} to='/cart'><strong>Cart</strong></Link>
    </>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Shop />
    </>
  );
}

function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <p>This is your cart</p>
    </>
  );
}

function Product(props) {
  const { id, name, file, price } = props.data;

  return (
    <div className="product">
      <img src={file} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
}

function Shop() {
  return (
    <div className="shop">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
}

const PRODUCTS = [
  {
    id: 1,
    name: "digital camera",
    file: product1,
    price: 300.00
  },
  {
    id: 2,
    name: "digital camera lens",
    file: product2,
    price: 79.00
  },
  {
    id: 3,
    name: "lighter",
    file: product3,
    price: 7.99
  },
  {
    id: 4,
    name: "lipstick",
    file: product4,
    price: 25.00
  },
  {
    id: 5,
    name: "SD card",
    file: product5,
    price: 50.00
  }
];


export default App
