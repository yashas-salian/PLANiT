import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Auth } from "./pages/signin"
import { HomePage } from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
