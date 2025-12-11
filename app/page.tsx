import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl"></div>
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Solana & Mobile Developer building high-performance crypto products
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-4 leading-relaxed">
                Built <span className="font-semibold text-white">Kyros AI</span>, a full crypto wallet with integrated DEX and dApps. 
                Contributor to <span className="font-semibold text-white">Santa</span>, one of the biggest Christmas coins last year. 
                Helped grow <span className="font-semibold text-white">Clovers</span> to a <span className="font-semibold text-white">$3M market cap</span> project.
              </p>
              <p className="text-sm sm:text-base text-slate-400 mb-2">
                QuickNode Accelerator alum · Solana · Token2022 · iOS & Flutter
              </p>
              <p className="text-sm sm:text-base text-slate-500 mb-8">
                18yo developer & student from Slovakia · Digo (alias)
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:nikodem.zelenak.privat@gmail.com"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project 1: Kyros AI */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-2">Kyros AI</h3>
              <p className="text-sm text-purple-400 mb-4">Non‑custodial Solana wallet with integrated DEX</p>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Full crypto wallet on Solana with built-in DEX and dApp browser. Ran its token up to around <span className="font-semibold text-white">$500k market cap</span>.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Flutter</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Rust</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Solana</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">QuickNode</span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                <span className="font-semibold">Role:</span> Lead developer: wallet architecture, DEX integration, transaction flows.
              </p>
              <p className="text-xs text-slate-400 mb-4">
                Participated in <span className="font-semibold text-white">QuickNode Accelerator</span>, project still followed by QuickNode on X.
              </p>
              <button className="w-full px-4 py-2 border border-slate-700 rounded-lg text-sm hover:border-purple-500 hover:text-purple-400 transition-all duration-200">
                Private build – demo on request
              </button>
            </div>

            {/* Project 2: Santa Token */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-2">Santa Token</h3>
              <p className="text-sm text-purple-400 mb-4">High-volume seasonal token on Solana</p>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Early dev team member for <span className="font-semibold text-white">Santa</span>, one of the biggest Christmas coins of the year. 
                Built presale smart contracts using <span className="font-semibold text-white">Token2022</span> with custom fees.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Rust</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Solana Program</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Token2022</span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                <span className="font-semibold">Role:</span> Smart contract engineering: presale logic, fee structure, deployment.
              </p>
              <a
                href="https://x.com/SANTATOKENSOL2"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 border border-slate-700 rounded-lg text-sm hover:border-purple-500 hover:text-purple-400 transition-all duration-200 text-center"
              >
                View project on X
              </a>
            </div>

            {/* Project 3: Clovers */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-2">Clovers</h3>
              <p className="text-sm text-purple-400 mb-4">Crypto project scaled to $3M market cap</p>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Helped build a basic app and newsletter for the Clovers project. Contributed to user growth and community-facing tooling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">TypeScript</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">React</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Supabase</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Node.js</span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                <span className="font-semibold">Role:</span> App development + growth tooling.
              </p>
              <button className="w-full px-4 py-2 border border-slate-700 rounded-lg text-sm hover:border-purple-500 hover:text-purple-400 transition-all duration-200">
                Project overview – on request
              </button>
            </div>

            {/* Project 4: NftGO */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">NftGO</h3>
                <span className="px-2 py-1 bg-blue-900/50 border border-blue-700 text-xs rounded text-blue-400">
                  Building Now
                </span>
              </div>
              <p className="text-sm text-purple-400 mb-4">GPS-based Web3 game on Solana</p>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Mobile, location-based game where you walk around the real world, collect NFT loot, and trade them for real value. 
                Turning classic location-based gameplay (Pokémon GO style) into a play-and-own experience with on-chain assets.
              </p>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Players physically visit locations to unlock or mint NFTs directly into their wallet. These are real on-chain assets 
                (weapons, artifacts, mounts) that you own—not the server. Hold for utility or sell on the market for tokens/crypto.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Flutter</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Solana</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">GPS</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Web3</span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                <span className="font-semibold">Role:</span> Core development: location-based mechanics, NFT minting, trading system.
              </p>
              <p className="text-xs text-slate-400 mb-4">
                Building ecosystem features: rarity, trade, staking, guilds. Hackathon project.
              </p>
              <a
                href="https://x.com/Nft_go_app"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 border border-slate-700 rounded-lg text-sm hover:border-purple-500 hover:text-purple-400 transition-all duration-200 text-center"
              >
                View project on X
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* iOS Apps Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">iOS Apps on the App Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* App 1: RizzUp */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">RizzUp</h3>
                  <p className="text-sm text-purple-400 mb-3">Published on the App Store</p>
                </div>
                <span className="px-2 py-1 bg-green-900/50 border border-green-700 text-xs rounded text-green-400">
                  Shipped to App Store
                </span>
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                AI-powered app that generates rizz replies with advanced AI technology.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Swift</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">SwiftUI</span>
              </div>
              <a
                href="https://apps.apple.com/sk/app/rizzup-text-like-a-pro/id6748645595"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-center"
              >
                View on App Store
              </a>
            </div>

            {/* App 2: Bimbo */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bimbo</h3>
                  <p className="text-sm text-purple-400 mb-3">Smart period tracker</p>
                </div>
                <span className="px-2 py-1 bg-slate-800 border border-slate-700 text-xs rounded text-slate-400">
                  Private
                </span>
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Smart period tracker with intuitive design and comprehensive tracking features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Swift</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">SwiftUI</span>
              </div>
              <button className="w-full px-4 py-2 border border-slate-700 rounded-lg text-sm hover:border-purple-500 hover:text-purple-400 transition-all duration-200">
                Private build – demo on request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Blockchain & Solana</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Solana programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Token2022
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Presale contracts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Payment flows
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">Rust</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">TypeScript</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">Java</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">Dart</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">Swift</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Frontend & Mobile</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">Flutter</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">Swift / iOS</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">React / Next.js</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Backend & Infra</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">QuickNode</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">Supabase</span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I'm <span className="font-semibold text-white">Digo</span> (alias), an 18-year-old developer and student from Slovakia, 
              building crypto and mobile products with a focus on Solana's high-performance ecosystem. My experience includes launching 
              and scaling tokens and wallets on Solana, from building full-featured wallets to engineering smart contracts for high-volume projects.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I'm drawn to Solana's speed, low fees, and the philosophy that anyone can build on Solana, but only the best 
              projects win. This drives me to create products that combine technical excellence with real-world utility.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              As a participant in <span className="font-semibold text-white">QuickNode's Accelerator</span>, I've had the 
              opportunity to work alongside some of the most innovative builders in the Solana ecosystem, further deepening 
              my understanding of what it takes to build successful crypto products. Currently building <span className="font-semibold text-white">NftGO</span>, 
              a GPS-based Web3 game that turns real-world movement into on-chain digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Get in Touch</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <p className="text-slate-300 mb-4 text-center">Scan to connect on Telegram</p>
                <div className="bg-white p-4 rounded-lg">
                  <Image
                    src="/IMG_0429.JPG"
                    alt="Telegram QR Code"
                    width={200}
                    height={200}
                    className="rounded"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:nikodem.zelenak.privat@gmail.com"
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-lg"
                >
                  nikodem.zelenak.privat@gmail.com
                </a>
                <a
                  href="https://t.me/digodem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-lg"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800">
            <p className="text-slate-400 text-center sm:text-left">
              Open to Solana, crypto payments, and mobile wallet projects.
            </p>
            <div className="text-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
