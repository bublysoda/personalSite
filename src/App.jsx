import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import Homepage from './pages/homepage';
import AboutMe from './pages/aboutme';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path='/homepage' element={<Homepage />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
