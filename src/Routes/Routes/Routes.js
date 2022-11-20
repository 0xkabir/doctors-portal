import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default routes;