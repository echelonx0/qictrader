// import React, { useState } from 'react';
// import { Search, TrendingUp, Shield, Users } from 'lucide-react';
// import Card from '../components/ui/Card';
// import Badge from '../components/ui/Badge';

// const PRIMARY = '#154D71';
// const PRIMARY_LIGHT = '#1C6EA4';
// const ACCENT = '#33A1E0';

// export default function Marketplace() {
//   const [activeTab, setActiveTab] = useState('buy');
//   const [selectedPayment, setSelectedPayment] = useState('all');

//   const vendors = [
//     {
//       name: 'LiveYoungTrades',
//       flag: '🇿🇦',
//       rating: 958,
//       trades: 622,
//       completion: 100,
//       method: 'FNB E-WALLET',
//       range: '200 - 20,000 ZAR',
//       rate: '1,399,042.39 ZAR',
//       markup: '+8.9%',
//       lastSeen: '51 minutes ago'
//     },
//     {
//       name: 'CryptoKing_SA',
//       flag: '🇿🇦',
//       rating: 745,
//       trades: 489,
//       completion: 98,
//       method: 'CAPITEC PAY',
//       range: '500 - 15,000 ZAR',
//       rate: '1,385,230.12 ZAR',
//       markup: '+7.2%',
//       lastSeen: '5 minutes ago'
//     },
//     {
//       name: 'Dembe',
//       flag: '🇰🇪',
//       rating: 346,
//       trades: 351,
//       completion: 100,
//       method: 'SKRILL',
//       range: '500 - 11,758 ZAR',
//       rate: '1,392,500.00 ZAR',
//       markup: '+8.1%',
//       lastSeen: '7 minutes ago'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="px-4 py-3">
//           {/* Top Bar */}
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-xl font-bold" style={{ color: PRIMARY }}>
//               QicTrader
//             </h1>
//             <div className="flex items-center gap-3">
//               <div className="text-right">
//                 <div className="text-xs text-gray-500">Balance</div>
//                 <div className="text-sm font-semibold" style={{ color: PRIMARY }}>
//                   19,885.98 ZAR
//                 </div>
//               </div>
//               <div 
//                 className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
//                 style={{ background: PRIMARY_LIGHT }}
//               >
//                 R
//               </div>
//             </div>
//           </div>

//           {/* Buy/Sell Toggle */}
//           <div className="flex gap-2 mb-4">
//             <button
//               onClick={() => setActiveTab('buy')}
//               className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
//                 activeTab === 'buy'
//                   ? 'text-white'
//                   : 'bg-gray-100 text-gray-600'
//               }`}
//               style={activeTab === 'buy' ? { background: PRIMARY } : {}}
//             >
//               Buy Crypto
//             </button>
//             <button
//               onClick={() => setActiveTab('sell')}
//               className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
//                 activeTab === 'sell'
//                   ? 'text-white'
//                   : 'bg-gray-100 text-gray-600'
//               }`}
//               style={activeTab === 'sell' ? { background: PRIMARY } : {}}
//             >
//               Sell Crypto
//             </button>
//           </div>

//           {/* Search Bar */}
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search amount or payment method..."
//               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Trust Indicators */}
//       <div className="bg-white border-b border-gray-200 px-4 py-3">
//         <div className="flex items-center justify-around text-xs">
//           <div className="flex items-center gap-1.5">
//             <Shield size={16} style={{ color: PRIMARY }} />
//             <span className="text-gray-600">Secure Escrow</span>
//           </div>
//           <div className="flex items-center gap-1.5">
//             <Users size={16} style={{ color: PRIMARY }} />
//             <span className="text-gray-600">3,247 Active</span>
//           </div>
//           <div className="flex items-center gap-1.5">
//             <TrendingUp size={16} style={{ color: PRIMARY }} />
//             <span className="text-gray-600">24/7 Trading</span>
//           </div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="px-4 py-3 bg-white border-b border-gray-200">
//         <div className="flex gap-2 overflow-x-auto pb-1">
//           {['All Methods', 'FNB', 'Capitec', 'Nedbank', 'Skrill', 'PayPal'].map((method) => (
//             <button
//               key={method}
//               onClick={() => setSelectedPayment(method.toLowerCase().replace(' ', '-'))}
//               className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
//                 selectedPayment === method.toLowerCase().replace(' ', '-')
//                   ? 'text-white'
//                   : 'bg-gray-100 text-gray-600'
//               }`}
//               style={
//                 selectedPayment === method.toLowerCase().replace(' ', '-')
//                   ? { background: PRIMARY_LIGHT }
//                   : {}
//               }
//             >
//               {method}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Vendor List */}
//       <div className="px-4 py-4 space-y-3 pb-24">
//         {vendors.map((vendor, idx) => (
//           <Card key={idx} variant="elevated" className="hover:shadow-lg transition-shadow">
//             {/* Vendor Header */}
//             <Card.Header>
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center gap-2">
//                   <div 
//                     className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
//                     style={{ background: PRIMARY }}
//                   >
//                     {vendor.name.substring(0, 2).toUpperCase()}
//                   </div>
//                   <div>
//                     <div className="flex items-center gap-1.5">
//                       <span className="font-semibold text-gray-900">{vendor.name}</span>
//                       <span className="text-lg">{vendor.flag}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
//                       <span className="flex items-center gap-1">
//                         <span className="text-green-600 font-medium">👍 {vendor.rating}</span>
//                       </span>
//                       <span>•</span>
//                       <span>{vendor.trades} trades</span>
//                       <span>•</span>
//                       <Badge size="sm" variant="success">{vendor.completion}%</Badge>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card.Header>

//             {/* Payment Method */}
//             <Card.Body className="mb-3 pb-3 border-b border-gray-100">
//               <div className="text-xs text-gray-500 mb-1">Payment Method</div>
//               <div className="font-semibold" style={{ color: PRIMARY }}>
//                 {vendor.method}
//               </div>
//               <div className="text-xs text-gray-500 mt-1">
//                 Range: {vendor.range}
//               </div>
//             </Card.Body>

//             {/* Rate & Action */}
//             <div className="flex items-center justify-between mb-3">
//               <div>
//                 <div className="text-2xl font-bold" style={{ color: PRIMARY }}>
//                   {vendor.rate.split('.')[0]}
//                   <span className="text-base text-gray-500">.{vendor.rate.split('.')[1]}</span>
//                 </div>
//                 <div className="text-xs text-gray-500">1 USD = 0.92 USD OF BTC</div>
//               </div>
//               <div className="text-right">
//                 <button
//                   className="px-6 py-2.5 rounded-lg text-white font-semibold shadow-sm active:scale-95 transition-transform"
//                   style={{ background: ACCENT }}
//                 >
//                   {activeTab === 'buy' ? 'Buy' : 'Sell'} ₿
//                 </button>
//                 <div className="text-xs font-medium mt-1" style={{ color: ACCENT }}>
//                   {vendor.markup}
//                 </div>
//               </div>
//             </div>

//             {/* Last Seen */}
//             <Card.Footer className="pt-3 mt-3">
//               <Badge.Dot variant="warning">Seen {vendor.lastSeen}</Badge.Dot>
//             </Card.Footer>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Search, TrendingUp, Shield, Users, ChevronDown, RefreshCw, X } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const PRIMARY = '#154D71';
const PRIMARY_LIGHT = '#1C6EA4';
const ACCENT = '#33A1E0';

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('buy');
  const [selectedPayment, setSelectedPayment] = useState('all');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [showResellModal, setShowResellModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [markup, setMarkup] = useState(2);

  const cryptos = [
    { symbol: 'BTC', name: 'Bitcoin', icon: '₿' },
    { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ' },
    { symbol: 'USDT', name: 'Tether', icon: '₮' },
    { symbol: 'USDC', name: 'USD Coin', icon: '$' },
  ];

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
      markupValue: 8.9,
      lastSeen: '51 minutes ago',
      crypto: 'BTC'
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
      markupValue: 7.2,
      lastSeen: '5 minutes ago',
      crypto: 'BTC'
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
      markupValue: 8.1,
      lastSeen: '7 minutes ago',
      crypto: 'BTC'
    }
  ];

  const filteredVendors = vendors.filter(v => v.crypto === selectedCrypto);

  const handleResellClick = (vendor, e) => {
    e.stopPropagation();
    setSelectedOffer(vendor);
    setMarkup(2);
    setShowResellModal(true);
  };

  const calculateProfit = (amount, markup) => {
    return (amount * markup / 100).toFixed(2);
  };

  const handleCreateResellOffer = () => {
    // TODO: Implement API call to create reseller offer
    console.log('Creating reseller offer:', {
      vendor: selectedOffer.name,
      myMarkup: markup,
      totalMarkup: selectedOffer.markupValue + markup
    });
    setShowResellModal(false);
    // Show success message or navigate to reseller hub
  };

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

          {/* Buy/Sell Toggle + Crypto Selector */}
          <div className="flex gap-2 mb-4">
            <div className="flex gap-2 flex-1">
              <button
                onClick={() => setActiveTab('buy')}
                className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
                  activeTab === 'buy'
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                style={activeTab === 'buy' ? { background: PRIMARY } : {}}
              >
                Buy
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
                Sell
              </button>
            </div>

            {/* Crypto Selector */}
            <div className="relative">
              <select
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="appearance-none pl-3 pr-10 py-2.5 rounded-lg font-medium border-2 cursor-pointer focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: PRIMARY,
                  color: PRIMARY,
                  focusRing: ACCENT 
                }}
              >
                {cryptos.map((crypto) => (
                  <option key={crypto.symbol} value={crypto.symbol}>
                    {crypto.icon} {crypto.symbol}
                  </option>
                ))}
              </select>
              <ChevronDown 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                size={18}
                style={{ color: PRIMARY }}
              />
            </div>
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
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor, idx) => (
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
                  <div className="text-xs text-gray-500">1 {selectedCrypto} = 0.92 USD</div>
                </div>
                <div className="text-right">
                  <button
                    className="px-6 py-2.5 rounded-lg text-white font-semibold shadow-sm active:scale-95 transition-transform"
                    style={{ background: ACCENT }}
                  >
                    {activeTab === 'buy' ? 'Buy' : 'Sell'} {cryptos.find(c => c.symbol === selectedCrypto)?.icon}
                  </button>
                  <div className="text-xs font-medium mt-1" style={{ color: ACCENT }}>
                    {vendor.markup}
                  </div>
                </div>
              </div>

              {/* Resell Button & Last Seen */}
              <Card.Footer className="pt-3 mt-3 space-y-3">
                <button
                  onClick={(e) => handleResellClick(vendor, e)}
                  className="w-full py-2.5 rounded-lg font-medium border-2 transition-all active:scale-95 flex items-center justify-center gap-2"
                  style={{ borderColor: PRIMARY_LIGHT, color: PRIMARY_LIGHT }}
                >
                  <RefreshCw size={16} />
                  <span>Resell This Offer</span>
                </button>
                <Badge.Dot variant="warning">Seen {vendor.lastSeen}</Badge.Dot>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-2">No {selectedCrypto} offers available</div>
            <div className="text-sm text-gray-400">Try selecting a different crypto</div>
          </div>
        )}
      </div>

      {/* Resell Modal */}
      {showResellModal && selectedOffer && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold" style={{ color: PRIMARY }}>
                  Resell This Offer
                </h2>
                <button
                  onClick={() => setShowResellModal(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-4">
              {/* Vendor Info */}
              <div className="mb-4 p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">You're reselling offer from:</div>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: PRIMARY }}
                  >
                    {selectedOffer.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{selectedOffer.name}</div>
                    <div className="text-sm text-gray-600">{selectedOffer.method}</div>
                  </div>
                </div>
              </div>

              {/* Markup Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: PRIMARY }}>
                  Your Markup %
                </label>
                <input
                  type="number"
                  value={markup}
                  onChange={(e) => setMarkup(parseFloat(e.target.value) || 0)}
                  min="0.1"
                  max="20"
                  step="0.1"
                  className="w-full px-4 py-3 border-2 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2"
                  style={{ borderColor: ACCENT, focusRing: ACCENT }}
                />
                <div className="text-xs text-gray-500 mt-1">
                  Add your profit margin (0.1% - 20%)
                </div>
              </div>

              {/* Breakdown */}
              <div className="mb-4 p-4 bg-blue-50 rounded-xl space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Vendor's Markup:</span>
                  <span className="font-medium">+{selectedOffer.markupValue}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Your Markup:</span>
                  <span className="font-medium" style={{ color: ACCENT }}>+{markup}%</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t border-blue-200">
                  <span style={{ color: PRIMARY }}>Client Sees:</span>
                  <span style={{ color: PRIMARY }}>+{(selectedOffer.markupValue + markup).toFixed(1)}%</span>
                </div>
              </div>

              {/* Example Calculation */}
              <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="text-xs text-gray-600 mb-2">💰 Example: On 10,000 ZAR trade</div>
                <div className="font-bold text-lg text-green-700">
                  You earn: {calculateProfit(10000, markup)} ZAR
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Zero capital needed - vendor fulfills the trade
                </div>
              </div>

              {/* Info Box */}
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <div className="text-xs text-gray-700">
                    <strong>How it works:</strong> When clients buy through your link, {selectedOffer.name} fulfills the trade and you earn the markup difference. No inventory needed!
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShowResellModal(false)}
                  className="py-3 rounded-lg font-medium border-2 transition-all active:scale-95"
                  style={{ borderColor: '#E5E7EB', color: '#6B7280' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateResellOffer}
                  className="py-3 rounded-lg text-white font-semibold transition-all active:scale-95"
                  style={{ background: ACCENT }}
                >
                  Create Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}