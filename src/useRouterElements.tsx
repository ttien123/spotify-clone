import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import path from './constants/path';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import AuthLayout from './layouts/AuthLayout';
import Register from './pages/Register';
import HomeRegister from './pages/Register/components/HomeRegister';
import RegisterStep from './pages/Register/components/RegisterStep';

function ProtectedRoute() {
    const isAuthenticated = false;
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
}
function RejectedRoute() {
    const isAuthenticated = false;

    return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;
}

const useRouterElements = () => {
    const routeElements = useRoutes([
        {
            path: path.home,
            element: <MainLayout />,
            children: [
                {
                    path: path.home,
                    element: <Home />,
                },
            ],
        },
        {
            path: '',
            element: <RejectedRoute />,
            children: [
                {
                    path: path.login,
                    element: (
                        <AuthLayout>
                            <Login />
                        </AuthLayout>
                    ),
                },
                {
                    path: path.register,
                    element: (
                        <AuthLayout>
                            <Register />
                        </AuthLayout>
                    ),
                    children: [
                        {
                            path: path.register,
                            element: <HomeRegister />,
                        },
                        {
                            path: path.registerInfo,
                            element: <RegisterStep />,
                        },
                    ],
                },
            ],
        },
    ]);
    return routeElements;
};

export default useRouterElements;
