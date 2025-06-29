import React, { lazy } from "react"

const ToDoApp = lazy(() => import('./components/ToDo/ToDo-App'))
const Dashboard = lazy(()=>import('./Pages/Dashboard'))
const FormApp = lazy(()=>import('./components/FormApp'))
const About = lazy(()=>import('./Pages/About'));
const Login = lazy(()=>import('./Pages/Login'));

const routes = [
    {
        path: '/',
        element: Dashboard,
        name: 'Dashboard',
        children: [
            {
                path:'/todo',
                element: ToDoApp,
                name: 'ToDo'
            },
            {
                path:'/form',
                element: FormApp,
                name: 'Form'
            }
        ]
    },
    {
        path:'/About',
        element: About,
        name: 'About'
    },
    {
        path:'/Login',
        element: Login,
        name: 'Login'
    }
];

export default routes;