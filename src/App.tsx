import { Route, Routes } from "react-router-dom"
import Homepage from "./Components/Pages/Home/HomePage"
import SignIn from "./Components/Pages/Auth/Login"
import SignUp from "./Components/Pages/Auth/SignUp"
import PageNotFound from "./Components/Pages/PageNotFound/PageNotFound"
import { Box } from "@chakra-ui/react"
import NavIndex from "./Components/Navigation/Index"
import VendorPage from "./Components/Pages/Vendors/Vendor"

function App() {

  return (
    <Box>
      <NavIndex />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="vendors" element={<VendorPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  )
}

export default App
