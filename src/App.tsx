import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TypingLoader from "./components/TypingLoader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadApp = async () => {
      // Create a promise that resolves when the DOM is completely loaded
      const domLoaded = new Promise<void>(resolve => {
        if (document.readyState === 'complete') {
          resolve();
        } else {
          window.addEventListener('load', () => resolve(), { once: true });
        }
      });
      
      // Create a promise that resolves when initial route components are loaded
      const componentsLoaded = new Promise<void>(resolve => {
        // Check if Index component is loaded
        const checkComponentsLoaded = () => {
          if (Index && NotFound) {
            resolve();
          }
        };
        
        // Components might already be loaded
        checkComponentsLoaded();
        
        // If not already loaded, we'll check again after a small delay
        // This is a fallback in case component imports are still resolving
        setTimeout(checkComponentsLoaded, 100);
      });
      
      // Create a promise that enforces a minimum animation duration
      const minimumAnimationTime = new Promise<void>(resolve => {
        // Show animation for at least 2 seconds (adjust as needed)
        setTimeout(resolve, 2000);
      });
      
      // Wait for DOM, components, and minimum animation time
      await Promise.all([domLoaded, componentsLoaded, minimumAnimationTime]);
      
      setIsLoading(false);
    };
    
    loadApp();
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isLoading) {
        const loaderElement = document.getElementById('typing-loader');
        if (loaderElement) {
          loaderElement.classList.remove('animate');
          setTimeout(() => loaderElement.classList.add('animate'), 10);
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isLoading]);
  
  if (isLoading) {
    return <TypingLoader id="typing-loader" />;
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;