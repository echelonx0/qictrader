import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Copy, QrCode, Eye, EyeOff, RefreshCw } from 'lucide-react';
import Header from '../components/layout/Header';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const PRIMARY = '#154D71';
const PRIMARY_LIGHT = '#1C6EA4';

export default function Wallet() {
  const [showBalance, setShowBalance] = useState(true);
  const [activeAsset, setActiveAsset] = useState('BTC');

  const assets = [
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.00142857', fiat: '19,885.98 ZAR', change: '+2.3%' },
    { symbol: 'USDT', name: 'Tether', balance: '450.00', fiat: '8,325.50 ZAR', change: '0.0%' }
  ];

  const transactions = [
    {
      type: 'receive',
      amount: '+0.00085 BTC',
      fiat: '+11,830.45 ZAR',
      status: 'completed',
      date: 'Today, 09:32',
      from: 'Trade with LiveYoungTrades'
    },
    {
      type: 'send',
      amount: '-0.00042 BTC',
      fiat: '-5,845.20 ZAR',
      status: 'completed',
      date: 'Yesterday, 14:18',
      from: 'Withdrawal to external wallet'
    },
    {
      type: 'receive',
      amount: '+150.00 USDT',
      fiat: '+2,775.00 ZAR',
      status: 'pending',
      date: 'Oct 1, 11:05',
      from: 'Deposit from Binance'
    },
    {
      type: 'send',
      amount: '-0.00028 BTC',
      fiat: '-3,892.00 ZAR',
      status: 'completed',
      date: 'Sep 30, 16:45',
      from: 'Trade with CryptoKing_SA'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <Header 
        title="My Wallet"
        rightElement={
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <RefreshCw size={20} style={{ color: PRIMARY }} />
          </button>
        }
      />

      {/* Balance Card */}
      <div className="px-4 py-6">
        <div className="rounded-2xl p-6 text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)` }}>
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm opacity-90">Total Balance</div>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          <div className="mb-6">
            {showBalance ? (
              <>
                <div className="text-4xl font-bold mb-1">28,211.48</div>
                <div className="text-lg opacity-90">ZAR</div>
              </>
            ) : (
              <div className="text-4xl font-bold mb-1">••••••</div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm py-3 rounded-xl transition-colors">
              <ArrowUpRight size={18} />
              <span className="font-medium">Send</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm py-3 rounded-xl transition-colors">
              <ArrowDownLeft size={18} />
              <span className="font-medium">Receive</span>
            </button>
          </div>
        </div>
      </div>

      {/* Assets */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: PRIMARY }}>
          Assets
        </h2>
        <div className="space-y-2">
          {assets.map((asset) => (
            <Card
              key={asset.symbol}
              onClick={() => setActiveAsset(asset.symbol)}
              className={`cursor-pointer transition-all ${
                activeAsset === asset.symbol ? 'ring-2 shadow-md' : ''
              }`}
              style={activeAsset === asset.symbol ? { ringColor: '#33A1E0' } : {}}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: PRIMARY }}>
                    {asset.symbol === 'BTC' ? '₿' : '₮'}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{asset.symbol}</div>
                    <div className="text-sm text-gray-500">{asset.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{asset.balance}</div>
                  <div className="text-sm text-gray-500">{asset.fiat}</div>
                  <div className={`text-xs font-medium ${asset.change.startsWith('+') ? 'text-green-600' : 'text-gray-500'}`}>
                    {asset.change}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl hover:border-gray-300 transition-colors">
            <QrCode size={18} style={{ color: PRIMARY }} />
            <span className="font-medium text-gray-700">Scan QR</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl hover:border-gray-300 transition-colors">
            <Copy size={18} style={{ color: PRIMARY }} />
            <span className="font-medium text-gray-700">Copy Address</span>
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold" style={{ color: PRIMARY }}>
            Recent Activity
          </h2>
          <button className="text-sm font-medium" style={{ color: '#33A1E0' }}>
            View All
          </button>
        </div>

        <div className="space-y-2">
          {transactions.map((tx, idx) => (
            <Card key={idx}>
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'receive'
                      ? 'bg-green-100'
                      : 'bg-blue-100'
                  }`}
                >
                  {tx.type === 'receive' ? (
                    <ArrowDownLeft size={18} className="text-green-600" />
                  ) : (
                    <ArrowUpRight size={18} className="text-blue-600" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <div className="font-semibold text-gray-900">{tx.amount}</div>
                      <div className="text-xs text-gray-500">{tx.fiat}</div>
                    </div>
                    <Badge variant={tx.status}>{tx.status}</Badge>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{tx.from}</div>
                  <div className="text-xs text-gray-400">{tx.date}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}