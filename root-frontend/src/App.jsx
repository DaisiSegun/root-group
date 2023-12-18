import React from "react"
import Home from "./pages/home/home"
import Sps from "./pages/sps/Sps"
import SpProfile from "./pages/spProfile/SpProfile"
import AddService from "./pages/addService/AddService"
import CreateService from "./pages/createService/CreateService"
import SignIn from "./pages/signIn/SignIn"
import SignUpSp from "./pages/signUpSp/SignUpSp"
import Register from "./pages/register/Register"


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AdminUpload from "./pages/adminUpload/adminUpload"


function App() {
  const queryClient = new QueryClient();

  return (
    <>
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/findsp/:cats" element={<Sps/>} />
        <Route path="/view-profile" element={<SpProfile/>} />
        <Route path="/addservice" element={<AddService/>} />
        <Route path="/createservice" element={<CreateService/>} />
        <Route path="/signup-sp" element={<SignUpSp/>} />
        <Route path="/create-admin" element={<AdminUpload/>} />
        
      </Routes>
     </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
