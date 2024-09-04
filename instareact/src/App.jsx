import Login from './Login'
import './App.css'
import Signin from './Signin'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
       <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='Signup'element={<Signin/>}/>
       </Routes>
    </>
  )
}
export default App
