import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useAuth } from '../contexts/AuthContext';

export function Callback() {
  const navigate = useNavigate();
  const { handleCallback, isAuthenticated } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processCallback = async () => {
      // Verificar se há erro na URL
      const urlParams = new URLSearchParams(window.location.search);
      const errorParam = urlParams.get('error');
      const errorDescription = urlParams.get('error_description');

      if (errorParam) {
        setError(errorDescription || errorParam);
        setIsProcessing(false);
        return;
      }

      // Verificar se há código de autorização
      const code = urlParams.get('code');

      if (!code) {
        setError('No authorization code received');
        setIsProcessing(false);
        return;
      }

      try {
        await handleCallback();
        // Redirecionar para a página salva ou dashboard
        const redirectTo = sessionStorage.getItem('auth_redirect') || '/';
        sessionStorage.removeItem('auth_redirect');
        navigate(redirectTo, { replace: true });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Authentication failed');
        setIsProcessing(false);
      }
    };

    processCallback();
  }, [handleCallback, navigate]);

  // Se já está autenticado, redirecionar
  useEffect(() => {
    if (isAuthenticated && !isProcessing) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, isProcessing, navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
            <CardTitle>Authentication Failed</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => navigate('/login', { replace: true })}
              className="w-full"
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2">
              <Layers className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Job Assync</span>
            </div>
          </div>
          <CardTitle>Signing you in...</CardTitle>
          <CardDescription>
            Please wait while we complete the authentication
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    </div>
  );
}
