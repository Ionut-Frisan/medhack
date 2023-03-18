import {Route, Routes} from "react-router-dom";

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import DoctorRoute from "./components/router/DoctorRoute";
import Buttons from "./pages/ComponentDemo/ComponentDemo.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

import './assets/style/index.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { initializeStore } from "./store/featutres/auth/auth-slice.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Child from "./pages/Child/Child.jsx";
import Welcome from "./pages/Welcome/Welcome";
import VaccineDictionaryList from "./pages/VaccineDictionary/VaccineDictionaryList";
import MedicPatientList from "./pages/MedicPatients/MedicPatientList";
import ParentHome from "./pages/ParentHome/ParentHome.jsx";
import FAQ from "./pages/FAQ/FAQ";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeStore());
    }, []);
    return (
        <>
            <NavBar/>
            <Routes>
                <Route exact path='/doctor' element={<DoctorRoute/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/doctor/asd' element={<Home/>}/>
                </Route>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/sign-up' element={<SignUp/>}/>
                <Route exact path='/componentDemo' element={<Buttons/>}/>
                <Route exact path='/myChild' element={<Child/>}/>
                <Route exact path='/welcome' element={<Welcome/>}/>
                <Route exact path='/vaccineDictionary' element={<VaccineDictionaryList/>}/>
                <Route exact path='/medicPatients' element={<MedicPatientList/>}/>
                <Route exact path='/parent-home' element={<ParentHome />}/>
                <Route exact path='/faq' element={<FAQ />}/>
            </Routes>
        </>
    )
}

export default App
