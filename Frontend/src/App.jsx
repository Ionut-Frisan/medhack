import {Route, Routes} from "react-router-dom";

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import DoctorRoute from "./components/router/DoctorRoute";
import Buttons from "./pages/ComponentDemo/ComponentDemo.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

import './assets/style/index.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
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
            </Routes>
        </>
    )
}

export default App
