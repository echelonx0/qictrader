import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNav from './components/layout/BottomNav';

// Pages
import Marketplace from './pages/Marketplace';
import Wallet from './pages/Wallet';
import Trades from './pages/Trades';
import Affiliate from './pages/Affiliate';
import Reseller from './pages/Reseller';
import Trade from './pages/Trade';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/reseller" element={<Reseller />} />
          <Route path="/trade/:id" element={<Trade />} />
        </Routes>
        <BottomNav />
        <div className="h-20"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;