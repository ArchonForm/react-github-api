import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FavouritesPage } from './pages/FavouritesPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/favourites' element={<FavouritesPage />}></Route>
    </Routes>
  )
}

export default App