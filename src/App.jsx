import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bio' element={<Bio />} />
        </Routes>
      </Router>
    </>
  )
}

function Navbar() {
  return (
    <>
      <Link to='/'><strong>Home</strong></Link>
      <Link style={{marginLeft: "1rem"}} to='/bio'><strong>Bio</strong></Link>
    </>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>This is a home page</p>
    </>
  );
}

function Bio() {
  return (
    <>
      <h1>Bio</h1>
      <p>This is a biography</p>
    </>
  );
}

const PRODUCTS = [
  {
    id: 1,
    name: "digital camera",
    file: "camera.jpg",
    price: 300.00
  },
  {
    id: 2,
    name: "digital camera lens",
    file: "camera lens.jpg",
    price: 79.00
  },
  {
    id: 3,
    name: "lighter",
    file: "lighter.jpg",
    price: 7.99,
  },
  {
    id: 4,
    name: "lipstick",
    file: "lipstick.jpg",
    price: 25.00
  },
  {
    id: 5,
    name: "SD card",
    file: "sd card.jpg",
    price: 50.00
  }
];


export default App
