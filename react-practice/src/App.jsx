import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar/index.jsx'
import ProtectedRoute from './components/ProtectedRoute/index.jsx';

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
    return (
        <>
            <Navbar />
            <Routes>
                {renderRoutes(routes)}
            </Routes>
        </>
    );
}