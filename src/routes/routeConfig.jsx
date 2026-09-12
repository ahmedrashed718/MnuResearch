import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Agenda = lazy(() => import('../pages/Agenda'));
const Speakers = lazy(() => import('../pages/Speakers'));
const ResearchTopics = lazy(() => import('../pages/ResearchTopics'));
const Workshops = lazy(() => import('../pages/Workshops'));
const Partners = lazy(() => import('../pages/Partners'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Guidelines = lazy(() => import('../pages/Guidelines'));
const Videos = lazy(() => import('../pages/Videos'));
const Registration = lazy(() => import('../pages/Registration'));
const Login = lazy(() => import('../pages/Login'));
const StudentDashboard = lazy(() => import('../pages/StudentDashboard'));
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const publicRoutes = [
  { path: '', element: <Home />, labelKey: 'nav.home', showInNavigation: true },
  { path: 'about', element: <About />, labelKey: 'nav.about' },
  { path: 'agenda', element: <Agenda />, labelKey: 'nav.agenda', showInNavigation: true },
  { path: 'speakers', element: <Speakers />, labelKey: 'nav.speakers', showInNavigation: true },
  { path: 'guidelines', element: <Guidelines />, labelKey: 'nav.guidelines', showInNavigation: true },
  { path: 'research-topics', element: <ResearchTopics />, labelKey: 'nav.researchTopics' },
  { path: 'workshops', element: <Workshops />, labelKey: 'nav.workshops' },
  { path: 'partners', element: <Partners />, labelKey: 'nav.partners', showInNavigation: true },
  { path: 'gallery', element: <Gallery />, labelKey: 'nav.gallery', showInNavigation: true },
  { path: 'videos', element: <Videos />, labelKey: 'nav.videos' },
  { path: 'registration', element: <Registration />, labelKey: 'nav.registration' },
  { path: 'login', element: <Login />, labelKey: 'nav.login' },
  { path: 'contact', element: <Contact />, labelKey: 'nav.contact' },
];

export const dashboardRoutes = [
  { path: 'student', element: <StudentDashboard />, labelKey: 'nav.studentDashboard' },
  { path: 'admin', element: <AdminDashboard />, labelKey: 'nav.adminDashboard' },
];

export const publicNavigation = publicRoutes
  .filter((route) => route.showInNavigation)
  .map((route) => ({
    labelKey: route.labelKey,
    path: route.path ? `/${route.path}` : '/',
  }));

export const dashboardNavigation = dashboardRoutes.map((route) => ({
  labelKey: route.labelKey,
  path: `/dashboard/${route.path}`,
}));

export { NotFound };
