import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Auth } from "./pages/signin"
import { HomePage } from "./pages/home"
import { Team } from "./pages/team"
import { Dashboard } from "./pages/dashboard"
import AboutUs from "./pages/about"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
