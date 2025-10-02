import React from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PRIMARY = '#154D71';

const Header = ({ 
  title, 
  subtitle,
  showBack = false,
  rightElement,
  balance,
  sticky = true,
  className = ''
}) => {
  const navigate = useNavigate();

  return (
    <header 
      className={`bg-white border-b border-gray-200 px-4 py-4 ${
        sticky ? 'sticky top-0 z-50' : ''
      } ${className}`}
    >
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors -ml-2"
            >
              <ArrowLeft size={20} style={{ color: PRIMARY }} />
            </button>
          )}
          
          <div>
            <h1 className="text-xl font-bold" style={{ color: PRIMARY }}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-gray-600 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {balance && (
            <div className="text-right">
              <div className="text-xs text-gray-500">Balance</div>
              <div className="text-sm font-semibold" style={{ color: PRIMARY }}>
                {balance}
              </div>
            </div>
          )}
          
          {rightElement || (
            balance && (
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: '#1C6EA4' }}
              >
                {balance.charAt(0)}
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
};

// Simple header variant
Header.Simple = ({ title, onBack, rightAction }) => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={() => onBack ? onBack() : navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors -ml-2"
            >
              <ArrowLeft size={20} style={{ color: PRIMARY }} />
            </button>
          )}
          <h1 className="text-lg font-bold" style={{ color: PRIMARY }}>
            {title}
          </h1>
        </div>
        
        {rightAction && (
          <div>{rightAction}</div>
        )}
      </div>
    </header>
  );
};

// Header with tabs
Header.WithTabs = ({ title, tabs, activeTab, onTabChange }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 py-4">
        <h1 className="text-xl font-bold mb-4" style={{ color: PRIMARY }}>
          {title}
        </h1>
        
        <div className="flex gap-2 -mx-4 px-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 text-current'
                  : 'text-gray-500'
              }`}
              style={activeTab === tab.id ? { borderColor: PRIMARY, color: PRIMARY } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;