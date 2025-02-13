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
      <nav className="fixed top-0 w-full bg-[#58CC02]/90 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-2 group">
            <a href="#" className="flex items-center gap-2 group">
              <img src="/duopilalogo.jpg" alt="DUO PILA" className="w-10 h-10 cartoon-border animate-wiggle" />
              <span className="text-2xl font-bold text-shadow-cartoon group-hover:animate-pop">DUO PILA</span>
            </a>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#how-to-buy" className="hover:text-emerald-900 transition text-shadow-cartoon">How to Buy</a>
            <a href="#tokenomics" className="hover:text-emerald-900 transition text-shadow-cartoon">Tokenomics</a>
            <a href="#faq" className="hover:text-emerald-900 transition text-shadow-cartoon">FAQ</a>
            <div className="flex items-center gap-3">
              <a href="https://x.com/DuaPila_Token" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/90 text-[#58CC02] p-2 rounded-full cartoon-button">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://t.me/duopila" target="_blank" rel="noopener noreferrer" 
                 className="bg-white text-[#58CC02] px-4 py-2 rounded-full font-bold cartoon-button">
                Join Telegram Community
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8">
            {[...Array(48)].map((_, i) => (
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

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-12 bg-white/20 p-6 cartoon-border rounded-xl relative">
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Holders', value: 'TBA', icon: '👥' },
              { label: 'Market Cap', value: 'TBA', icon: '💰' },
              { label: 'ATH', value: 'TBA', icon: '📈' },
              { label: 'Launch Date', value: 'SOON', icon: '🎯' }
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

          {/* Trusted By Section */}
          <div className="mt-20 w-full overflow-hidden bg-white/10 backdrop-blur-sm py-8 cartoon-border">
            <h3 className="text-2xl font-bold text-center mb-8 text-shadow-cartoon">Trusted By The Best! 🤝</h3>
            <div className="flex animate-scroll-left">
              {[...Array(3)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-12 mx-12">
                  {[
                    {
                      href: "https://coinmarketcap.com",
                      img: "/cmc.png",
                      alt: "CoinMarketCap",
                      rounded: "rounded-lg"
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
                      href: "https://pinksale.finance",
                      img: "/pinksale.jpg",
                      alt: "PinkSale"
                    }
                  ].map((partner, i) => (
                    <a key={`${groupIndex}-${i}`} 
                       href={partner.href} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center min-w-[200px]">
                      <img 
                        src={partner.img} 
                        alt={partner.alt} 
                        className={`w-40 h-20 object-contain ${partner.rounded ? partner.rounded : 'rounded-2xl'}`}
                      />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="bg-emerald-600/30 backdrop-blur-sm py-20 px-4 sm:px-6 relative">
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
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white text-shadow-cartoon">
            How to Buy $DUPA 
            <span className="block text-2xl mt-2 text-yellow-300 animate-pulse">Easy peasy lemon squeezy! 🍋</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <img src="/metamask.png" alt="Metamask" className="w-12 h-12 object-contain" />,
                title: "1. Ape In With Wallet",
                desc: "Create any wallet supported by BNB Chain (Metamask = 🐐)"
              },
              {
                icon: <img src="/bnblogo.png" alt="BNB" className="w-12 h-12 object-contain" />,
                title: "2. Load Up BNB",
                desc: "Stack that BNB from any exchange fren! 💪"
              },
              {
                icon: <img src="/uniswap.jpg" alt="Uniswap" className="w-12 h-12 object-contain rounded-full" />,
                title: "3. Swap Like a Chad",
                desc: "Head to Uniswap & paste our address ser! 🔄"
              },
              {
                icon: <img src="/duopilalogo.jpg" alt="DUPA" className="w-12 h-12 object-contain rounded-full" />,
                title: "4. WAGMI Together",
                desc: "Welcome to $DUPA fam! 🚀🌙"
              }
            ].map((step, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors cursor-pointer transform hover:scale-105 transition-transform duration-200 border-2 border-emerald-200/30">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-spin p-2 cartoon-border">
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
      <section id="tokenomics" className="py-20 px-4 sm:px-6 relative bg-yellow-500/20 backdrop-blur-sm">
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
                  color: "#34D399",
                  value: 40
                },
                {
                  title: "Liquidity: 19.38% 💧",
                  desc: "193,800,000 $DUPA - Locked and loaded! 🔒",
                  color: "#60A5FA",
                  value: 19.38
                },
                {
                  title: "Team: 40.62% 👑",
                  desc: "406,200,000 $DUPA - BUIDL and HODL! 💪",
                  color: "#A78BFA",
                  value: 40.62
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 transition-transform duration-200 border-2 border-emerald-200/30 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-white font-semibold text-lg">{item.desc}</p>
                </div>
              ))}
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border-2 border-emerald-200/30 text-center">
                <p className="text-2xl font-bold text-shadow-cartoon mb-2">Total Supply 💎</p>
                <p className="text-white font-semibold text-lg">1,000,000,000 $DUPA</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 sm:p-8 rounded-xl transform hover:scale-105 transition-transform duration-200 border-2 border-emerald-200/30">
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
                      <Cell fill="#34D399" />
                      <Cell fill="#60A5FA" />
                      <Cell fill="#A78BFA" />
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
      <section id="faq" className="bg-emerald-600/20 backdrop-blur-sm py-20 px-4 sm:px-6 relative">
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
              {'❓🎯💡⭐✨'[Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-4 text-shadow-cartoon">
            FAQ 
            <span className="block text-2xl sm:text-3xl mt-4 text-emerald-200 animate-pulse">Everything You Need to Know! 🧠</span>
          </h2>
          <p className="text-xl text-center mb-12 text-emerald-100">Your questions about Duo Pila, answered with a sprinkle of fun! 🎯</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "What is DUO PILA ($DUPA)? 🤔",
                a: "Not just another meme token - we're the most BASED Duolingo community token ever! Bringing language learning and fun together in the crypto space! 🌟",
                icon: "🎓"
              },
              {
                q: "Why DUO PILA? 🌙",
                a: "Because we're more than a token - we're a movement! Uniting Duolingo enthusiasts and Dua Lipa fans in the Web3 revolution! Ready to change the game! 🚀",
                icon: "💫"
              },
              {
                q: "Total Token Supply? 📊",
                a: "1,000,000,000 $DUPA - Perfectly balanced for our moon mission! Each token represents the strength of our growing community! 🎯",
                icon: "📈"
              },
              {
                q: "When Exchange Listings? 📱",
                a: "CMC, CG, and major DEX listings incoming! Get ready, because together we're all gonna make it! WAGMI! 🔥",
                icon: "🎉"
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm p-8 rounded-xl hover:bg-white/30 transition-all transform hover:scale-105 duration-300 border-2 border-emerald-200/30 cartoon-border relative group">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-2xl cartoon-border animate-bounce">
                  {faq.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-shadow-cartoon group-hover:text-yellow-300 transition-colors">{faq.q}</h3>
                <p className="text-white text-lg leading-relaxed font-semibold">{faq.a}</p>
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