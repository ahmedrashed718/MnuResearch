import { Component } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

function ErrorFallback({ onReset }) {
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
        <Button className="mt-7" onClick={onReset}>
          {t('actions.returnHome')}
        </Button>
      </Container>
    </main>
  );
}

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('Application error:', error, info);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.assign('/');
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
