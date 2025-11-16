import {  Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />} >

          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />


          </Route>
        </Routes>
    </>
  )
}

export default App;