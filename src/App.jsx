import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import Homepage from './pages/homepage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path='/homepage' element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
