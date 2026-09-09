import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Loading from '../components/ui/Loading';

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbf9]">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
