import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import doctorRoute from "./components/router/DoctorRoute";
import DoctorRoute from "./components/router/DoctorRoute";
function App() {
  return (
      <Routes>
          <Route exact path='/' element={<DoctorRoute/>} >
              <Route exact path='/doctor' element={<Home/>} />
          </Route>
          <Route exact path='/login' element={<Login/>} />
      </Routes>
  )
}

export default App
