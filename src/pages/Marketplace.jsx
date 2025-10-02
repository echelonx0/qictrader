import React, { useState } from 'react';
import { Search, TrendingUp, Shield, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const PRIMARY = '#154D71';
const PRIMARY_LIGHT = '#1C6EA4';
const ACCENT = '#33A1E0';

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('buy');
  const [selectedPayment, setSelectedPayment] = useState('all');

  const vendors = [
    {
      name: 'LiveYoungTrades',
      flag: '🇿🇦',
      rating: 958,
      trades: 622,
      completion: 100,
      method: 'FNB E-WALLET',
      range: '200 - 20,000 ZAR',
      rate: '1,399,042.39 ZAR',
      markup: '+8.9%',
      lastSeen: '51 minutes ago'
    },
    {
      name: 'CryptoKing_SA',
      flag: '🇿🇦',
      rating: 745,
      trades: 489,
      completion: 98,
      method: 'CAPITEC PAY',
      range: '500 - 15,000 ZAR',
      rate: '1,385,230.12 ZAR',
      markup: '+7.2%',
      lastSeen: '5 minutes ago'
    },
    {
      name: 'Dembe',
      flag: '🇰🇪',
      rating: 346,
      trades: 351,
      completion: 100,
      method: 'SKRILL',
      range: '500 - 11,758 ZAR',
      rate: '1,392,500.00 ZAR',
      markup: '+8.1%',
      lastSeen: '7 minutes ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-3">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold" style={{ color: PRIMARY }}>
              QicTrader
            </h1>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-gray-500">Balance</div>
                <div className="text-sm font-semibold" style={{ color: PRIMARY }}>
                  19,885.98 ZAR
                </div>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: PRIMARY_LIGHT }}
              >
                R
              </div>
            </div>
          </div>

          {/* Buy/Sell Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('buy')}
              className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
                activeTab === 'buy'
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              style={activeTab === 'buy' ? { background: PRIMARY } : {}}
            >
              Buy Crypto
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
                activeTab === 'sell'
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              style={activeTab === 'sell' ? { background: PRIMARY } : {}}
            >
              Sell Crypto
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search amount or payment method..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-around text-xs">
          <div className="flex items-center gap-1.5">
            <Shield size={16} style={{ color: PRIMARY }} />
            <span className="text-gray-600">Secure Escrow</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={16} style={{ color: PRIMARY }} />
            <span className="text-gray-600">3,247 Active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp size={16} style={{ color: PRIMARY }} />
            <span className="text-gray-600">24/7 Trading</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {['All Methods', 'FNB', 'Capitec', 'Nedbank', 'Skrill', 'PayPal'].map((method) => (
            <button
              key={method}
              onClick={() => setSelectedPayment(method.toLowerCase().replace(' ', '-'))}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedPayment === method.toLowerCase().replace(' ', '-')
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              style={
                selectedPayment === method.toLowerCase().replace(' ', '-')
                  ? { background: PRIMARY_LIGHT }
                  : {}
              }
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Vendor List */}
      <div className="px-4 py-4 space-y-3 pb-24">
        {vendors.map((vendor, idx) => (
          <Card key={idx} variant="elevated" className="hover:shadow-lg transition-shadow">
            {/* Vendor Header */}
            <Card.Header>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: PRIMARY }}
                  >
                    {vendor.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-gray-900">{vendor.name}</span>
                      <span className="text-lg">{vendor.flag}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <span className="text-green-600 font-medium">👍 {vendor.rating}</span>
                      </span>
                      <span>•</span>
                      <span>{vendor.trades} trades</span>
                      <span>•</span>
                      <Badge size="sm" variant="success">{vendor.completion}%</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Header>

            {/* Payment Method */}
            <Card.Body className="mb-3 pb-3 border-b border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Payment Method</div>
              <div className="font-semibold" style={{ color: PRIMARY }}>
                {vendor.method}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Range: {vendor.range}
              </div>
            </Card.Body>

            {/* Rate & Action */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-2xl font-bold" style={{ color: PRIMARY }}>
                  {vendor.rate.split('.')[0]}
                  <span className="text-base text-gray-500">.{vendor.rate.split('.')[1]}</span>
                </div>
                <div className="text-xs text-gray-500">1 USD = 0.92 USD OF BTC</div>
              </div>
              <div className="text-right">
                <button
                  className="px-6 py-2.5 rounded-lg text-white font-semibold shadow-sm active:scale-95 transition-transform"
                  style={{ background: ACCENT }}
                >
                  {activeTab === 'buy' ? 'Buy' : 'Sell'} ₿
                </button>
                <div className="text-xs font-medium mt-1" style={{ color: ACCENT }}>
                  {vendor.markup}
                </div>
              </div>
            </div>

            {/* Last Seen */}
            <Card.Footer className="pt-3 mt-3">
              <Badge.Dot variant="warning">Seen {vendor.lastSeen}</Badge.Dot>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
}