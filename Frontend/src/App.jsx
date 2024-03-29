import {Route, Routes} from "react-router-dom";

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
import Schedule from "./pages/Schedule/Schedule.jsx";
import MessageList from "./pages/Notifications/MessageList.jsx";

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
                    <Route index element={<MedicPatientList/>}/>
                </Route>
                <Route index element={<MedicPatientList/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/sign-up' element={<SignUp/>}/>
                <Route exact path='/welcome' element={<Welcome/>}/>
                {/*<Route exact path='/componentDemo' element={<Buttons/>}/>*/}
                <Route exact path='/myChild' element={<Child/>}/>
                <Route exact path='/vaccineDictionary' element={<VaccineDictionaryList/>}/>
                <Route exact path='/medicPatients' element={<MedicPatientList/>}/>
                <Route exact path='/parent-home' element={<ParentHome />}/>
                <Route exact path='/faq' element={<FAQ />}/>
                <Route exact path='/schedule' element={<Schedule/>}/>
                <Route exact path='/messages' element={<MessageList/>}/>
            </Routes>
        </>
    )
}

export default App
