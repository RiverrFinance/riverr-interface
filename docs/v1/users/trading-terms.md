# Trading Terms Glossary

Essential terminology for Web3 perpetual futures trading on Riverr.

## Core Trading Concepts

### **Leverage**
The ability to control a larger position with a smaller amount of capital.

**Example**: With 10x leverage, you can control a $10,000 position with only $1,000 of your own funds.

- **1x Leverage**: No amplification, 1:1 ratio
- **5x Leverage**: 5x amplification, higher risk/reward
- **20x Leverage**: 20x amplification, very high risk

:::info
Higher leverage means both profits AND losses are amplified. Use with caution.
:::

### **Margin**
The amount of your own funds required to open a leveraged position.

**Types of Margin**:
- **Initial Margin**: Amount needed to open position
- **Maintenance Margin**: Minimum amount needed to keep position open
- **Available Margin**: Funds available for new positions

**Formula**: `Required Margin = Position Size ÷ Leverage`

### **Collateral**
The assets you deposit to back your trading positions. Acts as security for borrowed funds.

**Accepted Collateral on Riverr**:
- ICP tokens
- ckBTC
- Other supported crypto assets

### **Position**
A trade you have opened that hasn't been closed yet.

**Types**:
- **Long Position**: Betting price will go UP
- **Short Position**: Betting price will go DOWN

**Position States**:
- **Open**: Currently active
- **Closed**: Manually closed by trader
- **Liquidated**: Automatically closed due to insufficient margin

## Profit & Loss (PnL)

### **Unrealized PnL**
Profit or loss on open positions that haven't been closed yet.
- **Green/Positive**: You're currently in profit
- **Red/Negative**: You're currently at a loss

### **Realized PnL**
Actual profit or loss from positions you've already closed.

### **Mark Price**
The fair value price used for liquidation calculations. Usually close to, but may differ slightly from, the market price to prevent manipulation.

### **Entry Price**
The average price at which you opened your position.

## Liquidation

### **Liquidation**
Automatic closing of your position when you don't have enough margin to maintain it.

**When it happens**:
- Your margin falls below maintenance requirements
- Usually due to adverse price movement
- Results in loss of your collateral

### **Liquidation Price**
The price level at which your position will be automatically liquidated.

**Calculation factors**:
- Entry price
- Leverage used  
- Position size
- Current margin balance

:::warning
Always monitor your liquidation price. Add margin or close positions before reaching it.
:::

### **Margin Ratio**
Percentage showing how close you are to liquidation.

- **Above 100%**: Safe zone
- **50-100%**: Warning zone  
- **Below 50%**: Danger zone (close to liquidation)

## Order Types

### **Market Order**
Order that executes immediately at the current market price.

**Pros**: Guaranteed execution
**Cons**: Price slippage on large orders

### **Limit Order** 
Order that only executes at a specific price or better.

**Pros**: Price control, no slippage
**Cons**: May not execute if price doesn't reach your level

### **Stop-Loss Order**
Automatically closes your position at a predetermined loss level.

**Example**: You buy BTC at $50,000 and set stop-loss at $45,000. If BTC drops to $45,000, your position automatically closes to limit losses.

### **Take-Profit Order**
Automatically closes your position at a predetermined profit level.

**Example**: You buy BTC at $50,000 and set take-profit at $55,000. If BTC rises to $55,000, your position automatically closes to secure profits.

## Funding & Fees

### **Funding Rate**
Regular payment between long and short traders to keep perpetual futures prices close to spot prices.

**How it works**:
- **Positive rate**: Longs pay shorts
- **Negative rate**: Shorts pay longs  
- **Payment frequency**: Usually every 8 hours

### **Funding Payment**
The actual amount paid or received based on funding rate.

`Funding Payment = Position Size × Funding Rate`

### **Trading Fees**
Fees charged for opening and closing positions.

**Typical structure**:
- **Market orders**: ~0.1% (taker fee)
- **Limit orders**: ~0.05% (maker fee)

### **Slippage**
The difference between expected price and actual execution price, especially with large market orders.

## Advanced Concepts

### **Open Interest**
Total value of all open positions in a market. Higher open interest usually means more liquid market.

### **Volume**
Total amount of trading activity in a given period. Higher volume usually means tighter spreads and better execution.

### **Spread**
Difference between highest bid price and lowest ask price. Tighter spreads mean more efficient markets.

### **Basis**
Difference between perpetual futures price and underlying spot price. Usually small due to funding mechanism.

### **Index Price**
Reference price from major spot exchanges used to calculate funding rates and mark prices.

## Risk Metrics

### **Value at Risk (VaR)**
Estimate of potential loss over a specific time period with given confidence level.

### **Maximum Drawdown**
Largest peak-to-trough loss in your trading account.

### **Risk-Reward Ratio**
Comparison of potential profit to potential loss on a trade.

**Example**: Risking $100 to potentially make $200 = 1:2 risk-reward ratio

### **Win Rate**
Percentage of profitable trades out of total trades.

## Position Management Terms

### **Adding to Position**
Increasing the size of an existing position, also called "scaling in."

### **Reducing Position** 
Decreasing the size of an existing position by partially closing it.

### **Hedging**
Opening opposite positions to reduce risk exposure.

### **Portfolio Margin**
Margin system that considers correlations between different positions for more efficient capital usage.

## Common Trading Abbreviations

- **PnL**: Profit and Loss
- **TP**: Take Profit
- **SL**: Stop Loss
- **DCA**: Dollar Cost Averaging
- **FOMO**: Fear of Missing Out
- **FUD**: Fear, Uncertainty, and Doubt
- **HODLing**: Holding positions long-term
- **Rekt**: Heavily liquidated/lost money

## Market Conditions

### **Bull Market**
Extended period of rising prices and optimism.

### **Bear Market**  
Extended period of falling prices and pessimism.

### **Sideways/Crab Market**
Period of relatively stable prices with no clear trend.

### **Volatility**
Measure of price movement intensity. High volatility = larger price swings.

:::tip Pro Tip
Understanding these terms is crucial for successful trading. Bookmark this page and refer back when needed!
:::

## Quick Reference

| Term | Definition |
|------|------------|
| Long | Betting price goes up |
| Short | Betting price goes down |  
| 2x Leverage | Control $2000 with $1000 |
| Liquidation | Forced position closure |
| Funding | Payment between longs/shorts |
| Slippage | Price difference on execution |
| Stop-Loss | Automatic loss-limiting order |

Need help understanding how to apply these concepts? Check out our [Trading Guide](./trading-guide.md) or [Risk Management](./risk-management.md) sections.