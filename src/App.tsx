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
            <a href="#what-is-duopila" className="nav-link hover:text-yellow-300 transition text-shadow-cartoon px-4 py-2 rounded-xl">What is DUO PILA</a>
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
      <section className="min-h-screen relative bg-transparent overflow-hidden">
        {/* Yeşil Arka Plan */}
        <div className="absolute inset-0 bg-[#58CC02]" style={{ zIndex: 1 }}></div>
        
        {/* Arka plan deseni - Baygin Kus */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ zIndex: 2 }}>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-8">
            {[...Array(80)].map((_, i) => (
              <img 
                key={i} 
                src="/duobaygınkus.jpg" 
                alt="" 
                className="w-16 h-16 object-cover"
                style={{
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Ana İçerik */}
        <div className="max-w-7xl mx-auto h-screen flex items-center px-4 relative" style={{ zIndex: 3 }}>
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Sol Taraf - Başlık ve Açıklama */}
            <div className="space-y-8">
              <div>
                <h1 className="text-8xl font-black text-yellow-400 mb-2 text-shadow-cartoon">
                  DUO PILA
                </h1>
                <p className="text-5xl text-white font-bold text-shadow-cartoon">($DUPA)</p>
              </div>
              
              <p className="text-2xl text-white font-bold leading-relaxed text-shadow-cartoon">
                The world's biggest Duolingo community powered by Dua Lipa
              </p>

              {/* Contract Address */}
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl cartoon-border">
                <p className="text-xl mb-3 text-emerald-100 font-bold text-shadow-cartoon">Contract Address</p>
                <div className="flex items-center gap-3 bg-white/30 rounded-xl p-4 group cursor-pointer hover:bg-white/40 transition-all"
                 onClick={copyToClipboard}>
                  <code className="font-mono text-lg break-all text-white font-bold">{contractAddress}</code>
                  <Copy size={24} className="text-white group-hover:scale-110 transition-transform" />
                </div>
                {copied && (
                  <p className="text-emerald-200 mt-2 animate-pop">✨ Copied!</p>
                )}
              </div>

              {/* Partnership */}
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white text-shadow-cartoon">Partnerships</h3>
                <div className="flex items-center gap-8">
                  <div className="group">
                    <img src="/pinksalepng.png" alt="PinkSale" className="w-32 h-32 rounded-full bg-white p-4 cartoon-border group-hover:scale-105 transition-transform duration-300" />
                    <p className="mt-2 text-center text-white font-bold text-shadow-cartoon">PinkSale</p>
                  </div>
                  <div className="group">
                    <img src="/dexviewpng.png" alt="DexView" className="w-32 h-32 rounded-full bg-white p-4 cartoon-border group-hover:scale-105 transition-transform duration-300" />
                    <p className="mt-2 text-center text-white font-bold text-shadow-cartoon">DexView</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Logo */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <img 
                  src="/duopilalogo.jpg" 
                  alt="DUO PILA" 
                  className="w-[500px] h-[500px] object-cover rounded-full cartoon-border shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -right-4 -top-4 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full animate-wiggle cartoon-border-sm rotate-12">
                  ✨ GEM ✨
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ağaç Dalı ve Kuşlar */}
        <div className="absolute bottom-0 left-0 w-full" style={{ zIndex: 4 }}>
          {/* Ağaç Dalı */}
          <div className="relative">
            <div className="w-full bg-[#8B4513] transform shadow-lg" style={{ height: '7vh' }}></div>
          </div>
          
          {/* Kuşlar */}
          <div className="flex justify-between items-end px-8 absolute w-full" style={{ zIndex: 5, bottom: '5.5vh' }}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="relative">
                <img 
                  src="/duopilapng.png"
                  alt="Duo Pila Bird"
                  className="w-24 h-24 object-contain"
                  style={{
                    filter: 'brightness(1.2) contrast(1.1)',
                    transformOrigin: 'bottom center',
                    position: 'relative',
                    marginBottom: '-2px'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is DUO PILA Section */}
      <section id="what-is-duopila" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#45a049] via-[#58CC02] to-[#22c55e]">
        <div className="absolute inset-0 bg-[#58CC02]/20 backdrop-blur-sm"></div>
        
        <div className="max-w-7xl mx-auto h-screen flex items-center px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Sol Taraf - Logo */}
            <div className="flex justify-center">
              <img 
                src="/duopilalogo.jpg" 
                alt="DUO PILA" 
                className="w-[600px] h-[600px] object-cover rounded-full cartoon-border shadow-2xl"
              />
            </div>

            {/* Sağ Taraf - Açıklama */}
            <div className="space-y-8">
              <h2 className="text-6xl font-black text-yellow-400 mb-8 text-shadow-cartoon">
                What is
                <span className="block text-white mt-2">DUO PILA?</span>
              </h2>
              
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl cartoon-border space-y-6">
                <p className="text-xl text-white font-bold leading-relaxed text-shadow-cartoon">
                  Duo Pila ($DUPA) is a revolutionary meme token that brings together the vibrant Duolingo community and Dua Lipa fans in an exciting Web3 ecosystem.
                </p>
                
                <p className="text-xl text-white font-bold leading-relaxed text-shadow-cartoon">
                  Our mission is to create the largest global community where language learning enthusiasts and music lovers unite, fostering a unique blend of education and entertainment in the crypto space.
                </p>

                <p className="text-xl text-white font-bold leading-relaxed text-shadow-cartoon">
                  With innovative features and a strong community focus, Duo Pila is set to revolutionize how people engage with language learning and music in the blockchain world.
                </p>
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