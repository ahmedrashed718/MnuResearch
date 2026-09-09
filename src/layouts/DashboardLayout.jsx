import { LayoutDashboard, LogOut } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import Container from '../components/ui/Container';
import { useTranslation } from '../hooks/useTranslation';
import { dashboardNavigation } from '../routes/routeConfig';

function DashboardLayout() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <Container className="flex min-h-16 items-center justify-between gap-4">
          <NavLink to="/" className="text-sm font-bold text-brand-700">
            {t('appName')}
          </NavLink>
          <NavLink to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
            <LogOut className="size-4" aria-hidden="true" />
            {t('actions.publicWebsite')}
          </NavLink>
        </Container>
      </header>

      <Container className="grid gap-6 py-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="rounded-xl border border-slate-200 bg-white p-3 shadow-soft">
          <div className="mb-3 flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-900">
            <LayoutDashboard className="size-4 text-brand-600" aria-hidden="true" />
            {t('common.dashboard')}
          </div>
          <nav className="grid gap-1" aria-label={t('actions.dashboardNavigation')}>
            {dashboardNavigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  }`
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="min-w-0 rounded-xl border border-slate-200 bg-white shadow-soft">
          <Outlet />
        </main>
      </Container>
    </div>
  );
}

export default DashboardLayout;
