import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Infinite from './components/Infinite'
import Product from './components/Product'
import Cart from './components/Cart'
import products from './products.json'
import NotFound from './components/NotFound'
import VisNetwork from './components/VisNetwork'
import NavBar from './components/NavBar'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/pagination' />} />
          <Route path='/pagination' element={<Product {...products} />} />
          <Route path='/infinite-scrolling' element={<Infinite {...products} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/visnetwork' element={<VisNetwork />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
