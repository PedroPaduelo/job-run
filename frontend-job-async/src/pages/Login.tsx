import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useAuth } from '../contexts/AuthContext';

export function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading } = useAuth();

  // Se já está autenticado, redirecionar para dashboard
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleLogin = async () => {
    // Redireciona para o Auth Service
    await login();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
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
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            Sign in with your Nômade account to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleLogin} className="w-full" size="lg">
            Sign in with Nômade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
