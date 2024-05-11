import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "login" element ={<Login/>} />
        <Route path='registration' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
     {/* <Register/> */}
    </div>
  );
}

export default App;