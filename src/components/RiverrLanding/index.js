import React from 'react';
import styles from './styles.module.css';
import { motion } from "framer-motion";
import { Play } from 'lucide-react';

export default function RiverrLanding() {
  return (
        <div className={styles.container}>
            <div className={styles.heroEllipse}></div>
            
            <div className={`${styles.dot} ${styles.dot1} ${styles.pulseDot} ${styles.pulseDot1}`}></div>
            <div className={`${styles.dot} ${styles.dot2} ${styles.pulseDot} ${styles.pulseDot2}`}></div>
            <div className={`${styles.dot} ${styles.dot3} ${styles.pulseDot} ${styles.pulseDot3}`}></div>

            {/* Hero Section */}
            <section className={styles.hero}>
            <div className={styles.heroGrid}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className={styles.heroTitle}>
                        Trade Crypto <br className={styles.heroMobile}/>
                        Derivatives With Zero Slippage.
                        <span className={styles.grayText}>Instantly.</span>
                    </h1>
                    
                    <p className={styles.heroSubtext}>
                        Built on the Internet Computer. Powered by the House-Trader Model.
                    </p>
                    
                     <motion.div
                        className={styles.heroButtons}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button 
                        className={styles.primaryButton}
                        onClick={() => window.open('https://app.riverr.finance', '_blank')}
                        >
                        Launch App
                        </button>
                        <button className={styles.secondaryButton}
                            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ 
                                behavior: "smooth" 
                            })}
                        >
                            <span>How it works</span>
                            <div className={styles.play}>
                                <Play fill='#0300AD' size={10}/>
                            </div>
                        </button>
                    </motion.div>
                </motion.div>
                
                {/* Trading interface */}
                <motion.div
                    className={styles.tradingInterface}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                <img src='/img/heropic.png' alt="trading interface mockup picture"/>
                </motion.div>
            </div>
            </section>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <div 
                    className={styles.featuresGrid}
                >
                    <motion.div
                        className={styles.featureCard}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.featureTitle}>
                            <img src='/img/house.png' className={styles.featureIcon}/>
                            <h3>House-Trader Model</h3>
                        </div>
                        <p className={styles.featureDescription}>
                            Trade directly against a decentralized liquidity pool, where the "House" acts as your counterparty - enabling deeper liquidity and faster trading conditions.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        className={styles.featureCard}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.featureTitle}>
                            <img src='/img/flash.png' className={styles.featureIcon}/>
                            <h3>Zero to Minimal Slippage</h3>
                        </div>
                        <p className={styles.featureDescription}>
                            Execute trades instantly with unmatched accuracy using real-time, oracle-powered price feeds that ensure fair, precise pricing and zero to minimal slippage.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        className={styles.featureCard}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                    <div className={styles.featureTitle}>
                        <img src='/img/lock.png' className={styles.featureIcon}/>
                        <h3>Fully Decentralized & Trustless</h3>
                    </div>
                    <p className={styles.featureDescription}>
                        All trades, vaults, and markets operate fully on the Internet Computer Protocol, removing middlemen and eliminating centralized risks for complete trustlessness.
                    </p>
                    </motion.div>
                </div>
                <motion.img 
                    src="/img/Vector.png" 
                    className={styles.vector_bg}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </section>

                {/* How It Works */}
            <section id="how-it-works" className={styles.featuresSection}>
                <h1 className={styles.sectionTitle}>How it Works</h1>
                <div className={styles.featuresGrid}>
                    <motion.div
                        className={styles.featureCard}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.featureTitle}>
                            <img src='/img/chart.png' className={styles.featureIcon}/>
                            <h3>Pick Market</h3>
                        </div>
                        <p className={styles.featureDescription}>
                            Access markets like BTC/USDT, ETH/USDT, or new user-created pairs. Prices update in real time with ±0.01% accuracy.
                        </p>
                    </motion.div>
                        
                    <motion.div
                        className={styles.featureCard}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.featureTitle}>
                            <img src='/img/trend.png' className={styles.trendIcon}/>
                            <h3>Open your Position</h3>
                        </div>
                        <p className={styles.featureDescription}>
                            Take Long or Short positions with up to 25× leverage. Zero to minimal slippage ensures the entry price matches the displayed price.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        className={styles.featureCard}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                    <div className={styles.featureTitle}>
                        <img src='/img/bag.png' className={styles.featureIcon}/>
                        <h3>Settle & Withdraw</h3>
                    </div>
                    <p className={styles.featureDescription}>
                        Instant settlement — no multi-minute waits. In Q1 2026, PnL will be settled directly on native Bitcoin without bridges
                    </p>
                    </motion.div>
                </div>
            </section>

            {/* Trust Section */}
            <section className={styles.trustSection}>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className={styles.trustTitle}>
                        Most Trusted & Secure Perpetual Trading Platform.
                    </h2>
                    <p className={styles.trustSubtext}>
                        Trade with confidence on a platform built for transparency, security, and fairness — powered entirely by decentralized technology.
                    </p>
                </motion.div>
                
                <motion.div
                    className={styles.trustFeatures}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.trustFeature}>
                        <h4 className={styles.trustFeatureTitle}>Fully On-Chain & Non-Custodial</h4>
                        <p className={styles.trustFeatureDescription}>
                        All trades, vaults, and settlements run on the Internet Computer Protocol. Your funds remain in your control at all times.
                        </p>
                    </div>
                    
                    <div className={styles.trustFeature}>
                        <h4 className={styles.trustFeatureTitle}>Oracle-Powered Price Feeds</h4>
                        <p className={styles.trustFeatureDescription}>
                        Accurate, tamper-resistant prices from secure oracles ensure fair execution and protect against manipulation.
                        </p>
                    </div>
                    
                    <div className={styles.trustFeature}>
                        <h4 className={styles.trustFeatureTitle}>Transparent Smart Contracts</h4>
                        <p className={styles.trustFeatureDescription}>
                        Every vault and market operates through open-source, audited smart contracts that anyone can verify.
                        </p>
                    </div>
                </motion.div>
            </section>

            <motion.img 
                src="/img/vector2.png" 
                className={styles.ellipse}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className={styles.sponsor}>
                <h2>ORACLE - POWERED BY</h2>
                <div className={styles.sponsorText}>
                    <img src="/img/icp.png" alt="ICP logo"/>
                    <h3>DFINITY (INTERNET COMPUTER PROTOCOL)</h3>
                </div>
            </div>
        </div>
    );
}