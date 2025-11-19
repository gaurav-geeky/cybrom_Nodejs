import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import Multer from "./pages/Multer";
import Image from "./pages/Image";
import MultipleFiles from "./pages/MultipleFiles";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="multer" element={<Multer />} />
          <Route path="image" element={< Image />} />
          <Route path="multiplefile" element={< MultipleFiles />} />

        </Route>
      </Routes>


      <Routes>
        <Route path="/dashboard" element={< UserDashboard />}>

        </Route>
      </Routes>

    </>
  )
}

export default App;