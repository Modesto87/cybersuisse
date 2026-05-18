import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { Warning, ArrowClockwise } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const { t } = useTranslation();

  // When encountering an error in the development mode, rethrow it and don't display the boundary.
  // The parent UI will take care of showing a more helpful dialog.
  if (import.meta.env.DEV) throw error;

  return (
    <div className="min-h-screen bg-bg text-fg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Alert variant="destructive" className="mb-6">
          <Warning className="h-4 w-4" />
          <AlertTitle>{t('error.title')}</AlertTitle>
          <AlertDescription>
            {t('error.description')}
          </AlertDescription>
        </Alert>

        <div className="bg-bg-inset border border-white/10 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-sm text-fg-secondary mb-2">{t('error.details')}</h3>
          <pre className="text-xs text-destructive bg-bg-overlay p-3 rounded border border-white/10 overflow-auto max-h-32">
            {error.message}
          </pre>
        </div>

        <Button
          onClick={resetErrorBoundary}
          className="btn-primary w-full"
        >
          <ArrowClockwise className="mr-2 h-4 w-4" />
          {t('error.tryAgain')}
        </Button>
      </div>
    </div>
  );
};