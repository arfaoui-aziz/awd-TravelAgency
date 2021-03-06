import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Hotel from './pages/Hotel';
import AddHotel from './pages/AddHotel';
import Flight from './pages/Flight';
import AddFlight from './pages/AddFlight';
import Excursion from './pages/Excursion';
import AddExcursion from './pages/AddExcursion';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import UpdateHotel from './pages/UpdateHotel';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'hotels', element: <Hotel /> },
        { path: 'flights', element: <Flight /> },
        { path: 'excursions', element: <Excursion /> },
        { path: 'addhotel', element: <AddHotel /> },
        { path: 'updatehotel', element: <UpdateHotel /> },
        { path: 'addflight', element: <AddFlight /> },
        { path: 'addexcursion', element: <AddExcursion /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: 'home', element: <Home /> },
    { path: 'booking/me', element: <Bookings /> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
