import React, { useState } from 'react';
import { 
  Copy, 
  MessageCircle, 
  Twitter,
  Wallet,
  DollarSign,
  ArrowRightLeft,
  Users
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
      <nav className="fixed top-0 w-full bg-[#58CC02]/90 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-10 h-10" />
            <span className="text-2xl font-bold">DUO PILA</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#how-to-buy" className="hover:text-emerald-900 transition">How to Buy</a>
            <a href="#tokenomics" className="hover:text-emerald-900 transition">Tokenomics</a>
            <a href="#faq" className="hover:text-emerald-900 transition">FAQ</a>
            <div className="flex items-center gap-3">
              <a href="https://x.com/DuaPila_Token" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/90 text-[#58CC02] p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 transform">
                <Twitter size={24} />
              </a>
              <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/90 text-[#58CC02] p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 transform">
                <MessageCircle size={24} />
              </a>
              <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer" 
                 className="bg-white text-[#58CC02] px-4 py-2 rounded-full font-semibold hover:bg-emerald-100 transition ml-2">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8 rounded-full shadow-2xl hover:scale-105 transform transition-transform duration-300 animate-bounce" />
          <h1 className="text-5xl sm:text-8xl font-extrabold mb-6 tracking-tight hover:scale-105 transform transition-transform duration-300 text-shadow-lg">
            DUO PILA 
            <span className="block text-4xl sm:text-7xl text-emerald-200 mt-2 animate-pulse">($DUPA)</span>
          </h1>
          <p className="text-2xl sm:text-3xl mb-8 text-emerald-100 font-semibold italic hover:scale-105 transform transition-transform duration-300">
            The world's biggest Duolingo community powered by Dua Lipa 🚀✨
          </p>
          
          {/* Contract Address Display */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-12 transform hover:scale-105 transition-transform duration-300 border-4 border-emerald-200/30 shadow-xl">
            <p className="text-2xl mb-4 text-emerald-100 font-bold">🎯 Contract Address 🎯</p>
            <div className="flex items-center justify-center gap-3 bg-white/30 rounded-xl p-5 group cursor-pointer hover:bg-white/40 transition-all duration-300"
                 onClick={copyToClipboard}>
              <code className="font-mono text-lg sm:text-xl break-all font-semibold tracking-wider">{contractAddress}</code>
              <Copy size={28} className="group-hover:text-emerald-200 transition-colors animate-pulse" />
            </div>
            {copied && (
              <div className="text-xl mt-4 text-emerald-200 animate-fade-in font-bold">
                ✨ Woohoo! Copied to clipboard! 🚀
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-[#4CAF50] px-6 py-3 rounded-full hover:bg-[#45a049] transition transform hover:scale-105">
              <MessageCircle size={20} />
              Telegram
            </a>
            <a href="https://twitter.com/duopila" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-[#4CAF50] px-6 py-3 rounded-full hover:bg-[#45a049] transition transform hover:scale-105">
              <Twitter size={20} />
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="bg-white/20 backdrop-blur-sm py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">How to Buy $DUPA</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Wallet size={24} />,
                title: "1. Create Wallet",
                desc: "Create any wallet supported by BNB Chain (Metamask recommended)"
              },
              {
                icon: <DollarSign size={24} />,
                title: "2. Get BNB",
                desc: "Fund your wallet with BNB from any exchange"
              },
              {
                icon: <ArrowRightLeft size={24} />,
                title: "3. Swap on Uniswap",
                desc: "Head to Uniswap & paste our Contract Address"
              },
              {
                icon: <Users size={24} />,
                title: "4. Join Community",
                desc: "Welcome aboard degen! 🚀"
              }
            ].map((step, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors cursor-pointer transform hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Presale: 40%",
                  desc: "400,000,000 $DUPA allocated for the initial presale"
                },
                {
                  title: "Liquidity: 19.38%",
                  desc: "193,800,000 $DUPA locked for liquidity"
                },
                {
                  title: "Team: 40.62%",
                  desc: "406,200,000 $DUPA reserved for team and development"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 transition-transform duration-200">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 sm:p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Partners</h3>
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
                     className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition transform hover:scale-110">
                    <img src={partner.img} alt={partner.alt} className="w-full" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white/20 backdrop-blur-sm py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "What is DUO PILA ($DUPA)?",
                a: "DUO PILA is a meme token powering the world's largest Duolingo community!"
              },
              {
                q: "How can I buy $DUPA?",
                a: "Follow the steps in our How to Buy section above to purchase $DUPA tokens!"
              },
              {
                q: "What's the total supply?",
                a: "The total supply is 1,000,000,000 $DUPA tokens."
              },
              {
                q: "Which exchanges will list $DUPA?",
                a: "We're coming soon to CoinMarketCap, CoinGecko, and Uniswap! 🚀"
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 transition-transform duration-200">
                <h3 className="text-xl sm:text-2x1 font-bold mb-2">{faq.q}</h3>
                <p>{faq.a}</p>
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