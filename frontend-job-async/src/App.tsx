import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Jobs } from "./pages/Jobs";
import { JobDetail } from "./pages/JobDetail";
import { Queues } from "./pages/Queues";
import { QueueDetail } from "./pages/QueueDetail";
import { Settings } from "./pages/Settings";
import { RecurringJobs } from "./pages/RecurringJobs";

// Bootstrap: SEMPRE garante token válido (sobrescreve tokens inválidos de sessões anteriores)
const DEMO_KEY = 'jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2';
const currentToken = localStorage.getItem('nommand_access_token') || localStorage.getItem('token');
if (!currentToken || !currentToken.startsWith('jsk_')) {
  localStorage.setItem('token', DEMO_KEY);
  localStorage.setItem('nommand_access_token', DEMO_KEY);
  localStorage.setItem('organizationId', 'org_demo_001');
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
      retry: 1,
    },
  },
});

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/:id" element={<JobDetail />} />
                <Route path="/queues" element={<Queues />} />
                <Route path="/queues/:id" element={<QueueDetail />} />
                <Route path="/recurring-jobs" element={<RecurringJobs />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Layout>
            <Toaster position="top-right" richColors closeButton />
          </BrowserRouter>
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
