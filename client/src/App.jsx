
import { Route, Routes } from "react-router-dom";
import Landing from './Pages/Landing';
import Events from './Pages/Events';
import AboutUs from './Pages/AboutUs';
import Speaker from './Pages/Speakers';
import Pass from "./Pages/Pass";
import TnC from "./Pages/TnC";


export default function App() {
  // test cicd
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/Events" element={<Events/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/Speaker" element={<Speaker/>} />
      <Route path='/Pass' element={<Pass/>}/>
      <Route path='/tnc' element={<TnC/>}/>

    </Routes>
    </>
  )
}