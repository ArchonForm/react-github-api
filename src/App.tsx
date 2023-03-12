import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FavouritesPage } from './pages/FavouritesPage'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/favourites' element={<FavouritesPage />}></Route>
        <Route path='/*' element={<Navigate to='/' replace />}></Route>
      </Routes>
    </>
  )
}

export default App
