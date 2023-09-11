import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import PlantsList from "./components/PlantsList";
import RequirementsList from "./components/RequirementsList";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/RequirementsList" element={<RequirementsList/>}/>
      <Route path="/PlantList" element={<PlantsList/>}/>
      <Route path="/RequirementsList/:id" element={<Details/>}/>
      
    </Routes>

     </>
  
  );
}

export default App;
