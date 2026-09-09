import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../components/ui/Loading';
import DashboardLayout from '../layouts/DashboardLayout';
import MainLayout from '../layouts/MainLayout';
import { dashboardRoutes, NotFound, publicRoutes } from './routeConfig';

function AppRoutes() {
  return (
    <Suspense fallback={<Loading fullScreen />}>
      <Routes>
        <Route element={<MainLayout />}>
          {publicRoutes.map((route) => (
            <Route key={route.path || 'home'} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          {dashboardRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
