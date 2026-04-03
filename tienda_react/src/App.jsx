import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./Componentes/Home/Home";
import { Navbar } from "./Componentes/NavBar/Navbar";

function App() {
  return(
    <>
    
    <Router>
      <Navbar/>
     <Routes>
       <Route path="/" element={ <Home/> }/>
     </Routes>
     </Router>
    </>
    
  )
}


export default App;