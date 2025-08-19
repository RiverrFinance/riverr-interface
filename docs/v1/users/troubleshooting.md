---
id: troubleshooting
title: Troubleshooting Common Issues
sidebar_label: Troubleshooting
---

# Troubleshooting Guide for Riverr Finance

This comprehensive troubleshooting guide will help you resolve common issues encountered while using Riverr Finance. Find quick solutions to get back to trading as soon as possible.

## Quick Problem Resolution

### Most Common Issues (90% of Problems)

#### 🔌 Wallet Connection Problems
**Symptoms**: Can't connect wallet, wallet not recognized
**Quick Fix**: 
1. Refresh the page
2. Ensure wallet is unlocked
3. Try connecting again

#### 📊 Chart Not Loading
**Symptoms**: Blank chart area, no price data
**Quick Fix**:
1. Refresh browser page
2. Clear browser cache
3. Check internet connection

#### ⚡ Transaction Failing
**Symptoms**: Transactions not confirming, error messages
**Quick Fix**:
1. Check ICP balance for fees
2. Wait 1-2 minutes and retry
3. Ensure wallet is connected

#### 🔄 Page Loading Issues
**Symptoms**: Site won't load, slow performance
**Quick Fix**:
1. Clear browser cache and cookies
2. Try incognito/private browsing
3. Use different browser

## Wallet Connection Issues

### Wallet Not Detected

#### Problem: Riverr doesn't recognize your wallet
**Solutions:**

**For Plug Wallet:**
1. **Install/Update Plug Extension**
   - Visit [Chrome Web Store](https://chrome.google.com/webstore/detail/plug/cfbfdhimifdmdehjmkdobpcjfefblkjm)
   - Click "Add to Chrome" or "Update" if installed
   - Refresh Riverr Finance page

2. **Enable Extension**
   - Check if Plug is enabled in Chrome extensions
   - Pin the extension to toolbar
   - Make sure it's not blocked by browser

3. **Browser Compatibility**
   - Use Chrome or Chromium-based browsers
   - Disable other crypto wallet extensions temporarily
   - Try Firefox with appropriate ICP wallet

**For Internet Identity:**
1. **Clear Browser Data**
   - Clear cookies for internetidentity.org
   - Clear local storage data
   - Try incognito mode

2. **Authentication Issues**
   - Use the same device/browser you created ID with
   - Ensure biometric/PIN authentication is working
   - Check if Internet Identity service is operational

### Connection Keeps Dropping

#### Problem: Wallet disconnects frequently
**Causes & Solutions:**

**Auto-lock Settings:**
```
Plug Wallet auto-locks after inactivity
Solution: Extend auto-lock time in Plug settings
Or: Manually unlock wallet before trading sessions
```

**Browser Settings:**
```
Browser blocking connections or clearing data
Solution: Add riverr domain to browser exceptions
Disable aggressive privacy settings for the site
```

**Network Issues:**
```
Unstable internet connection
Solution: Check connection stability
Switch to wired connection if using WiFi
Try mobile hotspot as backup
```

### Transaction Failures

#### Problem: Wallet transactions fail or timeout

**Insufficient Funds:**
```
Error: "Insufficient balance" or similar
Check: ICP balance covers trade amount + fees
Solution: Add more ICP or reduce trade size
```

**Network Congestion:**
```
Error: Transaction timeout or rejected
Check: ICP network status and congestion
Solution: Wait 5-10 minutes and retry
Increase transaction fee if wallet allows
```

**Wallet State Issues:**
```
Error: Nonce or sequence errors
Check: Wallet synchronized with network
Solution: Refresh wallet, wait for sync
Restart wallet application/extension
```

## Platform Performance Issues

### Slow Loading

#### Problem: Riverr Finance loads slowly or partially

**Browser Performance:**
1. **Clear Cache and Data**
   ```
   Chrome: Settings > Privacy > Clear Browsing Data
   Firefox: Settings > Privacy > Clear Data
   Safari: Develop > Empty Caches
   Select: Cached images/files, Cookies, Local storage
   ```

2. **Disable Extensions**
   - Turn off ad blockers temporarily
   - Disable unnecessary browser extensions
   - Try incognito/private mode

3. **Browser Updates**
   - Ensure browser is updated to latest version
   - Consider switching browsers (Chrome recommended)

**Internet Connection:**
1. **Speed Test**
   - Test connection speed (minimum 5 Mbps recommended)
   - Check for high latency or packet loss
   - Try wired connection instead of WiFi

2. **Network Troubleshooting**
   - Restart router/modem
   - Switch to mobile data temporarily
   - Contact ISP if problems persist

### Chart Problems

#### Problem: Price charts not displaying correctly

**TradingView Integration Issues:**
```
Symptoms: Blank chart, no data, loading errors
Solutions:
1. Refresh page (F5 or Ctrl+R)
2. Clear browser cache
3. Disable ad blockers for the site
4. Check if TradingView.com is accessible
```

**Data Feed Problems:**
```
Symptoms: Old prices, delayed updates, frozen charts
Solutions:  
1. Check internet connection stability
2. Wait 30 seconds for reconnection
3. Refresh page to reset data connection
4. Report to support if issue persists
```

**Display Issues:**
```
Symptoms: Chart overlaps, incorrect sizing, visual glitches
Solutions:
1. Zoom browser to 100% (Ctrl+0)
2. Try different browser window size
3. Disable browser zoom extensions
4. Update graphics drivers (desktop)
```

### Trading Interface Issues

#### Problem: Trading panel not responding

**UI Freezing:**
```
Symptoms: Buttons don't respond, input fields frozen
Solutions:
1. Wait 10 seconds for processing
2. Refresh browser page  
3. Clear browser cache
4. Try incognito mode
5. Switch to different browser
```

**Data Sync Issues:**
```
Symptoms: Wrong balances, outdated prices, delayed updates
Solutions:
1. Refresh page to resync data
2. Disconnect and reconnect wallet
3. Check network connection
4. Wait for next data update cycle
```

## Trading-Specific Problems

### Position Management Issues

#### Problem: Positions not displaying correctly

**Missing Positions:**
```
Check: Wallet is connected to correct account
Check: Using same wallet address as when opened
Solution: Reconnect wallet, verify address matches
Refresh page to reload position data
```

**Incorrect PnL Display:**
```
Symptoms: Wrong profit/loss calculations, delayed updates
Causes: Temporary data sync issues, network delays
Solutions: 
1. Wait 1-2 minutes for automatic update
2. Refresh page to force data reload  
3. Check if calculations match manual verification
```

**Position Closing Problems:**
```
Error: "Failed to close position" or similar
Check: Sufficient balance for closing fees
Check: Position hasn't been liquidated
Solution: Retry after 30 seconds
Check margin ratio and liquidation status
```

### Leverage and Collateral Issues

#### Problem: Cannot adjust leverage or add collateral

**Leverage Limits:**
```
Error: Cannot set desired leverage
Check: Platform maximum leverage (currently 10x)
Check: Position size constraints
Solution: Reduce position size or use lower leverage
```

**Collateral Addition Failures:**
```
Error: Cannot add collateral to position
Check: Sufficient ICP balance
Check: Position is still active (not liquidated)
Solution: Ensure wallet connection is stable
Verify transaction fees are covered
```

## Error Messages and Codes

### Common Error Messages

#### Connection Errors
```
Error: "Unable to connect to wallet"
Meaning: Wallet connection failed
Solution: Check wallet is unlocked, refresh page, try again

Error: "Network