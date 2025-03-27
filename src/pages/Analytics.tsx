// src/pages/Analytics.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { AlertCircle, Lock } from 'lucide-react';
import AnalyticsDashboard from '@/components/Dashboard';

const ADMIN_PASSWORD = 'portfolio-admin';

const AnalyticsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [analyticsEnabled, setAnalyticsEnabled] = useState(
    localStorage.getItem('analytics-enabled') !== 'false'
  );

  useEffect(() => {
    // Check if user is already authenticated
    const authToken = sessionStorage.getItem('analytics-auth');
    if (authToken === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      sessionStorage.setItem('analytics-auth', 'true');
    } else {
      setError('Invalid password');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const toggleAnalytics = () => {
    const newValue = !analyticsEnabled;
    setAnalyticsEnabled(newValue);
    localStorage.setItem('analytics-enabled', newValue.toString());
    
    // Reload the page to apply the change
    window.location.reload();
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background p-4">
        <Card className="w-full max-w-md p-6">
          <div className="text-center mb-6">
            <Lock className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Enter the admin password to access analytics</p>
          </div>
          
          {error && (
            <div className="bg-destructive/10 text-destructive rounded-md p-3 mb-4 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="Enter admin password"
              />
            </div>
            
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio Analytics</h1>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Switch 
                id="analytics-toggle" 
                checked={analyticsEnabled}
                onCheckedChange={toggleAnalytics}
              />
              <Label htmlFor="analytics-toggle">
                {analyticsEnabled ? 'Analytics Enabled' : 'Analytics Disabled'}
              </Label>
            </div>
            <Button variant="outline" onClick={() => {
              sessionStorage.removeItem('analytics-auth');
              setIsAuthenticated(false);
            }}>
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-6">
        <AnalyticsDashboard />
      </main>
    </div>
  );
};

export default AnalyticsPage;