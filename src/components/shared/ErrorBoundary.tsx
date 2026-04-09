import React, { useState, useEffect, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

export function ErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      setHasError(true);
      setError(event.error);
    };

    const rejectionHandler = (event: PromiseRejectionEvent) => {
      setHasError(true);
      setError(event.reason instanceof Error ? event.reason : new Error(String(event.reason)));
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', rejectionHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', rejectionHandler);
    };
  }, []);

  const handleReset = () => {
    setHasError(false);
    setError(null);
    window.location.reload();
  };

  if (hasError) {
    let errorMessage = "Something went wrong. Please try again.";
    
    try {
      if (error?.message) {
        const parsed = JSON.parse(error.message);
        if (parsed.error && parsed.error.includes('permissions')) {
          errorMessage = "You don't have permission to perform this action. Please sign in or check your account status.";
        }
      }
    } catch (e) {
      // Not a JSON error
    }

    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
        <div className="mb-6 rounded-full bg-red-50 p-4 text-red-600">
          <AlertTriangle size={48} />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-neutral-900">Application Error</h2>
        <p className="mb-8 max-w-md text-neutral-500">
          {errorMessage}
        </p>
        <Button onClick={handleReset} className="flex items-center gap-2 bg-blue-600">
          <RefreshCw size={18} /> Reload Application
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
