import React, { useState, useEffect } from 'react';
import { 
  Copy, 
  MessageCircle, 
  Twitter,
  Wallet,
  DollarSign,
  ArrowRightLeft,
  Users,
  Rocket,
  Moon
} from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const [price, setPrice] = useState(0.00000001);
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => prev * 1.01); // Her 3 saniyede %1 artış
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#58CC02] text-white overflow-hidden relative">
      {/* Arka plan animasyonları */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} 
               className="absolute animate-float text-3xl"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animation: `float ${10 + Math.random() * 10}s infinite`,
                 animationDelay: `${Math.random() * 5}s`
               }}>
            {['✏️', '📚', '🎨', '🎯', '💫'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Simplified Navigation */}
      <nav className="fixed top-0 w-full bg-[#58CC02]/90 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-2 group">
            <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-10 h-10 cartoon-border animate-wiggle" />
            <span className="text-2xl font-bold text-shadow-cartoon group-hover:animate-pop">DUO PILA</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#how-to-buy" className="hover:text-emerald-900 transition text-shadow-cartoon">How to Buy</a>
            <a href="#tokenomics" className="hover:text-emerald-900 transition text-shadow-cartoon">Tokenomics</a>
            <a href="#faq" className="hover:text-emerald-900 transition text-shadow-cartoon">FAQ</a>
            <div className="flex items-center gap-3">
              <a href="https://x.com/DuaPila_Token" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/90 text-[#58CC02] p-2 rounded-full cartoon-button">
                <Twitter size={24} />
              </a>
              <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/90 text-[#58CC02] p-2 rounded-full cartoon-button">
                <MessageCircle size={24} />
              </a>
              <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer" 
                 className="bg-white text-[#58CC02] px-4 py-2 rounded-full font-bold cartoon-button">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8 cartoon-border animate-cartoon-bounce" />
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full animate-wiggle cartoon-border-sm rotate-12">
              ✨ GEM ✨
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-8xl font-extrabold mb-6 tracking-tight text-shadow-cartoon hover:animate-pop">
            DUO PILA 
            <span className="block text-4xl sm:text-7xl text-emerald-200 mt-2 animate-wiggle">($DUPA)</span>
          </h1>

          {/* Live Price Ticker */}
          <div className="bg-emerald-500/30 p-4 rounded-xl mb-8 cartoon-border">
            <p className="text-3xl font-bold text-shadow-cartoon">
              💰 Price: ${price.toFixed(8)} 
              <span className="text-yellow-300 ml-2 animate-wiggle inline-block">
                +1% every 3s ✨
              </span>
            </p>
          </div>

          <p className="text-2xl sm:text-3xl mb-8 text-emerald-100 font-bold text-shadow-cartoon hover:animate-pop">
            The world's biggest Duolingo community powered by Dua Lipa 
            <span className="inline-block animate-cartoon-bounce ml-2">✏️</span>
            <span className="inline-block animate-wiggle ml-2">📚</span>
          </p>

          {/* Meme Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Holders', value: '1,337', icon: '👥' },
              { label: 'Market Cap', value: '$420K', icon: '💰' },
              { label: 'ATH', value: '+9000%', icon: '📈' },
              { label: 'To The Moon', value: 'SOON', icon: '🎯' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/20 p-4 rounded-xl cartoon-border hover:animate-pop">
                <div className="text-4xl mb-2 animate-wiggle">{stat.icon}</div>
                <div className="text-xl font-bold text-shadow-cartoon">{stat.value}</div>
                <div className="text-sm text-emerald-200">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Contract Address Display */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-12 cartoon-border relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-9xl opacity-10 animate-wiggle">✏️</div>
            <p className="text-2xl mb-4 text-emerald-100 font-bold text-shadow-cartoon">📝 Contract Address 📝</p>
            <div className="flex items-center justify-center gap-3 bg-white/30 rounded-xl p-5 group cursor-pointer hover:animate-pop cartoon-border-sm"
                 onClick={copyToClipboard}>
              <code className="font-mono text-lg sm:text-xl break-all font-bold text-shadow-cartoon">{contractAddress}</code>
              <Copy size={28} className="group-hover:animate-wiggle" />
            </div>
            {copied && (
              <div className="text-xl mt-4 text-emerald-200 animate-pop font-bold text-shadow-cartoon">
                ✨ Yay! Copied to clipboard! ✨
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-[#4CAF50] px-8 py-4 rounded-full cartoon-button group">
              <MessageCircle size={24} className="group-hover:animate-wiggle" />
              <span className="font-bold text-xl text-shadow-cartoon">Join Telegram ✨</span>
            </a>
            <a href="https://x.com/DuaPila_Token" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-[#4CAF50] px-8 py-4 rounded-full cartoon-button group">
              <Twitter size={24} className="group-hover:animate-wiggle" />
              <span className="font-bold text-xl text-shadow-cartoon">Follow Twitter 📚</span>
            </a>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="bg-white/20 backdrop-blur-sm py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div key={i} 
                 className="absolute animate-float"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   animation: `float ${5 + Math.random() * 5}s infinite`,
                   animationDelay: `${Math.random() * 5}s`
                 }}>
              {'💰🌟⭐💫✨'[Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-rainbow">
            How to Buy $DUPA 
            <span className="block text-2xl mt-2 text-emerald-200">Easy peasy lemon squeezy! 🍋</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Wallet size={24} />,
                title: "1. Ape In With Wallet",
                desc: "Create any wallet supported by BNB Chain (Metamask = 🐐)"
              },
              {
                icon: <DollarSign size={24} />,
                title: "2. Load Up BNB",
                desc: "Stack that BNB from any exchange fren! 💪"
              },
              {
                icon: <ArrowRightLeft size={24} />,
                title: "3. Swap Like a Chad",
                desc: "Head to Uniswap & paste our address ser! 🔄"
              },
              {
                icon: <Users size={24} />,
                title: "4. WAGMI Together",
                desc: "Welcome to $DUPA fam! 🚀🌙"
              }
            ].map((step, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors cursor-pointer transform hover:scale-105 transition-transform duration-200 border-2 border-emerald-200/30">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-spin">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-center text-emerald-100">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div key={i} 
                 className="absolute animate-float"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   animation: `float ${5 + Math.random() * 5}s infinite`,
                   animationDelay: `${Math.random() * 5}s`
                 }}>
              {'🪙💎💰🤑💸'[Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-rainbow">
            Tokenomics 
            <span className="block text-2xl mt-2 text-emerald-200">Perfectly balanced, as all things should be! 💫</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Presale: 40% 🎯",
                  desc: "400,000,000 $DUPA - For the early birds! 🐦",
                  color: "from-emerald-400 to-emerald-600"
                },
                {
                  title: "Liquidity: 19.38% 💧",
                  desc: "193,800,000 $DUPA - Locked and loaded! 🔒",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  title: "Team: 40.62% 👑",
                  desc: "406,200,000 $DUPA - BUIDL and HODL! 💪",
                  color: "from-purple-400 to-purple-600"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 transition-transform duration-200 border-2 border-emerald-200/30">
                  <div className={`bg-gradient-to-r ${item.color} p-4 rounded-lg mb-4`}>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-emerald-100 text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 sm:p-8 rounded-xl transform hover:scale-105 transition-transform duration-200 border-2 border-emerald-200/30">
              <h3 className="text-2xl font-bold mb-6 text-center animate-pulse">Trusted By The Best! 🤝</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    href: "https://coinmarketcap.com",
                    img: "https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg",
                    alt: "CoinMarketCap"
                  },
                  {
                    href: "https://coingecko.com",
                    img: "https://static.coingecko.com/s/coingecko-logo-white-3f2aeb48e13428b7199395259dbb96280bf47ea05b2940ef7d3e87c61e4d8408.png",
                    alt: "CoinGecko"
                  },
                  {
                    href: "https://dexscreener.com",
                    img: "https://dexscreener.com/img/dexscreener-light.svg",
                    alt: "DexScreener"
                  }
                ].map((partner, i) => (
                  <a key={i} href={partner.href} target="_blank" rel="noopener noreferrer"
                     className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition transform hover:scale-110 group">
                    <img src={partner.img} alt={partner.alt} className="w-full group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white/20 backdrop-blur-sm py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div key={i} 
                 className="absolute animate-float"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   animation: `float ${5 + Math.random() * 5}s infinite`,
                   animationDelay: `${Math.random() * 5}s`
                 }}>
              {'❓❔💭🤔🎯'[Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-rainbow">
            FAQ 
            <span className="block text-2xl mt-2 text-emerald-200">Knowledge is power, fren! 🧠</span>
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "What is DUO PILA ($DUPA)? 🤔",
                a: "We're not just a meme token - we're the most BASED Duolingo community token ever created! 🚀"
              },
              {
                q: "Wen moon? 🌕",
                a: "NFA but... we're going straight to Uranus! Follow our roadmap and DYOR! 🔥"
              },
              {
                q: "What's the total supply? 📊",
                a: "1,000,000,000 $DUPA tokens - perfectly balanced for the moon mission! 🎯"
              },
              {
                q: "Wen exchange? 📈",
                a: "CMC, CG, and major DEX listings incoming! Stay tuned and WAGMI! 🚀"
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 transition-transform duration-200 border-2 border-emerald-200/30">
                <h3 className="text-2xl font-bold mb-2">{faq.q}</h3>
                <p className="text-emerald-100 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4CAF50] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the DUO PILA Army!</h2>
          <p className="text-xl mb-8">Don't miss out, join now! 🚀</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-white text-[#58CC02] px-6 py-3 rounded-full hover:bg-emerald-100 transition font-semibold transform hover:scale-105">
              <MessageCircle size={20} />
              Join Telegram
            </a>
            <a href="https://twitter.com/duopila" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-white text-[#58CC02] px-6 py-3 rounded-full hover:bg-emerald-100 transition font-semibold transform hover:scale-105">
              <Twitter size={20} />
              Follow Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;