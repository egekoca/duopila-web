import React, { useState } from 'react';
import { 
  Copy, 
  MessageCircle, 
  Twitter,
  Wallet,
  DollarSign,
  ArrowRightLeft,
  Users,
  Fire
} from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#58CC02] text-white">
      {/* Simplified Navigation */}
      <nav className="fixed top-0 w-full bg-[#58CC02] z-50 px-4 sm:px-6 py-4 cartoon-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-2 group">
            <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-10 h-10 rounded-full cartoon-border animate-wobble" />
            <span className="text-2xl font-bold text-outline">DUO PILA</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#how-to-buy" className="hover:text-emerald-900 transition font-bold">How to Buy</a>
            <a href="#tokenomics" className="hover:text-emerald-900 transition font-bold">Tokenomics</a>
            <a href="#faq" className="hover:text-emerald-900 transition font-bold">FAQ</a>
            <div className="flex items-center gap-3">
              <a href="https://x.com/DuaPila_Token" target="_blank" rel="noopener noreferrer" 
                 className="bg-white p-2 rounded-full cartoon-button">
                <Twitter size={24} />
              </a>
              <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer" 
                 className="bg-white p-2 rounded-full cartoon-button">
                <MessageCircle size={24} />
              </a>
              <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer" 
                 className="bg-white px-4 py-2 rounded-full font-bold cartoon-button">
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
            <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8 rounded-full cartoon-border animate-bounce-soft" />
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full animate-wobble cartoon-border transform rotate-12">
              🔥 GEM 🔥
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-8xl font-extrabold mb-6 tracking-tight text-outline animate-pop">
            DUO PILA 
            <span className="block text-4xl sm:text-7xl text-emerald-200 mt-2 animate-bounce-soft">($DUPA)</span>
          </h1>

          {/* Live Price Ticker */}
          <div className="bg-white/90 p-4 rounded-xl mb-8 cartoon-border animate-bounce-soft">
            <p className="text-3xl font-bold text-[#58CC02]">
              💰 Price: ${price.toFixed(8)} 
              <span className="text-yellow-500 ml-2">
                <Fire className="inline-block animate-shake" size={24} />
                +1% every 3s
              </span>
            </p>
          </div>

          <p className="text-2xl sm:text-3xl mb-8 font-bold text-outline">
            The world's biggest Duolingo community powered by Dua Lipa 
            <span className="inline-block animate-bounce-soft ml-2">🚀</span>
            <span className="inline-block animate-wobble ml-2">✨</span>
            <span className="inline-block animate-bounce-soft ml-2">🌙</span>
          </p>

          {/* Contract Address Display */}
          <div className="bg-white/90 p-6 rounded-2xl mx-auto mb-12 cartoon-border">
            <p className="text-2xl mb-4 font-bold text-[#58CC02]">🎯 Contract Address 🎯</p>
            <div className="flex items-center justify-center gap-3 bg-emerald-100 rounded-xl p-5 group cursor-pointer hover:bg-emerald-200 transition-all duration-300 cartoon-border"
                 onClick={copyToClipboard}>
              <code className="font-mono text-lg sm:text-xl break-all font-bold text-[#58CC02]">{contractAddress}</code>
              <Copy size={28} className="text-[#58CC02] group-hover:animate-shake" />
            </div>
            {copied && (
              <div className="text-xl mt-4 text-[#58CC02] animate-pop font-bold">
                ✨ LFG! Copied to clipboard! 🚀
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-full text-[#58CC02] cartoon-button">
              <MessageCircle size={24} className="group-hover:animate-spin" />
              <span className="font-bold text-xl">Join Telegram 🚀</span>
            </a>
            <a href="https://x.com/DuaPila_Token" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-full text-[#58CC02] cartoon-button">
              <Twitter size={24} className="group-hover:animate-spin" />
              <span className="font-bold text-xl">Follow Twitter 🌙</span>
            </a>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="bg-white/90 py-20 px-4 sm:px-6 relative cartoon-border">
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
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#58CC02] text-outline">
            How to Buy $DUPA 
            <span className="block text-2xl mt-2">Easy peasy lemon squeezy! 🍋</span>
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
              <div key={i} className="bg-emerald-100 p-6 rounded-xl text-[#58CC02] cartoon-border hover:scale-105 transform transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto cartoon-border animate-bounce-soft">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-center font-bold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-outline">
            Tokenomics 
            <span className="block text-2xl mt-2">Perfectly balanced! 💫</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Presale: 40% 🎯",
                  desc: "400,000,000 $DUPA - For the early birds! 🐦",
                  color: "bg-emerald-100"
                },
                {
                  title: "Liquidity: 19.38% 💧",
                  desc: "193,800,000 $DUPA - Locked and loaded! 🔒",
                  color: "bg-blue-100"
                },
                {
                  title: "Team: 40.62% 👑",
                  desc: "406,200,000 $DUPA - BUIDL and HODL! 💪",
                  color: "bg-purple-100"
                }
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-6 rounded-xl text-[#58CC02] cartoon-border hover:scale-105 transform transition-all duration-300`}>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/90 p-6 sm:p-8 rounded-xl cartoon-border">
              <h3 className="text-2xl font-bold mb-6 text-center text-[#58CC02] animate-bounce-soft">Trusted Partners! 🤝</h3>
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
      <section id="faq" className="bg-white/90 py-20 px-4 sm:px-6 relative cartoon-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#58CC02] text-outline">
            FAQ 
            <span className="block text-2xl mt-2">Knowledge is power! 🧠</span>
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "What is DUO PILA ($DUPA)? 🤔",
                a: "We're the most BASED Duolingo community token ever created! 🚀"
              },
              {
                q: "Wen moon? 🌕",
                a: "NFA but... we're going straight to Uranus! DYOR! 🔥"
              },
              {
                q: "What's the total supply? 📊",
                a: "1,000,000,000 $DUPA - perfectly balanced! 🎯"
              },
              {
                q: "Wen exchange? 📈",
                a: "CMC, CG, and major DEX listings incoming! WAGMI! 🚀"
              }
            ].map((faq, i) => (
              <div key={i} className="bg-emerald-100 p-6 rounded-xl text-[#58CC02] cartoon-border hover:scale-105 transform transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">{faq.q}</h3>
                <p className="font-bold">{faq.a}</p>
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