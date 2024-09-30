import './App.css'
import { BrowserRouter, Routes, Router, Navigate, Form} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import CreatePost from './pages/CreatPost/CreatePost'
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar />
        <div classNmae='container' >
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/post/create' element={<CreatePost />}></Route>        </Routes>
        </div>
        <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
