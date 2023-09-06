import "./App.css";
import Home from "./components/Home";
import Api from "./service/Api";

function App() {
  return (
    <>
      <Api />
      <Home />
    </>
  );
}

export default App;
