import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
    )
}

export default AppRoutes;