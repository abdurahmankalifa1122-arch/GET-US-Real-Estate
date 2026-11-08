import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in GET-AS Real Estate App:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#101D2B] text-white flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-[#182B3E] p-8 rounded-lg border border-[#C5A46D]/30 shadow-2xl text-center space-y-5">
            <div className="w-12 h-12 rounded bg-[#C5A46D] text-[#101D2B] font-serif font-bold text-2xl flex items-center justify-center mx-auto">
              G
            </div>
            <h2 className="font-serif text-2xl font-bold text-white">
              GET-AS REAL ESTATE
            </h2>
            <p className="text-sm text-slate-300">
              An unexpected issue occurred while rendering the page. Click below to reload.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#C5A46D] hover:bg-[#B5935A] text-[#101D2B] font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Reload Website
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
