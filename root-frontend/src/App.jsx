import React from "react"
import Home from "./pages/home/Home"
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
import MoreService from "./pages/moreService/moreService"
import SearchResult from "./pages/searchResult/searchResult"
import ThankYou from "./pages/thankYou/ThankYou"
import Slider from "./components/slider/Slider"
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage/TermsAndConditionsPage"


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
        <Route path="/search-result" element={<SearchResult/>} />
        <Route path="/view-profile/:id" element={<SpProfile/>} />
        <Route path="/myservice" element={<AddService/>} />
        <Route path="/createservice" element={<CreateService/>} />
        <Route path="/signup-sp" element={<SignUpSp/>} />
        <Route path="/create-admin" element={<AdminUpload/>} />
        <Route path="/more-service" element={<MoreService/>} />
        <Route path="/welcome" element={<ThankYou/>} />
        <Route path="/slide" element={<Slider/>} />
        <Route path="/terms&condition" element={<TermsAndConditionsPage/>} />
        
        
      </Routes>
     </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
