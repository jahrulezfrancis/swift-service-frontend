import { Route, Routes } from "react-router-dom"
import Homepage from "./Components/Pages/Home/HomePage"
import SignIn from "./Components/Pages/Auth/Login"
import SignUp from "./Components/Pages/Auth/SignUp"
import PageNotFound from "./Components/Pages/PageNotFound/PageNotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
