import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Estimate from './pages/Estimate';
import NotFound from './pages/NotFound';
import InteriorPainting from './pages/InteriorPainting';
import ExteriorPainting from './pages/ExteriorPainting';
import CabinetRefinishing from './pages/CabinetRefinishing';
import CommercialPainting from './pages/CommercialPainting';
import ResidentialPainting from './pages/ResidentialPainting';
import ColorConsultation from './pages/ColorConsultation';
import DeckStaining from './pages/DeckStaining';
import PressureWashing from './pages/PressureWashing';
import BrokenArrowPainting from './pages/BrokenArrowPainting';
import TulsaPainting from './pages/TulsaPainting';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/get-estimate" element={<Estimate />} />
          <Route path="/interior-painting" element={<InteriorPainting />} />
          <Route path="/exterior-painting" element={<ExteriorPainting />} />
          <Route path="/cabinet-refinishing" element={<CabinetRefinishing />} />
          <Route path="/commercial-painting" element={<CommercialPainting />} />
          <Route path="/residential-painting" element={<ResidentialPainting />} />
          <Route path="/color-consultation" element={<ColorConsultation />} />
          <Route path="/deck-staining" element={<DeckStaining />} />
          <Route path="/pressure-washing" element={<PressureWashing />} />
          {/* Local SEO City Pages */}
          <Route path="/broken-arrow-painting" element={<BrokenArrowPainting />} />
          <Route path="/broken-arrow-interior-painting" element={<BrokenArrowPainting />} />
          <Route path="/broken-arrow-exterior-painting" element={<BrokenArrowPainting />} />
          <Route path="/broken-arrow-cabinet-refinishing" element={<BrokenArrowPainting />} />
          <Route path="/broken-arrow-deck-staining" element={<BrokenArrowPainting />} />
          <Route path="/tulsa-painting" element={<TulsaPainting />} />
          <Route path="/tulsa-interior-painting" element={<TulsaPainting />} />
          <Route path="/tulsa-exterior-painting" element={<TulsaPainting />} />
          <Route path="/tulsa-cabinet-refinishing" element={<TulsaPainting />} />
          <Route path="/tulsa-commercial-painting" element={<TulsaPainting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
