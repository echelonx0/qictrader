# QicTrader - P2P Crypto Trading Platform

A revolutionary peer-to-peer crypto marketplace that enables **zero-capital reselling**. Users can build crypto businesses by marketing other vendors' offers at a markup, without holding inventory.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-19.1.1-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/qictrader.git
cd qictrader

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

---

## 📦 Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **React Router DOM 7.9.3** - Client-side routing
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Lucide React 0.544.0** - Icon library
- **Vite 7.1.7** - Build tool and dev server

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 🎨 Design System

### Colors
```css
Primary:   #154D71 (Trust, Finance, Stability)
Secondary: #1C6EA4 (Actions, Links)
Accent:    #33A1E0 (Highlights, CTAs)
Success:   #FFF9AF (Notifications)
```

### Typography
- System font stack (San Francisco, Segoe UI, Roboto)
- Font weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

---

## 📁 Project Structure

```
qictrader/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── layout/       # Layout components (Header, BottomNav)
│   │   └── ui/           # UI primitives (Button, Card, Badge)
│   ├── pages/            # Page components
│   │   ├── Marketplace.jsx    # Browse P2P offers
│   │   ├── Wallet.jsx         # Manage crypto wallet
│   │   ├── Trades.jsx         # View active/completed trades
│   │   ├── Trade.jsx          # Individual trade chat
│   │   ├── Affiliate.jsx      # Affiliate dashboard
│   │   └── Reseller.jsx       # Reseller hub
│   ├── constants/        # App constants (colors, config)
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🌟 Key Features

### 1. **P2P Crypto Trading**
- Buy and sell BTC, ETH, USDT, USDC
- Secure escrow system
- Multiple payment methods (FNB, Capitec, Bank Transfer, etc.)
- Real-time trade chat

### 2. **Zero-Capital Reselling** 🔥 (Unique)
- Resell other vendors' offers without inventory
- Add your markup percentage
- Earn profit on every trade
- No capital investment required

### 3. **Affiliate Program**
- Earn 15% commission on referred trades
- Track referrals and earnings
- Shareable referral links
- Real-time analytics

### 4. **Multi-Crypto Support**
- BTC (Bitcoin)
- ETH (Ethereum)
- USDT (Tether)
- USDC (USD Coin)

---

## 🛠️ Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000/api
VITE_WS_URL=ws://localhost:8000/ws
VITE_APP_NAME=QicTrader
```

### Tailwind Configuration
Custom colors and theme extensions are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#154D71',
        light: '#1C6EA4',
      },
      accent: '#33A1E0',
      success: '#FFF9AF',
    },
  },
}
```

---

## 📱 Responsive Design

QicTrader is **mobile-first** and fully responsive:

- **Mobile:** < 640px (default, optimized for 80% of users)
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Touch Targets
- Minimum: 44x44px (iOS/Android standard)
- Bottom navigation optimized for thumb reach
- Large CTAs for easy tapping

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Deploy to AWS/DigitalOcean

```bash
npm run build
# Upload dist/ folder to your server
# Configure nginx/apache to serve the static files
```

---

## 🧪 Testing

### Manual Testing Checklist

#### Core Flows
- [ ] User can register and login
- [ ] User can browse marketplace offers
- [ ] User can filter by crypto and payment method
- [ ] User can initiate a trade
- [ ] Trade chat works in real-time
- [ ] User can create reseller offers
- [ ] Reseller markup calculations are correct
- [ ] Affiliate referral tracking works
- [ ] Wallet displays correct balances

#### Responsive Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad
- [ ] Test on Desktop Chrome/Firefox/Safari

---

## 🎯 Roadmap

### Phase 1 - MVP (Current)
- ✅ P2P trading interface
- ✅ Reseller system
- ✅ Affiliate program
- ✅ Basic wallet

### Phase 2 - Enhancement
- [ ] Backend API integration
- [ ] Real escrow with blockchain
- [ ] KYC verification
- [ ] Email notifications
- [ ] Push notifications

### Phase 3 - Scale
- [ ] Mobile apps (iOS/Android)
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] API for developers
- [ ] Multi-country expansion

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use ESLint configuration provided
- Follow React best practices
- Keep components under 300 lines
- Use functional components with hooks
- Write meaningful commit messages

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

- **Email:** support@qictrader.com
- **Website:** https://qictrader.com
- **Documentation:** https://docs.qictrader.com
- **Discord:** https://discord.gg/qictrader

---

## 🙏 Acknowledgments

- Design inspired by modern P2P platforms
- Color palette from [Color Hunt](https://colorhunt.co/)
- Icons from [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

## ⚠️ Important Notes

### For Developers
1. **Never commit `.env` files** - Keep API keys secure
2. **Test reseller fee calculations** - Math must be precise
3. **Implement proper escrow** - Security is critical
4. **Add comprehensive logging** - For debugging trades
5. **Rate limit API calls** - Prevent abuse

### Security Considerations
- All crypto operations should use multi-sig wallets
- Implement 2FA for withdrawals
- KYC/AML compliance for regulatory requirements
- Regular security audits
- Bug bounty program

---

## 🔗 Related Resources

- [Technical PRD](./docs/TECHNICAL_PRD.md) - Full product requirements
- [API Documentation](./docs/API.md) - Backend API specs (coming soon)
- [Design System](./docs/DESIGN_SYSTEM.md) - UI component library (coming soon)

---

**Built with ❤️ for the crypto community**

*Empowering everyone to build crypto businesses without capital*