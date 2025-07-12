import React, { lazy } from "react"

const ToDoApp = lazy(() => import('./components/ToDo/ToDo-App'))
const Dashboard = lazy(()=>import('./Pages/Dashboard'))
const FormApp = lazy(()=>import('./components/FormApp'))
const About = lazy(()=>import('./Pages/About'));
const Login = lazy(()=>import('./Pages/Login'));
const SearchFilter = lazy(()=>import('./components/SearchFilter/index'))
const Pagination = lazy(()=>import('./components/Pagination/index'))
const Tabs = lazy(()=>import('./components/Tabs/index'))
const ScrollingPagination = lazy(()=>import('./components/ScrollingPagination/index'))
const DragNDrop = lazy(()=>import('./components/DragNDrop/index'))

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
            },
            {
                path:'/search',
                element: SearchFilter,
                name: 'SearchFilter'
            },
            {
                path:'/pagination',
                element: Pagination,
                name: 'Pagination'
            },
            {
                path:'/tabs',
                element: Tabs,
                name: 'Tabs'
            },
            {
                path:'/scrollingpagination',
                element: ScrollingPagination,
                name: 'ScrollingPagination'
            },
            {
                path:'/dragndrop',
                element: DragNDrop,
                name: 'DragNDrop'
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