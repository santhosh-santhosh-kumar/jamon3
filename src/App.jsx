import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className='bg-black text-white'>
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
    </div>
  )
}

export default App
