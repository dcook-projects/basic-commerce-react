import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import product1 from './images/camera lens.jpg'
import product2 from './images/camera.jpg'
import product3 from './images/lighter.jpg'
import product4 from './images/lipstick.jpg'
import product5 from './images/sd card.jpg'


function App() {
  const [cart, setCart] = useState(getDefaultCart());

  function getDefaultCart() {
    let ca = {}
    for(let product of PRODUCTS)
      ca[product.id] = 0;

    return ca;
  }
  
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} />} />
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

function Home({ cart, setCart }) {
  return (
    <>
      <h1>Home</h1>
      <Shop cart={cart} setCart={setCart} />
    </>
  );
}

function Cart({ cart }) {
  return (
    <>
      <h1>Your Cart</h1>
      <div className="customer-cart">
        {PRODUCTS.filter(product => cart[product.id] > 0).map(product => (
          <CartItem key={product.name} data={product} qty={cart[product.id]} />
        ))}
      </div>
    </>
  );
}

function CartItem( { data, qty }) {
  const { id, name, file, price } = data;

  return (
    <div className="product">
      <img src={file} />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>Qty: {qty}</p>
    </div>
  );
}

function Product({ data, cart, setCart }) {
  const { id, name, file, price } = data;

  function handleAddToCart(id) {
    setCart({
      ...cart,
      [id]: cart[id] + 1,
    })
  }

  return (
    <div className="product">
      <img src={file} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button className="add-cart" onClick={() => handleAddToCart(id)} >Add to Cart</button>
    </div>
  );
}

function Shop({ cart, setCart }) {
  return (
    <div className="shop">
      {PRODUCTS.map((product) => (
        <Product data={product} cart={cart} setCart={setCart} key={product.name}/>
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
