---
id: managing-positions
title: Managing Your Positions
sidebar_label: Managing Positions
---

# Managing Your Positions on Riverr Finance

Effective position management is crucial for successful trading. This guide covers everything you need to know about monitoring, adjusting, and closing your positions on Riverr Finance.

## Understanding Your Positions Dashboard

### Positions Panel Overview

<!-- ![Positions Dashboard](./images/positions-dashboard.png) -->

The Positions panel at the bottom of the trading interface shows all your active positions with key information:

#### Position Information Columns

**Market**: Trading pair (e.g., BTC-ICP)
**Position**: Direction and size of your position
**Size**: Total position value in base currency  
**Collateral**: Amount of ICP backing your position
**Entry Price**: Price when you opened the position
**Mark Price**: Current fair value price
**PnL**: Unrealized profit and loss
**Margin Ratio**: Health indicator of your position

### Real-Time Position Monitoring

#### PnL Calculation

Your Profit and Loss updates in real-time based on price movements:

**For Long Positions:**
```
PnL = Position Size × (Current Price - Entry Price) / Entry Price
```

**For Short Positions:**
```  
PnL = Position Size × (Entry Price - Current Price) / Entry Price
```

**Example:**
```
Long BTC Position
Entry Price: 20,000 ICP
Current Price: 21,000 ICP  
Position Size: 500 ICP worth
PnL = 500 × (21,000 - 20,000) / 20,000 = +25 ICP profit
```

#### Margin Ratio Monitoring

The margin ratio indicates your position's health:

```
Margin Ratio = (Collateral + Unrealized PnL) / Position Value × 100%
```

**Margin Ratio Status:**
- **🟢 Healthy (20%)**: Position is safe
- **🟡 Warning (10-20%)**: Monitor closely  
- **🔴 Risk (10%)**: Liquidation danger

## Position Management Strategies

### Active Position Monitoring

#### Setting Up Monitoring

1. **Regular Check-ins**: Review positions every few hours
2. **Price Alerts**: Set alerts for key price levels
3. **PnL Tracking**: Monitor profit/loss changes
4. **Market Conditions**: Stay aware of market events

#### Key Metrics to Watch

**Unrealized PnL Changes**
- Track how your positions perform throughout the day
- Identify patterns in your winning vs losing trades
- Use PnL trends to inform future trading decisions

**Margin Ratio Health**  
- Ensure margin ratio stays above 20% for safety
- Add collateral if ratio drops below comfortable levels
- Consider closing positions before reaching liquidation risk

### Adding Collateral to Positions

#### When to Add Collateral

**Margin Ratio Below 20%**
- Position approaching danger zone
- Market moving against your position
- Want to avoid liquidation risk

**Strategic Reasons**
- Increase position size without opening new position
- Lower liquidation price for additional safety
- Take advantage of favorable price movements

#### How to Add Collateral

:::note Feature Availability
Collateral addition features may vary based on current platform capabilities. Check the interface for available options.
:::

1. **Locate Your Position** in the positions panel
2. **Click Add Collateral** (if available)
3. **Enter Additional Amount** of ICP
4. **Confirm Transaction** in your wallet
5. **Monitor Updated Metrics**

### Partial Position Closing

#### Why Close Partially?

**Profit Taking**
- Lock in gains while keeping upside potential
- Reduce risk while maintaining market exposure
- Implement staged exit strategies

**Risk Reduction**  
- Decrease position size if market becomes uncertain
- Lower leverage without fully exiting
- Preserve capital for other opportunities

#### Partial Closing Process

**Method 1: Proportional Reduction**
```
Original Position: 1000 ICP worth of BTC
Close 25%: Close 250 ICP worth
Remaining: 750 ICP worth position
```

**Method 2: Fixed Amount**
```
Close specific ICP amount regardless of percentage
More precise control over remaining exposure
```

## Position Exit Strategies

### Market Order Exits

#### Immediate Closing
**When to Use:**
- Need to exit quickly due to adverse market conditions
- Liquidation risk approaching
- Major news events affecting your position

**Process:**
1. Navigate to Positions panel
2. Find your position  
3. Click **Close** button
4. Confirm **Market Close**
5. Transaction executes at current market price

### Strategic Exit Planning

#### Profit Taking Strategies

**Fixed Percentage Targets**
```
Take 25% profit at +10% move
Take 50% profit at +20% move  
Take 75% profit at +30% move
Let 25% run for bigger moves
```

**Support/Resistance Based**
```
Close longs at resistance levels
Close shorts at support levels
Use technical analysis for exit timing
```

#### Loss Management

**Fixed Stop Loss Levels**
```  
Set stop loss at -5% from entry
Never let single trade lose more than 2% of capital
Stick to predetermined exit rules
```

**Trailing Stops (Mental)**
```
Initial stop: -5% from entry
Price moves +10%: Move stop to breakeven
Price moves +20%: Move stop to +10%  
Price moves +30%: Move stop to +15%
```

## Understanding Liquidation

### What is Liquidation?

Liquidation occurs when your position's losses approach the collateral amount. The platform automatically closes your position to prevent further losses.

#### Liquidation Triggers

**Margin Ratio Falls Below Threshold**
```
Maintenance Margin: Usually around 5-10%
Liquidation occurs when margin ratio hits this level
Protects both trader and platform from excessive losses
```

**Price Movement Examples**
```
Long Position with 10x Leverage:
10% price drop = 100% collateral loss = Liquidation

Short Position with 5x Leverage:  
20% price rise = 100% collateral loss = Liquidation
```

### Avoiding Liquidation

#### Risk Management Techniques

**Lower Leverage Usage**
```
1x-3x Leverage: Very safe, large price moves needed for liquidation
4x-7x Leverage: Moderate risk, requires careful monitoring  
8x-10x Leverage: High risk, suitable only for experienced traders
```

**Adequate Collateral**
```
Use more collateral than minimum required
Provides buffer for adverse price movements
Allows for temporary unrealized losses
```

**Active Monitoring**
```
Check positions regularly throughout trading day
Set price alerts for key levels
Be prepared to add collateral or close positions
```

### Liquidation Process

#### What Happens During Liquidation

1. **Margin Ratio Triggers**: Falls below maintenance threshold
2. **Automatic Closing**: System closes position at market price
3. **Settlement**: Remaining collateral (if any) returned to account
4. **Notification**: Platform notifies you of liquidation

#### Post-Liquidation

**Account Status**
- Position removed from your positions panel
- Any remaining collateral returned to balance  
- Transaction history updated with liquidation record

**Learning Opportunity**
- Review what led to liquidation
- Adjust risk management strategies
- Consider lower leverage for future trades

## Advanced Position Management

### Hedging Strategies

#### Portfolio Hedging
**Concept**: Use opposite positions to reduce overall risk
```
Example:
Long BTC position worth 1000 ICP
Open short position worth 200 ICP as hedge
Net exposure: 800 ICP long
Reduced risk from major market moves
```

#### Pair Trading
**Strategy**: Trade related assets against each other
- Long strong asset, short weak asset
- Profit from relative performance differences
- Reduced exposure to overall market direction

### Position Scaling Strategies

#### Pyramid Building
**Adding to Winning Positions**
```
Initial Position: 100 ICP collateral at 20,000 ICP
Position moves to 20,500 (+2.5%): Add 50 ICP collateral
Position moves to 21,000 (+5%): Add 25 ICP collateral
Total: 175 ICP collateral with improved average entry
```

**Benefits:**
- Maximize profits from strong trends
- Improve risk-reward ratio over time
- Compound winning positions

**Risks:**
- Increased exposure to reversals
- Larger positions harder to exit quickly
- Requires disciplined execution

#### Dollar Cost Averaging (DCA)
**Adding to Losing Positions (Risky)**
```
Initial Position: Long at 20,000 ICP
Price drops to 19,000: Add same size position
Average entry now: 19,500 ICP
Reduced loss if price recovers
```

:::warning DCA Risks
Adding to losing positions can amplify losses if the trend continues. Only use with strong conviction and risk management.
:::

## Performance Analysis

### Position Performance Metrics

#### Individual Trade Analysis

**Key Metrics to Track:**
```
Entry Price: 20,000 ICP
Exit Price: 21,500 ICP
Position Size: 500 ICP worth
Hold Time: 2 days
Leverage Used: 5x
Return: 7.5% on collateral
Risk-Adjusted Return: Return ÷ Max Drawdown
```

#### Portfolio Level Analysis

**Overall Performance:**
- **Total Return**: Sum of all realized PnL
- **Win Rate**: Percentage of profitable positions
- **Average Win vs Average Loss**: Risk-reward analysis
- **Sharpe Ratio**: Risk-adjusted performance measure

**Risk Metrics:**
- **Maximum Drawdown**: Largest peak-to-valley loss
- **Volatility**: Standard deviation of returns
- **Value at Risk (VaR)**: Potential loss at confidence level

### Position Journaling

#### Essential Record Keeping

**Trade Log Template:**
```
Date: 2025-08-18
Market: BTC/ICP
Entry: 20,875.95 ICP
Direction: Long
Size: 0.1 BTC equivalent
Leverage: 3x
Collateral: 200 ICP
Rationale: Technical breakout above resistance
Exit: 21,500 ICP (target reached)
PnL: +60 ICP
Lessons: Pattern worked as expected, good risk management
```

#### Analysis Questions

**For Winning Trades:**
- What signals led to this successful trade?
- Could I have held longer for more profit?
- Was my position size appropriate for the setup?
- How can I replicate this success?

**For Losing Trades:**
- What went wrong with my analysis?
- Did I follow my risk management rules?
- Was the setup actually valid in hindsight?
- How can I avoid similar mistakes?

## Common Position Management Mistakes

### Over-Management

**Symptoms:**
- Constantly adjusting positions
- Closing positions too early due to minor fluctuations
- Second-guessing your original analysis
- Making emotional decisions based on short-term moves

**Solutions:**
- Set clear rules and stick to them
- Use time-based rules (don't check positions every 5 minutes)
- Focus on higher timeframe trends
- Trust your original analysis until proven wrong

### Under-Management

**Symptoms:**
- Ignoring positions for long periods
- Not monitoring margin ratios
- Missing obvious exit signals
- Letting small losses become large losses

**Solutions:**
- Set regular check-in schedules
- Use price alerts for key levels
- Define clear exit criteria beforehand
- Implement systematic position reviews

### Emotional Decision Making

**Fear-Based Mistakes:**
- Closing winning positions too early
- Adding too much collateral to losing positions  
- Avoiding necessary position closures
- Over-hedging due to anxiety

**Greed-Based Mistakes:**
- Holding losing positions hoping for recovery
- Adding to positions without proper analysis
- Using excessive leverage for higher returns
- Ignoring risk management rules for bigger profits

## Technology and Tools

### Position Monitoring Tools

#### Platform Features
- **Real-time PnL updates**: Live profit/loss tracking
- **Margin ratio alerts**: Automated risk warnings
- **Position history**: Complete trade records
- **Performance analytics**: Built-in reporting tools

#### External Tools
- **TradingView alerts**: Custom price notifications
- **Portfolio trackers**: Third-party position monitoring
- **Risk calculators**: Position sizing and risk tools
- **Mobile apps**: Monitor positions on the go

### Automation Considerations

#### Current Platform Capabilities
- **Market orders**: Immediate execution at current prices
- **Position monitoring**: Real-time updates and alerts
- **Liquidation protection**: Automatic risk management

#### Future Enhancements
- **Limit orders**: Execute at specific price levels
- **Stop losses**: Automatic position closure at loss levels
- **Take profit orders**: Automatic profit realization
- **Conditional orders**: Complex order types

## Emergency Procedures

### Rapid Position Closure

#### Market Crisis Response

**When to Act Immediately:**
- Major negative news affecting your positions
- Flash crash or extreme volatility events
- Platform maintenance announcements
- Personal emergency requiring immediate liquidity

**Emergency Closure Process:**
1. **Don't Panic**: Take a moment to assess the situation
2. **Prioritize**: Close riskiest positions first (highest leverage, largest size)
3. **Execute Quickly**: Use market orders for immediate execution
4. **Document**: Record reasons for emergency closure
5. **Review**: Analyze decisions after markets stabilize

### Technical Issues

#### Connection Problems

**If you lose connection during active positions:**
1. **Try multiple devices**: Phone, computer, different browsers
2. **Check platform status**: Verify if issue is widespread
3. **Contact support**: Report critical issues immediately  
4. **Document positions**: Screenshot current positions if possible
5. **Plan contingencies**: Have backup plans for position management

#### Wallet Issues

**If wallet connection fails:**
1. **Try reconnecting**: Refresh page and reconnect wallet
2. **Alternative wallets**: Use backup wallet if configured
3. **Browser troubleshooting**: Clear cache, try incognito mode
4. **Position monitoring**: Use read-only access if available
5. **Support channels**: Contact both platform and wallet support

## Next Steps

Master position management with these additional resources:

- ⚠️ Study comprehensive [Risk Management](/v1/users/risk-management) strategies
- 🔧 Learn [Troubleshooting](/v1/users/troubleshooting) for technical issues
- 📊 Review your [Trading Guide](/v1/users/trading-guide) for strategy refinement
- 📖 Explore advanced trading concepts and market analysis

## Position Management Checklist

### Daily Routine
- [ ] Check all open positions for PnL changes
- [ ] Verify margin ratios are healthy (>20%)
- [ ] Review any price alerts triggered
- [ ] Update position journal with observations
- [ ] Plan any necessary position adjustments

### Weekly Review
- [ ] Analyze overall portfolio performance
- [ ] Review individual position performance
- [ ] Assess risk management effectiveness
- [ ] Update trading strategies based on results
- [ ] Plan upcoming week's trading approach

### Monthly Analysis
- [ ] Complete performance attribution analysis
- [ ] Review and update risk management rules
- [ ] Analyze market conditions and adapt strategies
- [ ] Set goals and targets for next month
- [ ] Evaluate platform usage and optimize workflow

---

*Successful position management requires discipline, systematic approach, and continuous learning. Master these skills to become a consistently profitable trader.*