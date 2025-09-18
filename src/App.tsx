import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<div>Home Page</div>} />
          <Route path='/shop' element={<div>Shop Page</div>} />
          <Route path='/about' element={<div>About Us Page</div>} />
          <Route path='/contact' element={<div>Contact Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
