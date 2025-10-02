import React, { useState } from 'react';
import { Copy, Share2, Users, DollarSign, TrendingUp, Check } from 'lucide-react';

export default function QicTraderAffiliate() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const referralLink = 'https://qictrader.com/?ref=QICYT247';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: 'Total Earnings', value: '4,287.50 ZAR', icon: DollarSign, color: '#154D71' },
    { label: 'Active Referrals', value: '23', icon: Users, color: '#1C6EA4' },
    { label: 'This Month', value: '847.20 ZAR', icon: TrendingUp, color: '#33A1E0' },
    { label: 'Conversion Rate', value: '68%', icon: TrendingUp, color: '#154D71' }
  ];

  const referrals = [
    { name: 'Thabo M.', joined: '2 days ago', trades: 8, earned: '312.40 ZAR', status: 'active' },
    { name: 'Sarah K.', joined: '1 week ago', trades: 15, earned: '528.90 ZAR', status: 'active' },
    { name: 'John D.', joined: '2 weeks ago', trades: 3, earned: '124.50 ZAR', status: 'inactive' },
    { name: 'Lisa M.', joined: '3 weeks ago', trades: 22, earned: '892.35 ZAR', status: 'active' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <h1 className="text-xl font-bold" style={{ color: '#154D71' }}>
          Affiliate Program
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Earn commissions by referring traders
        </p>
      </header>

      {/* Hero Banner */}
      <div className="px-4 py-6">
        <div className="rounded-2xl p-6 text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #154D71 0%, #33A1E0 100%)' }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Users size={20} />
            </div>
            <div>
              <div className="text-sm opacity-90">Commission Rate</div>
              <div className="text-2xl font-bold">15%</div>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-4">
            Earn 15% commission on every trade your referrals complete. No limits, lifetime earnings.
          </p>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <div className="text-xs opacity-75 mb-1">Your Referral Code</div>
              <div className="font-mono font-bold">QICYT247</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${stat.color}15` }}>
                  <stat.icon size={16} style={{ color: stat.color }} />
                </div>
              </div>
              <div className="text-2xl font-bold mb-1" style={{ color: '#154D71' }}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Link */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: '#154D71' }}>
          Share Your Link
        </h2>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-white font-medium transition-all active:scale-95"
              style={{ background: copied ? '#10b981' : '#154D71' }}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Link
                </>
              )}
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium border-2 transition-all active:scale-95" style={{ borderColor: '#154D71', color: '#154D71' }}>
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
          <div className="font-semibold mb-2" style={{ color: '#154D71' }}>
            💡 Maximize Your Earnings
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Share your link on social media</li>
            <li>• Help new traders get started</li>
            <li>• Create tutorial content with your link</li>
            <li>• Join crypto communities and share value</li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'overview'
                ? 'border-b-2 text-current'
                : 'text-gray-500'
            }`}
            style={activeTab === 'overview' ? { borderColor: '#154D71', color: '#154D71' } : {}}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('referrals')}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'referrals'
                ? 'border-b-2 text-current'
                : 'text-gray-500'
            }`}
            style={activeTab === 'referrals' ? { borderColor: '#154D71', color: '#154D71' } : {}}
          >
            My Referrals
          </button>
          <button
            onClick={() => setActiveTab('earnings')}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'earnings'
                ? 'border-b-2 text-current'
                : 'text-gray-500'
            }`}
            style={activeTab === 'earnings' ? { borderColor: '#154D71', color: '#154D71' } : {}}
          >
            Earnings
          </button>
        </div>
      </div>

      {/* Referrals List */}
      {activeTab === 'referrals' && (
        <div className="px-4 mb-6">
          <h2 className="text-lg font-semibold mb-3" style={{ color: '#154D71' }}>
            Your Referrals
          </h2>
          <div className="space-y-2">
            {referrals.map((referral, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: '#1C6EA4' }}>
                      {referral.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{referral.name}</div>
                      <div className="text-xs text-gray-500">Joined {referral.joined}</div>
                    </div>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      referral.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {referral.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Trades</div>
                    <div className="font-semibold" style={{ color: '#154D71' }}>{referral.trades}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Your Earnings</div>
                    <div className="font-semibold text-green-600">{referral.earned}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Earnings History */}
      {activeTab === 'earnings' && (
        <div className="px-4 mb-6">
          <h2 className="text-lg font-semibold mb-3" style={{ color: '#154D71' }}>
            Recent Earnings
          </h2>
          <div className="space-y-2">
            {[
              { user: 'Sarah K.', amount: '+45.20 ZAR', trade: 'BTC Purchase', date: 'Today, 11:23' },
              { user: 'Thabo M.', amount: '+28.50 ZAR', trade: 'USDT Sale', date: 'Today, 09:15' },
              { user: 'Lisa M.', amount: '+67.30 ZAR', trade: 'BTC Purchase', date: 'Yesterday, 16:42' },
              { user: 'Sarah K.', amount: '+52.10 ZAR', trade: 'BTC Sale', date: 'Yesterday, 14:20' }
            ].map((earning, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <DollarSign size={18} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{earning.user}</div>
                      <div className="text-sm text-gray-600">{earning.trade}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{earning.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">{earning.amount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overview Chart Placeholder */}
      {activeTab === 'overview' && (
        <div className="px-4 mb-6">
          <h2 className="text-lg font-semibold mb-3" style={{ color: '#154D71' }}>
            Earnings Trend
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="h-48 flex items-end justify-between gap-2">
              {[45, 62, 58, 73, 68, 85, 92].map((height, idx) => (
                <div key={idx} className="flex-1 flex flex-col justify-end">
                  <div
                    className="w-full rounded-t-lg transition-all"
                    style={{
                      height: `${height}%`,
                      background: idx === 6 ? '#33A1E0' : '#1C6EA4'
                    }}
                  ></div>
                  <div className="text-xs text-center text-gray-500 mt-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                  </div>
                </div>
              ))}
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
            { icon: '📊', label: 'Trades', active: false },
            { icon: '🤝', label: 'Affiliates', active: true },
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