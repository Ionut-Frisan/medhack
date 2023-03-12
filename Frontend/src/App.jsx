import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import DoctorRoute from "./components/router/DoctorRoute";
import useRequest from "./hooks/useRequest.js";
import {useEffect} from "react";
import './App.scss';
import Buttons from "./pages/ComponentDemo.jsx";
function App() {
    const {get, post} = useRequest();

    const callback = (params) => {
        console.log(params);
    }

    const login = async () => {
        await get('/get', callback, callback);
    }
    const testPost = async () => {
        await post('/post', {asd: 'dsa'}, callback, callback);
    }
    useEffect(() => {
        login().catch(console.error);
        testPost().catch(console.error);
    }, [])
  return (
      <Routes>
          <Route exact path='/' element={<DoctorRoute/>} >
              <Route exact path='/doctor' element={<Home/>} />
          </Route>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/componentDemo' element={<Buttons/>} />
      </Routes>
  )
}

export default App
