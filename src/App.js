import "./App.css";
import Home from "./components/Home";
import RequirementsList from "./components/RequirementsList";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/RequirementsList" element={<RequirementsList/>}/>
      
    </Routes>

     </>
  
  );
}

export default App;
