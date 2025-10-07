import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Layout from "./Pages/Layout"
import About from "./Pages/About"
import Form from "./Pages/Formdata"

function App() {

  return (
    <>
      <div>

        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
           

          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App
