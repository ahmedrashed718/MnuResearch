import { Component } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

function ErrorFallback({ error, onReset }) {
  const { t } = useTranslation();

  return (
    <main className="grid min-h-screen place-items-center py-16">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {t('errors.applicationError')}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">
          {t('errors.displayFailed')}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-slate-600">
          {t('errors.tryAgain')}
        </p>
        {error && (
          <div className="mx-auto mt-4 max-w-xl text-left dir-ltr rounded-xl bg-red-50 p-4 border border-red-200 text-xs text-red-800 font-mono overflow-auto max-h-48">
            <p className="font-bold">{error.toString()}</p>
          </div>
        )}
        <Button className="mt-7" onClick={onReset}>
          {t('actions.returnHome')}
        </Button>
      </Container>
    </main>
  );
}

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('Application error:', error, info);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.assign(import.meta.env.BASE_URL || '/');
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
