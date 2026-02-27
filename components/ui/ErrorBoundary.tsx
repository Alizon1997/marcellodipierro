import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary] Caught error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-dark px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-brand-accent/10 border border-brand-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-brand-text mb-2">
              Qualcosa è andato storto
            </h2>
            <p className="text-brand-muted mb-6 text-sm">
              Si è verificato un errore imprevisto. Prova a ricaricare la pagina.
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center px-6 py-3 bg-brand-accent text-white font-semibold rounded-lg hover:bg-brand-accent/90 transition-colors shadow-glow"
            >
              Riprova
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
