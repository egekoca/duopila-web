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
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

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
      <nav className="fixed top-0 w-full bg-[#58CC02] backdrop-blur-sm z-50 px-4 sm:px-6 py-4 shadow-lg border border-[#22c55e] cartoon-border-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-2 group p-2 rounded-xl transition-all duration-300">
            <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-10 h-10 cartoon-border animate-wiggle" />
            <span className="text-2xl font-bold text-shadow-cartoon group-hover:animate-pop">DUO PILA</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#how-to-buy" className="nav-link hover:text-yellow-300 transition text-shadow-cartoon px-4 py-2 rounded-xl">How to Buy</a>
            <a href="#tokenomics" className="nav-link hover:text-yellow-300 transition text-shadow-cartoon px-4 py-2 rounded-xl">Tokenomics</a>
            <a href="#faq" className="nav-link hover:text-yellow-300 transition text-shadow-cartoon px-4 py-2 rounded-xl">FAQ</a>
            <div className="flex items-center gap-3">
              <a href="https://x.com/DuaPila_Token" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/90 text-[#58CC02] p-2 rounded-full cartoon-button hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer" 
                 className="bg-white text-[#58CC02] px-4 py-2 rounded-full font-bold cartoon-button hover:scale-110 transition-transform">
                Join Telegram Community
            </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 pointer-events-none opacity-40 h-[150%]">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8">
            {[...Array(96)].map((_, i) => (
              <img 
                key={i} 
                src="/duobaygınkus.jpg" 
                alt="" 
                className="w-16 h-16 object-cover animate-float"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="relative flex justify-center items-center min-h-[300px] w-full">
            <div className="absolute left-[15%] transform -translate-x-1/2 text-center">
              <img src="/pinksalepng.png" alt="PinkSale" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full cartoon-border" />
              <p className="mt-4 text-2xl font-bold text-shadow-cartoon">PinkSale</p>
            </div>
            <div className="relative z-10">
              <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-48 h-48 sm:w-64 sm:h-64 cartoon-border animate-cartoon-bounce" />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full animate-wiggle cartoon-border-sm rotate-12">
                ✨ GEM ✨
              </div>
            </div>
            <div className="absolute left-[85%] transform -translate-x-1/2 text-center">
              <img src="/dexviewpng.png" alt="DexView" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full cartoon-border" />
              <p className="mt-4 text-2xl font-bold text-shadow-cartoon">DexView</p>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-8xl font-extrabold mb-6 tracking-tight text-shadow-cartoon hover:animate-pop">
            DUO PILA 
            <span className="block text-4xl sm:text-7xl text-emerald-200 mt-2 animate-wiggle">($DUPA)</span>
          </h1>

          {/* Live Price Ticker */}
          <div className="bg-emerald-500/30 p-4 rounded-xl mb-8 cartoon-border backdrop-blur-md relative z-20">
            <p className="text-3xl font-bold text-shadow-cartoon">
              💰 Price: TBA 
              <span className="text-yellow-300 ml-2 animate-wiggle inline-block">
                Coming Soon ✨
              </span>
            </p>
          </div>

          <p className="text-2xl sm:text-3xl mb-8 text-emerald-100 font-bold text-shadow-cartoon hover:animate-pop relative z-20">
            The world's biggest Duolingo community powered by Dua Lipa 
            <span className="inline-block animate-cartoon-bounce ml-2">✏️</span>
            <span className="inline-block animate-wiggle ml-2">📚</span>
          </p>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-12 bg-white/20 p-6 cartoon-border rounded-xl relative z-20 backdrop-blur-md">
            <div className="absolute -right-3 -top-3 text-4xl animate-wiggle">🎯</div>
            <div className="absolute -left-3 -bottom-3 text-4xl animate-cartoon-bounce">🎨</div>
            <p className="text-xl sm:text-2xl text-emerald-100 font-bold text-shadow-cartoon leading-relaxed">
              Duo Pila Token, a fun and engaging meme token that brings together 
              <span className="text-yellow-300 inline-block animate-wiggle mx-1">Duolingo users</span> and 
              <span className="text-yellow-300 inline-block animate-wiggle mx-1">Dua Lipa fans</span> into Web3!
            </p>
            <p className="text-lg sm:text-xl text-emerald-100 mt-4 font-bold text-shadow-cartoon leading-relaxed">
              Our vision is to build the biggest global community where 
              <span className="text-yellow-300 inline-block animate-wiggle mx-1">language learners</span> and 
              <span className="text-yellow-300 inline-block animate-wiggle mx-1">music lovers</span> 
              unite in the crypto space. ✨
            </p>
          </div>

          {/* Meme Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 relative z-20">
            {[
              { label: 'Holders', value: 'TBA', icon: '👥' },
              { label: 'Market Cap', value: 'TBA', icon: '💰' },
              { label: 'ATH', value: 'TBA', icon: '📈' },
              { label: 'Launch Date', value: 'SOON', icon: '🎯' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/20 p-4 rounded-xl cartoon-border hover:animate-pop backdrop-blur-md">
                <div className="text-4xl mb-2 animate-wiggle">{stat.icon}</div>
                <div className="text-xl font-bold text-shadow-cartoon">{stat.value}</div>
                <div className="text-sm text-emerald-200">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Contract Address Display */}
          <div className="relative mb-12">
            {/* BNB Logoları */}
            <img src="/bnblogo.png" alt="" className="absolute -left-20 top-10 w-24 h-24 animate-float" />
            <img src="/bnblogo.png" alt="" className="absolute -right-20 top-10 w-24 h-24 animate-float" style={{ animationDelay: '0.5s' }} />
            <img src="/bnblogo.png" alt="" className="absolute left-10 -top-16 w-20 h-20 animate-float" style={{ animationDelay: '1s' }} />
            <img src="/bnblogo.png" alt="" className="absolute right-10 -top-16 w-20 h-20 animate-float" style={{ animationDelay: '1.5s' }} />
            <img src="/bnblogo.png" alt="" className="absolute left-1/4 -bottom-16 w-20 h-20 animate-float" style={{ animationDelay: '2s' }} />
            <img src="/bnblogo.png" alt="" className="absolute right-1/4 -bottom-16 w-20 h-20 animate-float" style={{ animationDelay: '2.5s' }} />

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto cartoon-border relative z-20">
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
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current group-hover:animate-wiggle">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="font-bold text-xl text-shadow-cartoon">Follow X 📚</span>
            </a>
          </div>

          {/* Trusted By Section */}
          <div className="mt-20 w-full overflow-hidden bg-white/10 backdrop-blur-sm py-8 cartoon-border">
            <h3 className="text-2xl font-bold text-center mb-8 text-shadow-cartoon">Trusted By The Best! 🤝</h3>
            <div className="scroll-container">
              <div className="animate-scroll-left">
                <div className="flex gap-12 mx-12">
                  {[
                    {
                      href: "https://coinmarketcap.com",
                      img: "/cmc.png",
                      alt: "CoinMarketCap"
                    },
                    {
                      href: "https://coingecko.com",
                      img: "/coingecko.png",
                      alt: "CoinGecko"
                    },
                    {
                      href: "https://dexscreener.com",
                      img: "/dexscreener.png",
                      alt: "DexScreener"
                    },
                    {
                      href: "https://dexview.com",
                      img: "/dexviewpng.png",
                      alt: "DexView"
                    },
                    {
                      href: "https://pinksale.finance",
                      img: "/pinksale.jpg",
                      alt: "PinkSale"
                    }
                  ].map((partner, i) => (
                    <a key={i} 
                       href={partner.href} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center min-w-[200px]">
                      <img 
                        src={partner.img} 
                        alt={partner.alt} 
                        className="w-40 h-20 object-contain rounded-2xl"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="animate-scroll-left" style={{ animationDelay: '0s' }}>
                <div className="flex gap-12 mx-12">
                  {[
                    {
                      href: "https://coinmarketcap.com",
                      img: "/cmc.png",
                      alt: "CoinMarketCap"
                    },
                    {
                      href: "https://coingecko.com",
                      img: "/coingecko.png",
                      alt: "CoinGecko"
                    },
                    {
                      href: "https://dexscreener.com",
                      img: "/dexscreener.png",
                      alt: "DexScreener"
                    },
                    {
                      href: "https://dexview.com",
                      img: "/dexviewpng.png",
                      alt: "DexView"
                    },
                    {
                      href: "https://pinksale.finance",
                      img: "/pinksale.jpg",
                      alt: "PinkSale"
                    }
                  ].map((partner, i) => (
                    <a key={i} 
                       href={partner.href} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center min-w-[200px]">
                      <img 
                        src={partner.img} 
                        alt={partner.alt} 
                        className="w-40 h-20 object-contain rounded-2xl"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reklam Şeridi */}
      <div className="bg-yellow-400 py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-[length:200%_200%] animate-gradient"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-black font-bold text-2xl">
            <span>🚀 BUY $DUPA NOW 🚀</span>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full">
              <code className="font-mono">{contractAddress}</code>
              <button onClick={copyToClipboard} className="ml-2 hover:scale-110 transition-transform">
                <Copy size={24} className="text-emerald-600" />
              </button>
            </div>
            <span>🌟 BUY $DUPA NOW 🌟</span>
          </div>
        </div>
      </div>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-20 px-4 sm:px-6 relative cartoon-bg">
        <div className="absolute inset-0 pointer-events-none folded-paper-pink transform rotate-1 backdrop-blur-sm"></div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div key={i} 
                 className="absolute animate-float"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   animation: `float ${5 + Math.random() * 5}s infinite`,
                   animationDelay: `${Math.random() * 5}s`,
                   zIndex: 3,
                   fontSize: `${Math.random() * 20 + 20}px`
                 }}>
              {'💰🌟⭐💫✨🎨🎯'[Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white text-shadow-cartoon">
            How to Buy $DUPA 
            <span className="block text-2xl mt-2 text-yellow-300 animate-pulse">Easy peasy lemon squeezy! 🍋</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <img src="/metamask.png" alt="Metamask" className="w-20 h-20 object-contain" />,
                title: "1. Ape In With Wallet",
                desc: "Create any wallet supported by BNB Chain (Metamask = 🐐)"
              },
              {
                icon: <img src="/bnblogo.png" alt="BNB" className="w-20 h-20 object-contain" />,
                title: "2. Load Up BNB",
                desc: "Stack that BNB from any exchange fren! 💪"
              },
              {
                icon: <img src="/uniswap.jpg" alt="Uniswap" className="w-20 h-20 object-contain rounded-full" />,
                title: "3. Swap Like a Chad",
                desc: "Head to Uniswap & paste our address ser! 🔄"
              },
              {
                icon: <img src="/duopilalogo.jpg" alt="DUPA" className="w-20 h-20 object-contain rounded-full" />,
                title: "4. WAGMI Together",
                desc: "Welcome to $DUPA fam! 🚀🌙"
              }
            ].map((step, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors cursor-pointer transform hover:scale-105 transition-transform duration-200 border-2 border-emerald-200/30">
                <div className="w-32 h-32 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-spin p-4 cartoon-border">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-center text-white font-semibold text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 sm:px-6 relative bg-gradient-to-br from-emerald-600/40 via-teal-600/40 to-cyan-600/40 backdrop-blur-sm">
        {/* Para ve Ekonomi Sembolleri */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dolar Sembolleri */}
          <div className="absolute top-10 left-10 text-8xl text-yellow-300/20 animate-float">$</div>
          <div className="absolute bottom-10 right-10 text-9xl text-pink-400/20 animate-float" style={{ animationDelay: '1s' }}>$</div>
          <div className="absolute top-1/3 right-20 text-7xl text-cyan-400/20 animate-float" style={{ animationDelay: '2s' }}>$</div>
          
          {/* Bitcoin Sembolleri */}
          <div className="absolute top-20 right-32 text-8xl text-yellow-300/20 animate-float" style={{ animationDelay: '0.5s' }}>₿</div>
          <div className="absolute bottom-32 left-20 text-7xl text-pink-400/20 animate-float" style={{ animationDelay: '1.5s' }}>₿</div>
          
          {/* Ethereum Sembolleri */}
          <div className="absolute top-1/2 left-32 text-8xl text-cyan-400/20 animate-float" style={{ animationDelay: '1s' }}>Ξ</div>
          <div className="absolute bottom-1/4 right-1/4 text-7xl text-yellow-300/20 animate-float" style={{ animationDelay: '2s' }}>Ξ</div>

          {/* Yüzde Sembolleri */}
          <div className="absolute top-1/4 left-1/4 text-8xl text-emerald-300/20 animate-float" style={{ animationDelay: '0.7s' }}>%</div>
          <div className="absolute bottom-1/3 right-1/3 text-9xl text-yellow-300/20 animate-float" style={{ animationDelay: '1.7s' }}>%</div>

          {/* Para Birimleri */}
          <div className="absolute top-40 left-1/3 text-7xl text-pink-400/20 animate-float" style={{ animationDelay: '1.2s' }}>¥</div>
          <div className="absolute bottom-40 right-1/3 text-8xl text-cyan-400/20 animate-float" style={{ animationDelay: '2.2s' }}>€</div>
        </div>

        {/* Mevcut içerik */}
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
              {'💰💎💵💸💲'[Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white text-shadow-cartoon">
            Tokenomics 
            <span className="block text-2xl mt-2 text-yellow-300 animate-pulse">Perfectly balanced, as all things should be! 💫</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Presale: 40% 🎯",
                  desc: "400,000,000 $DUPA - For the early birds! 🐦",
                  color: "#22D3EE",
                  value: 40
                },
                {
                  title: "Liquidity: 19.38% 💧",
                  desc: "193,800,000 $DUPA - Locked and loaded! 🔒",
                  color: "#F472B6",
                  value: 19.38
                },
                {
                  title: "Team: 40.62% 👑",
                  desc: "406,200,000 $DUPA - BUIDL and HODL! 💪",
                  color: "#FCD34D",
                  value: 40.62
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border-2 border-yellow-400/50 group hover:bg-white/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: item.color }}></div>
                    <h3 className="text-2xl font-bold text-white text-shadow-cartoon">{item.title}</h3>
                  </div>
                  <p className="text-emerald-100 font-bold text-lg tracking-wide leading-relaxed">{item.desc}</p>
                </div>
              ))}
              <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border-2 border-yellow-400/50 text-center hover:bg-white/50 transition-all duration-300">
                <p className="text-2xl font-bold text-shadow-cartoon mb-2 text-white">Total Supply 💎</p>
                <p className="text-emerald-100 font-bold text-lg tracking-wide">1,000,000,000 $DUPA</p>
              </div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl border-2 border-yellow-400/50 hover:bg-white/40 transition-all duration-300">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Presale", value: 40 },
                        { name: "Liquidity", value: 19.38 },
                        { name: "Team", value: 40.62 }
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      className="cartoon-border"
                      label={({ name, value, cx, cy, midAngle, innerRadius, outerRadius }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = (innerRadius + outerRadius) / 2;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                          <text
                            x={x}
                            y={y}
                            fill="white"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-lg font-bold"
                            style={{ textShadow: '2px 2px 0px black' }}
                          >
                            {`${name}\n${value}%`}
                          </text>
                        );
                      }}
                    >
                      <Cell fill="#22D3EE" />
                      <Cell fill="#F472B6" />
                      <Cell fill="#FCD34D" />
                    </Pie>
                    <Tooltip 
                      formatter={(value: any) => `${value}%`}
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '0.5rem',
                        padding: '0.5rem'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 relative bg-black">
        {/* Dalgalı Arka Plan Efekti */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #58CC02 0%, transparent 50%),
                           radial-gradient(circle at 100% 0%, #58CC02 0%, transparent 50%),
                           radial-gradient(circle at 0% 100%, #58CC02 0%, transparent 50%)`,
          backgroundSize: '100% 100%',
          filter: 'blur(100px)'
        }}></div>

        {/* Izgara Deseni */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, #58CC02 1px, transparent 1px),
                           linear-gradient(to bottom, #58CC02 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-4 text-white text-shadow-cartoon">
            FAQ 
            <span className="block text-2xl sm:text-3xl mt-4 text-[#58CC02] animate-pulse">Everything You Need to Know! 🧠</span>
          </h2>
          <p className="text-xl text-center mb-12 text-gray-300">Your questions about Duo Pila, answered with a sprinkle of fun! 🎯</p>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What is DUO PILA ($DUPA)? 🤔",
                a: "Not just another meme token - we're the most BASED Duolingo community token ever! Bringing language learning and fun together in the crypto space! 🌟",
                number: "1"
              },
              {
                q: "Why DUO PILA? 🌙",
                a: "Because we're more than a token - we're a movement! Uniting Duolingo enthusiasts and Dua Lipa fans in the Web3 revolution! Ready to change the game! 🚀",
                number: "2"
              },
              {
                q: "Total Token Supply? 📊",
                a: "1,000,000,000 $DUPA - Perfectly balanced for our moon mission! Each token represents the strength of our growing community! 🎯",
                number: "3"
              },
              {
                q: "When Exchange Listings? 📱",
                a: "CMC, CG, and major DEX listings incoming! Get ready, because together we're all gonna make it! WAGMI! 🔥",
                number: "4"
              }
            ].map((faq, i) => (
              <div key={i} className="bg-black/50 backdrop-blur-md rounded-xl border border-[#58CC02]/30 overflow-hidden hover:border-[#58CC02]/50 transition-all duration-300">
                <button 
                  onClick={() => {
                    const element = document.getElementById(`faq-answer-${i}`);
                    const arrow = document.getElementById(`faq-arrow-${i}`);
                    if (element && arrow) {
                      element.style.maxHeight = element.style.maxHeight ? '' : `${element.scrollHeight}px`;
                      arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
                    }
                  }}
                  className="w-full p-6 text-left flex items-center gap-4 hover:bg-[#58CC02]/5 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-[#58CC02] flex items-center justify-center text-white font-bold">
                    {faq.number}
                  </div>
                  <span className="text-2xl font-bold text-white flex-1">{faq.q}</span>
                  <span id={`faq-arrow-${i}`} className="text-2xl transition-transform duration-300 text-[#58CC02]">⌄</span>
                </button>
                <div 
                  id={`faq-answer-${i}`}
                  className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <p className="p-6 pt-0 text-xl text-gray-300 font-bold border-t border-[#58CC02]/20">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4CAF50]/90 backdrop-blur-sm py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-shadow-cartoon">Join the DUO PILA Army!</h2>
          <p className="text-xl mb-8 text-white font-bold">Don't miss out, join now! 🚀</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-white text-[#58CC02] px-6 py-3 rounded-full hover:bg-emerald-100 transition font-semibold transform hover:scale-105">
              <MessageCircle size={20} />
              Join Telegram
            </a>
            <a href="https://x.com/DuaPila_Token" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-white text-[#58CC02] px-6 py-3 rounded-full hover:bg-emerald-100 transition font-semibold transform hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;