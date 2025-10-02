import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const PRIMARY = '#154D71';
const ACCENT = '#33A1E0';

export default function Trades() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  const trades = [
    {
      id: 'TRD-2847',
      type: 'buy',
      crypto: 'BTC',
      amount: '0.00085',
      fiat: '11,830.45 ZAR',
      vendor: 'LiveYoungTrades',
      status: 'pending_payment',
      timeRemaining: '29:45',
      method: 'FNB E-WALLET',
      createdAt: 'Today, 14:23'
    },
    {
      id: 'TRD-2846',
      type: 'sell',
      crypto: 'BTC',
      amount: '0.00042',
      fiat: '5,845.20 ZAR',
      vendor: 'CryptoKing_SA',
      status: 'payment_sent',
      timeRemaining: '18:32',
      method: 'CAPITEC PAY',
      createdAt: 'Today, 12:10'
    },
    {
      id: 'TRD-2845',
      type: 'buy',
      crypto: 'USDT',
      amount: '150.00',
      fiat: '2,775.00 ZAR',
      vendor: 'Dembe',
      status: 'completed',
      method: 'SKRILL',
      completedAt: 'Yesterday, 16:45'
    },
    {
      id: 'TRD-2844',
      type: 'sell',
      crypto: 'BTC',
      amount: '0.00028',
      fiat: '3,892.00 ZAR',
      vendor: 'LiveYoungTrades',
      status: 'completed',
      method: 'FNB E-WALLET',
      completedAt: 'Oct 1, 11:30'
    },
    {
      id: 'TRD-2843',
      type: 'buy',
      crypto: 'BTC',
      amount: '0.00055',
      fiat: '7,650.00 ZAR',
      vendor: 'CryptoKing_SA',
      status: 'cancelled',
      method: 'CAPITEC PAY',
      cancelledAt: 'Sep 30, 09:15'
    }
  ];

  const getStatusConfig = (status) => {
    const configs = {
      pending_payment: {
        label: 'Pending Payment',
        variant: 'warning',
        icon: Clock,
        color: '#F59E0B'
      },
      payment_sent: {
        label: 'Payment Sent',
        variant: 'info',
        icon: AlertCircle,
        color: ACCENT
      },
      completed: {
        label: 'Completed',
        variant: 'success',
        icon: CheckCircle,
        color: '#10B981'
      },
      cancelled: {
        label: 'Cancelled',
        variant: 'danger',
        icon: XCircle,
        color: '#EF4444'
      }
    };
    return configs[status] || configs.pending_payment;
  };

  const activeTrades = trades.filter(t => ['pending_payment', 'payment_sent'].includes(t.status));
  const completedTrades = trades.filter(t => t.status === 'completed');
  const cancelledTrades = trades.filter(t => t.status === 'cancelled');

  const displayTrades = activeTab === 'active' 
    ? activeTrades 
    : activeTab === 'completed' 
    ? completedTrades 
    : cancelledTrades;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header.WithTabs
        title="My Trades"
        tabs={[
          { id: 'active', label: `Active (${activeTrades.length})` },
          { id: 'completed', label: `Completed (${completedTrades.length})` },
          { id: 'cancelled', label: `Cancelled (${cancelledTrades.length})` }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Trades List */}
      <div className="px-4 py-4 space-y-3">
        {displayTrades.length > 0 ? (
          displayTrades.map((trade) => {
            const statusConfig = getStatusConfig(trade.status);
            const StatusIcon = statusConfig.icon;

            return (
              <Card 
                key={trade.id}
                onClick={() => navigate(`/trade/${trade.id}`)}
                className="cursor-pointer hover:shadow-md transition-shadow"
              >
                {/* Trade Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">#{trade.id}</span>
                      <Badge variant={trade.type === 'buy' ? 'success' : 'info'}>
                        {trade.type === 'buy' ? '↓ Buy' : '↑ Sell'}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      with {trade.vendor}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: `${statusConfig.color}15` }}>
                    <StatusIcon size={16} style={{ color: statusConfig.color }} />
                    <span className="text-xs font-medium" style={{ color: statusConfig.color }}>
                      {statusConfig.label}
                    </span>
                  </div>
                </div>

                {/* Trade Details */}
                <div className="grid grid-cols-2 gap-3 mb-3 pb-3 border-b border-gray-100">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Amount</div>
                    <div className="font-semibold" style={{ color: PRIMARY }}>
                      {trade.amount} {trade.crypto}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Value</div>
                    <div className="font-semibold" style={{ color: PRIMARY }}>
                      {trade.fiat}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {trade.method}
                  </div>
                  
                  {trade.timeRemaining ? (
                    <div className="flex items-center gap-1.5 text-sm text-orange-600">
                      <Clock size={14} />
                      <span className="font-medium">{trade.timeRemaining}</span>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-400">
                      {trade.completedAt || trade.cancelledAt || trade.createdAt}
                    </div>
                  )}
                </div>
              </Card>
            );
          })
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Clock size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No {activeTab} trades
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              {activeTab === 'active' 
                ? 'Start trading to see your active trades here'
                : activeTab === 'completed'
                ? 'Your completed trades will appear here'
                : 'Your cancelled trades will appear here'}
            </p>
            {activeTab === 'active' && (
              <button
                onClick={() => navigate('/')}
                className="px-6 py-2.5 rounded-lg text-white font-medium transition-all active:scale-95"
                style={{ background: ACCENT }}
              >
                Browse Offers
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}