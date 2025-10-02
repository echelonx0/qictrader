# QicTrader.com - Complete Design Specifications

## 🎨 Design System

### Color Palette
```
Primary Green:   #154D71 (Trust, Finance, Stability)
Secondary Teal:  #1C6EA4 (Actions, Links, Buttons)
Accent Blue:     #33A1E0 (Highlights, CTAs, Progress)
Success Yellow:  #FFF9AF (Notifications, Alerts)

Grays:
- Background: #F9FAFB
- Border: #E5E7EB
- Text Primary: #111827
- Text Secondary: #6B7280
```

### Typography
```
Headings: System Font Stack (San Francisco, Segoe UI, Roboto)
- H1: 24px, Bold (Page titles)
- H2: 20px, Semibold (Section headers)
- H3: 18px, Semibold (Card titles)

Body:
- Default: 14px, Regular
- Small: 12px, Regular
- Large: 16px, Regular

Font Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
```

### Spacing Scale
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

Component Padding: 16px (mobile), 24px (tablet+)
Section Gaps: 16px
Card Padding: 16px
Border Radius: 12px (cards), 8px (buttons), 16px (large cards)
```

### Components

#### Buttons
```
Primary: #33A1E0 background, white text, 12px rounded
Secondary: #154D71 border, #154D71 text, transparent bg
Text: No background, #1C6EA4 text

Size: 44px min height (touch-friendly)
Padding: 12px 24px
Active State: scale(0.95)
```

#### Cards
```
Background: White
Border: 1px solid #E5E7EB
Radius: 12px
Padding: 16px
Shadow: 0 1px 3px rgba(0,0,0,0.1)
```

#### Input Fields
```
Border: 1px solid #D1D5DB
Focus Border: 2px solid #33A1E0
Padding: 12px 16px
Radius: 8px
Height: 44px minimum
```

---

## 📱 Screen Specifications

### 1. Marketplace (Homepage)

**Purpose:** Browse and select P2P trading offers

**Key Elements:**
- Sticky header with balance display
- Buy/Sell toggle tabs
- Search bar (payment method, amount)
- Trust indicators (escrow, active users, 24/7)
- Filter chips (payment methods)
- Vendor cards with:
  - Profile info (name, flag, ratings, completion %)
  - Payment method badge
  - Rate display with markup percentage
  - Range limits
  - Last seen status
  - CTA button

**UX Notes:**
- Default to "Buy" tab
- Cards use green accents for positive metrics
- Orange dot for "last seen" status
- Large touch targets for CTAs

---

### 2. Wallet

**Purpose:** Manage crypto balances and transactions

**Key Elements:**
- Balance card with gradient background
- Show/hide balance toggle
- Send/Receive action buttons
- Asset list (BTC, USDT) with:
  - Balance amounts
  - Fiat conversion
  - Price change percentage
- Quick actions (Scan QR, Copy Address)
- Transaction history with:
  - Type indicator (send/receive)
  - Amount and fiat value
  - Status badge
  - Timestamp
  - Description

**UX Notes:**
- Balance hidden by default for privacy
- Color coding: Green (receive), Blue (send)
- Status: Green (completed), Yellow (pending)
- Pull to refresh functionality

---

### 3. Affiliate Dashboard

**Purpose:** Track referrals and earnings

**Key Elements:**
- Hero banner with commission rate (15%)
- Referral code display
- Stats grid:
  - Total earnings
  - Active referrals
  - Monthly earnings
  - Conversion rate
- Share link section with copy/share buttons
- Quick tips card
- Tabs: Overview, Referrals, Earnings
- Referral list with:
  - User avatar/initial
  - Join date
  - Trade count
  - Earnings from that user
  - Active/inactive status
- Earnings history timeline
- Chart showing weekly trend

**UX Notes:**
- Gradient hero cards for visual appeal
- One-tap copy for referral links
- Visual confirmation on copy (checkmark)
- Active/inactive badges for status

---

### 4. Reseller Hub (Zero-Capital Trading)

**Purpose:** Create and manage reseller offers

**Key Elements:**
- Hero banner with total reseller earnings
- Quick stats (active offers, trades, avg markup)
- Info card explaining how reselling works
- "My Active Offers" section:
  - Vendor source
  - Payment method
  - Markup breakdown (vendor, yours, client total)
  - Performance stats (clicks, trades, earned)
  - Shareable link with copy button
  - Edit/delete actions
- "Create Offer" modal:
  - Vendor offer selection
  - Markup percentage input
  - Live calculation preview
  - Example earnings display
  - Create button

**UX Notes:**
- Blue gradients for reseller features
- Clear markup math display
- Example calculations to build confidence
- Modal slides up from bottom (mobile)
- Selected state clearly visible

---

### 5. Active Trade (Escrow)

**Purpose:** Facilitate secure P2P transactions

**Key Elements:**
- Header with trade ID, type, vendor
- Countdown timer (prominent)
- Trade summary card:
  - Crypto amount
  - Fiat amount
  - Escrow status indicator
- Progress steps (4 stages):
  1. Escrow Locked
  2. Payment Sent
  3. Vendor Confirms
  4. Crypto Released
- Payment instructions card
- Chat interface:
  - System messages (centered, gray)
  - Vendor messages (left, white bg)
  - User messages (right, blue bg)
  - Timestamps
- Quick action buttons:
  - Upload Proof
  - I've Paid
- Chat input with attachment option
- Warning footer (anti-scam)

**UX Notes:**
- Timer uses yellow (urgency without panic)
- Escrow badge builds trust
- Progress steps show clear status
- System messages differentiated
- Chat bubbles rounded for friendliness
- Warning in red for visibility

---

## 🔄 User Flows

### Buy Flow
1. Homepage → Select vendor offer
2. Enter amount → Confirm trade
3. Trade screen opens → Escrow locks funds
4. Send payment via chosen method
5. Upload proof in chat
6. Mark as paid
7. Vendor confirms receipt
8. Crypto released to wallet
9. Rate the vendor

### Reseller Flow
1. Reseller Hub → Create Offer
2. Select vendor offer from list
3. Set your markup percentage
4. Preview calculations
5. Generate offer
6. Copy shareable link
7. Share with clients
8. Client completes trade → You earn spread
9. Track performance in dashboard

### Affiliate Flow
1. Affiliate Dashboard → Copy referral link
2. Share link (social, messaging, content)
3. User signs up via link
4. User completes trades
5. You earn 15% commission per trade
6. Track earnings in real-time
7. Withdraw earnings to wallet

---

## 🎯 Design Principles

### 1. Mobile-First
- 80% of users are mobile
- Touch targets: 44px minimum
- Thumb-friendly CTAs at bottom
- Single-column layouts
- Minimal horizontal scrolling

### 2. Trust & Safety
- Escrow badges visible everywhere
- Progress indicators for transparency
- Clear status updates
- Warning messages for scams
- Secure connection indicators

### 3. Clarity Over Cleverness
- Plain language, no jargon
- Visual hierarchy with size/weight
- Icons support text, never replace
- Consistent color meanings
- Obvious CTAs

### 4. Performance
- Fast loading (<2s)
- Optimistic UI updates
- Skeleton loaders for content
- Cached data where possible
- Progressive enhancement

### 5. Emotional Design
- Gradients for important cards
- Green for positive actions/values
- Yellow for time-sensitive items
- Blue for primary actions
- Rounded corners for friendliness

---

## 📊 Component Library

### Navigation
```
Bottom Tab Bar:
- 5 items max
- Active state: color + icon
- Inactive: gray
- Fixed position
- Icons: emoji or lucide-react
```

### Vendor Cards
```
Layout:
- Avatar/initial (left)
- Name + flag + ratings (header)
- Payment method (body)
- Rate + CTA (footer)
- Last seen (small text)

States:
- Default: white bg, gray border
- Hover: subtle shadow
- Active: blue border
```

### Status Badges
```
Completed: green-100 bg, green-700 text
Pending: yellow-100 bg, yellow-700 text
Failed: red-100 bg, red-700 text
Active: blue-100 bg, blue-700 text

Size: text-xs, px-2, py-0.5, rounded-full
```

### Transaction Items
```
Layout:
- Icon circle (left)
- Title + description (middle)
- Amount + status (right)

Icon colors:
- Receive: green-100 bg, green-600 icon
- Send: blue-100 bg, blue-600 icon
```

---

## 🚀 Implementation Notes

### Responsiveness
```
Mobile: < 640px (default)
Tablet: 640px - 1024px
Desktop: > 1024px

Breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
```

### Accessibility
- WCAG 2.1 AA minimum
- Contrast ratio 4.5:1 for text
- Touch targets 44x44px
- Keyboard navigation
- Screen reader labels
- Focus indicators visible

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90
- Bundle size: < 200KB (gzipped)

---

## 🎨 Assets Needed

### Icons
- Use Lucide React library
- Fallback: emoji for personality
- Size: 16px, 20px, 24px variants

### Images
- Vendor avatars: generated from initials
- Crypto logos: standard BTC/USDT symbols
- Flag emojis for countries

### Illustrations
- Empty states (no trades, no offers)
- Onboarding screens
- Success confirmations
- Error states

---

## 📋 Development Checklist

### Phase 1: Core Pages
- [ ] Marketplace/Homepage
- [ ] Wallet Screen
- [ ] Trade/Escrow Screen
- [ ] Login/Signup

### Phase 2: Monetization
- [ ] Affiliate Dashboard
- [ ] Reseller Hub
- [ ] Payment Integration

### Phase 3: Supporting
- [ ] User Profile/Settings
- [ ] Trade History
- [ ] Notifications
- [ ] Dispute System (basic)

### Phase 4: Polish
- [ ] Animations/transitions
- [ ] Loading states
- [ ] Error handling
- [ ] Empty states
- [ ] Onboarding flow

---

## 🔐 Security Considerations

### Visual Trust Signals
- SSL badge in header
- Escrow lock icons
- "Protected" badges
- Two-factor auth badges
- Verified vendor checkmarks

### Warning States
- Time limits shown prominently
- Payment warnings (red backgrounds)
- External link warnings
- Suspicious activity alerts

---

## 📈 Success Metrics to Track

### User Engagement
- Daily active users
- Average session duration
- Trades per user per month
- Return rate (7-day, 30-day)

### Conversion
- Signup to first trade
- Trade completion rate
- Affiliate conversion
- Reseller adoption

### Revenue
- Platform fees collected
- Average trade value
- Affiliate earnings
- Reseller earnings

---

**Last Updated:** October 2, 2025
**Version:** 1.0
**Design Tool:** Figma (recommended for handoff)
**Development Framework:** React Native (mobile) + React (web)