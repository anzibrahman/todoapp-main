import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Adduser from "./pages/Adduser";


import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Signup/>}/>
       
          <Route path="/adduser" element={<Adduser />} />
    
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App ;
