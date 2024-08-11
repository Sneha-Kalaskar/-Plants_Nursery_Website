import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Shop from "./components/Shop"
import { BrowserRouter,Router,Routes,Route } from "react-router-dom"
export default function App() {
  return (
 <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<> <Navbar/>
      <Main/></>}/>
    <Route path="/shop" element={<><Navbar/><Shop/></>}></Route>  
  </Routes>
  </BrowserRouter>
 </>
  )
}