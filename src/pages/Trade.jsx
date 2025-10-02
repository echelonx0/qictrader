import React, { useState } from 'react';
import { Shield, Clock, AlertCircle, Send, Paperclip, Info, CheckCircle } from 'lucide-react';

export default function QicTraderTrade() {
  const [message, setMessage] = useState('');
  const [tradeStatus, setTradeStatus] = useState('payment_pending'); // payment_pending, payment_sent, completed

  const tradeDetails = {
    id: '#TRD-2847',
    type: 'buy',
    amount: '0.00085 BTC',
    fiatAmount: '11,830.45 ZAR',
    rate: '1,399,042.39 ZAR',
    method: 'FNB E-WALLET',
    vendor: 'LiveYoungTrades',
    timeLimit: '29:45',
    createdAt: '14:23'
  };

  const messages = [
    {
      sender: 'system',
      text: 'Trade started. Escrow has locked 0.00085 BTC.',
      time: '14:23',
      type: 'info'
    },
    {
      sender: 'vendor',
      text: 'Hi! Please send payment to FNB E-Wallet and share proof here.',
      time: '14:24'
    },
    {
      sender: 'vendor',
      text: 'Account: 062 123 4567',
      time: '14:24'
    },
    {
      sender: 'me',
      text: 'Payment sent! Uploading proof now.',
      time: '14:32'
    },
    {
      sender: 'system',
      text: 'Payment proof uploaded. Waiting for vendor confirmation.',
      time: '14:33',
      type: 'info'
    }
  ];

  const steps = [
    { label: 'Escrow Locked', completed: true },
    { label: 'Payment Sent', completed: tradeStatus !== 'payment_pending' },
    { label: 'Vendor Confirms', completed: tradeStatus === 'completed' },
    { label: 'Crypto Released', completed: tradeStatus === 'completed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold" style={{ color: '#154D71' }}>
                {tradeDetails.type === 'buy' ? 'Buying' : 'Selling'} BTC
              </h1>
              <div className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100" style={{ color: '#1C6EA4' }}>
                {tradeDetails.id}
              </div>
            </div>
            <div className="text-sm text-gray-600">with {tradeDetails.vendor}</div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Info size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-yellow-50 border border-yellow-200">
          <Clock size={16} className="text-yellow-700" />
          <span className="text-sm font-semibold text-yellow-700">
            Time remaining: {tradeDetails.timeLimit}
          </span>
        </div>
      </header>

      {/* Trade Summary Card */}
      <div className="px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">You're buying</div>
            <div className="text-2xl font-bold" style={{ color: '#154D71' }}>
              {tradeDetails.amount}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Total payment</div>
            <div className="text-2xl font-bold" style={{ color: '#154D71' }}>
              {tradeDetails.fiatAmount}
            </div>
          </div>
        </div>

        {/* Escrow Status */}
        <div className="flex items-center gap-2 p-3 rounded-lg" style={{ background: '#154D7110' }}>
          <Shield size={18} style={{ color: '#154D71' }} />
          <div className="text-sm">
            <span className="font-semibold" style={{ color: '#154D71' }}>Protected by Escrow</span>
            <span className="text-gray-600"> - Funds are safe until both parties confirm</span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                step.completed 
                  ? 'text-white' 
                  : 'bg-gray-200 text-gray-400'
              }`}
              style={step.completed ? { background: '#33A1E0' } : {}}>
                {step.completed ? <CheckCircle size={16} /> : idx + 1}
              </div>
              <div className={`text-xs text-center ${
                step.completed ? 'font-medium' : 'text-gray-500'
              }`}
              style={step.completed ? { color: '#154D71' } : {}}>
                {step.label}
              </div>
              {idx < steps.length - 1 && (
                <div className={`absolute h-0.5 w-16 mt-4 ${
                  step.completed && steps[idx + 1].completed ? 'bg-current' : 'bg-gray-200'
                }`}
                style={step.completed && steps[idx + 1].completed ? { background: '#33A1E0', left: `${(idx + 1) * 25}%` } : { left: `${(idx + 1) * 25}%` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200">
          <AlertCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700">
            <div className="font-semibold text-blue-900 mb-1">Payment Instructions</div>
            <div className="space-y-1">
              <div>Method: <span className="font-medium">{tradeDetails.method}</span></div>
              <div>Amount: <span className="font-medium">{tradeDetails.fiatAmount}</span></div>
              <div className="text-xs text-blue-700 mt-2">
                ⚠️ Send the exact amount. Upload payment proof in chat below.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx}>
            {msg.sender === 'system' ? (
              <div className="flex justify-center">
                <div className={`px-3 py-2 rounded-lg text-xs max-w-xs text-center ${
                  msg.type === 'info' 
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {msg.text}
                </div>
              </div>
            ) : (
              <div className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[75%]">
                  {msg.sender !== 'me' && (
                    <div className="text-xs text-gray-500 mb-1 ml-1">{tradeDetails.vendor}</div>
                  )}
                  <div className={`px-4 py-2.5 rounded-2xl ${
                    msg.sender === 'me'
                      ? 'text-white rounded-br-sm'
                      : 'bg-white border border-gray-200 rounded-bl-sm'
                  }`}
                  style={msg.sender === 'me' ? { background: '#1C6EA4' } : {}}>
                    <div className="text-sm">{msg.text}</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 ml-1">{msg.time}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 bg-white border-t border-gray-200">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <button className="py-2.5 rounded-lg font-medium border-2 transition-all active:scale-95"
            style={{ borderColor: '#33A1E0', color: '#33A1E0' }}>
            Upload Proof
          </button>
          <button className="py-2.5 rounded-lg text-white font-medium transition-all active:scale-95"
            style={{ background: '#33A1E0' }}>
            I've Paid
          </button>
        </div>

        {/* Chat Input */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors">
            <Paperclip size={20} className="text-gray-600" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
            style={{ focusRing: '#33A1E0' }}
          />
          <button 
            className="p-2.5 rounded-lg text-white transition-all active:scale-95"
            style={{ background: '#1C6EA4' }}>
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Warning Footer */}
      <div className="px-4 py-2 bg-red-50 border-t border-red-200">
        <div className="flex items-center gap-2 text-xs text-red-700">
          <AlertCircle size={14} />
          <span>Never send payment outside QicTrader. Report suspicious activity.</span>
        </div>
      </div>
    </div>
  );
}