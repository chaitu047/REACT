import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar/index.jsx'
import ProtectedRoute from './components/ProtectedRoute/index.jsx';
import Modal from './components/ModalComponent/index.jsx';
import './App.css';

function renderRoutes(routesArray) {
    return routesArray.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <ProtectedRoute>
                        <route.element />
                    </ProtectedRoute>
                </Suspense>
            }
        >
            {route.children && renderRoutes(route.children)}
        </Route>
    ));
}

export default function App() {
    const location = useLocation();
    const [makeVisible, setMakeVisible] = useState(false);

    useEffect(()=>{
        if(location.pathname.includes('modal')){
            setMakeVisible(true);
        }else{
            setMakeVisible(false);
        }
    }, [location]);

    return (
        <>
            <Navbar />
            <Routes>
                {renderRoutes(routes)}
            </Routes>
            <Modal makeVisible={makeVisible} setMakeVisible={setMakeVisible}/>
        </>
    );
}