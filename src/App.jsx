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


export default App
