import React, { useState } from 'react';
import { Plus, TrendingUp, Link2, Eye, Edit2, Trash2, Copy, Check } from 'lucide-react';

export default function QicTraderReseller() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [markup, setMarkup] = useState(2);
  const [copied, setCopied] = useState(false);

  const vendorOffers = [
    {
      vendor: 'LiveYoungTrades',
      method: 'FNB E-WALLET',
      rate: 1399042.39,
      vendorMarkup: 8.9,
      range: '200 - 20,000 ZAR',
      available: true
    },
    {
      vendor: 'CryptoKing_SA',
      method: 'CAPITEC PAY',
      rate: 1385230.12,
      vendorMarkup: 7.2,
      range: '500 - 15,000 ZAR',
      available: true
    },
    {
      vendor: 'Dembe',
      method: 'SKRILL',
      rate: 1392500.00,
      vendorMarkup: 8.1,
      range: '500 - 11,758 ZAR',
      available: true
    }
  ];

  const myOffers = [
    {
      id: 1,
      vendor: 'LiveYoungTrades',
      method: 'FNB E-WALLET',
      myMarkup: 3.5,
      vendorMarkup: 8.9,
      totalMarkup: 12.4,
      clicks: 47,
      conversions: 8,
      earned: '1,247.80 ZAR',
      link: 'qictrader.com/offer/xyz123',
      active: true
    },
    {
      id: 2,
      vendor: 'CryptoKing_SA',
      method: 'CAPITEC PAY',
      myMarkup: 2.0,
      vendorMarkup: 7.2,
      totalMarkup: 9.2,
      clicks: 32,
      conversions: 5,
      earned: '845.50 ZAR',
      link: 'qictrader.com/offer/abc456',
      active: true
    }
  ];

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(`https://${link}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const calculateMyRate = (baseRate, vendorMarkup, myMarkup) => {
    const vendorRate = baseRate * (1 + vendorMarkup / 100);
    return vendorRate * (1 + myMarkup / 100);
  };

  const calculateProfit = (amount, markup) => {
    return (amount * markup / 100).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <h1 className="text-xl font-bold" style={{ color: '#154D71' }}>
          Reseller Hub
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Resell vendor offers without holding inventory
        </p>
      </header>

      {/* Hero Banner */}
      <div className="px-4 py-6">
        <div className="rounded-2xl p-6 text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #1C6EA4 0%, #33A1E0 100%)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-90 mb-1">Total Reseller Earnings</div>
              <div className="text-3xl font-bold">2,093.30 ZAR</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <div className="text-xs opacity-75">Active Offers</div>
              <div className="text-xl font-bold">{myOffers.length}</div>
            </div>
            <div>
              <div className="text-xs opacity-75">Total Trades</div>
              <div className="text-xl font-bold">13</div>
            </div>
            <div>
              <div className="text-xs opacity-75">Avg. Markup</div>
              <div className="text-xl font-bold">2.8%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="px-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">💡</span>
            </div>
            <div className="text-sm text-gray-700">
              <strong className="font-semibold" style={{ color: '#154D71' }}>How it works:</strong> Pick any vendor offer, add your markup, share your link. When clients buy through you, the vendor fulfills the trade and you earn the spread—zero capital needed.
            </div>
          </div>
        </div>
      </div>

      {/* My Active Offers */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold" style={{ color: '#154D71' }}>
            My Active Offers
          </h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-sm font-medium transition-all active:scale-95"
            style={{ background: '#33A1E0' }}
          >
            <Plus size={16} />
            Create
          </button>
        </div>

        {myOffers.length > 0 ? (
          <div className="space-y-3">
            {myOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                {/* Offer Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-gray-900">{offer.vendor}</div>
                    <div className="text-sm text-gray-600">{offer.method}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit2 size={16} className="text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Markup Breakdown */}
                <div className="grid grid-cols-3 gap-3 mb-3 pb-3 border-b border-gray-100">
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Vendor</div>
                    <div className="font-semibold text-gray-700">+{offer.vendorMarkup}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Your Spread</div>
                    <div className="font-semibold" style={{ color: '#33A1E0' }}>+{offer.myMarkup}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Client Sees</div>
                    <div className="font-semibold" style={{ color: '#154D71' }}>+{offer.totalMarkup}%</div>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Clicks</div>
                    <div className="font-semibold text-gray-900">{offer.clicks}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Trades</div>
                    <div className="font-semibold text-gray-900">{offer.conversions}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Earned</div>
                    <div className="font-semibold text-green-600">{offer.earned}</div>
                  </div>
                </div>

                {/* Share Link */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="text-xs font-mono text-gray-600 truncate">{offer.link}</div>
                  </div>
                  <button
                    onClick={() => handleCopyLink(offer.link)}
                    className="px-4 py-2 rounded-lg font-medium text-white transition-all active:scale-95"
                    style={{ background: copied ? '#10b981' : '#154D71' }}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
              <Link2 size={24} className="text-gray-400" />
            </div>
            <div className="text-gray-600 mb-4">No active reseller offers yet</div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-2.5 rounded-lg text-white font-medium transition-all active:scale-95"
              style={{ background: '#33A1E0' }}
            >
              Create Your First Offer
            </button>
          </div>
        )}
      </div>

      {/* Available Vendor Offers */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold" style={{ color: '#154D71' }}>
                  Create Reseller Offer
                </h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Select a vendor offer and set your markup percentage
              </p>

              <div className="space-y-3">
                {vendorOffers.map((offer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOffer(offer)}
                    className={`w-full text-left bg-white rounded-xl p-4 border-2 transition-all ${
                      selectedOffer?.vendor === offer.vendor
                        ? 'border-current shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={selectedOffer?.vendor === offer.vendor ? { borderColor: '#33A1E0' } : {}}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold text-gray-900">{offer.vendor}</div>
                        <div className="text-sm text-gray-600">{offer.method}</div>
                      </div>
                      <div className="text-sm font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                        +{offer.vendorMarkup}%
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{offer.range}</div>
                  </button>
                ))}
              </div>

              {selectedOffer && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#154D71' }}>
                    Your Markup %
                  </label>
                  <input
                    type="number"
                    value={markup}
                    onChange={(e) => setMarkup(parseFloat(e.target.value) || 0)}
                    min="0.1"
                    max="20"
                    step="0.1"
                    className="w-full px-4 py-3 border-2 rounded-lg text-lg font-semibold focus:outline-none"
                    style={{ borderColor: '#33A1E0' }}
                  />
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Vendor Markup:</span>
                      <span className="font-medium">+{selectedOffer.vendorMarkup}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Your Markup:</span>
                      <span className="font-medium" style={{ color: '#33A1E0' }}>+{markup}%</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                      <span style={{ color: '#154D71' }}>Client Sees:</span>
                      <span style={{ color: '#154D71' }}>+{(selectedOffer.vendorMarkup + markup).toFixed(1)}%</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Example: On 10,000 ZAR trade</div>
                    <div className="font-semibold" style={{ color: '#154D71' }}>
                      You earn: {calculateProfit(10000, markup)} ZAR
                    </div>
                  </div>

                  <button
                    className="w-full mt-4 py-3 rounded-lg text-white font-semibold transition-all active:scale-95"
                    style={{ background: '#33A1E0' }}
                  >
                    Create Offer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-around">
          {[
            { icon: '🏪', label: 'Market', active: false },
            { icon: '💼', label: 'Wallet', active: false },
            { icon: '🔄', label: 'Reseller', active: true },
            { icon: '🤝', label: 'Affiliates', active: false },
            { icon: '⚙️', label: 'Settings', active: false }
          ].map((item, idx) => (
            <button
              key={idx}
              className={`flex flex-col items-center gap-1 ${
                item.active ? 'text-current' : 'text-gray-400'
              }`}
              style={item.active ? { color: '#154D71' } : {}}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}