import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import HomePage from "./pages/index";
import GraphicsDesignPage from "./pages/graphics-design";
import DataAnalysisPage from "./pages/data-analysis";
import AccountingBookkeepingPage from "./pages/accounting-bookkeeping";
import VirtualAssistancePage from "./pages/virtual-assistance";
import KidsHubPage from "./pages/kids-hub";
import AboutUsPage from "./pages/about-us";
import ContactUsPage from "./pages/contact-us";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/graphics-design" component={GraphicsDesignPage} />
      <Route path="/data-analysis" component={DataAnalysisPage} />
      <Route path="/accounting-bookkeeping" component={AccountingBookkeepingPage} />
      <Route path="/virtual-assistance" component={VirtualAssistancePage} />
      <Route path="/kids-hub" component={KidsHubPage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
