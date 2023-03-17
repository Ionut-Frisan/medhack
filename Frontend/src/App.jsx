import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";

import useRequest from "./hooks/useRequest.js";

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import DoctorRoute from "./components/router/DoctorRoute";
import Buttons from "./pages/ComponentDemo/ComponentDemo.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

import './assets/style/index.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Welcome from "./pages/Welcome/Welcome";

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
        <>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<DoctorRoute/>}>
                    <Route exact path='/doctor' element={<Home/>}/>
                </Route>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/sign-up' element={<SignUp/>}/>
                <Route exact path='/componentDemo' element={<Buttons/>}/>
                <Route exact path='/welcome' element={<Welcome/>}/>
            </Routes>
        </>
    )
}

export default App
