
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* 4K Glass Header */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-2xl font-black">G</span>
            </div>
            <h1 className="text-xl font-bold tracking-tighter uppercase italic">
              Pro-Coach <span className="text-cyan-500 text-[10px] tracking-widest block not-italic font-medium">ULTRA 4K SYSTEM</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold animate-pulse">
              LIVE AI LINKED
            </span>
          </div>
        </div>
      </nav>

      {/* Main UI Layout */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Video Analysis Area */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-500 uppercase tracking-widest text-sm font-medium">
              Waiting for 4K Game Stream...
            </div>
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 bg-white text-black font-bold py-4 rounded-2xl hover:bg-cyan-500 transition-all active:scale-95 shadow-lg shadow-white/5 text-sm uppercase">Start Analysis</button>
            <button className="px-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-sm font-bold">Settings</button>
          </div>
        </div>

        {/* Right: AI Intelligence Panel */}
        <div className="space-y-6">
          <div className="bg-zinc-900/50 backdrop-blur-md border border-white/5 p-6 rounded-3xl shadow-xl">
            <h3 className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-6">AI Tactical Insights</h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-zinc-400 text-[10px] uppercase font-bold mb-1">Status</p>
                <p className="text-sm font-semibold italic text-zinc-200">Modern UI Online. 4K Quality Active.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-950 rounded-2xl border border-white/5 text-center">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">FPS</p>
                  <p className="text-2xl font-black italic">60</p>
                </div>
                <div className="p-4 bg-zinc-950 rounded-2xl border border-white/5 text-center">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Delay</p>
                  <p className="text-2xl font-black italic text-cyan-500">0ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
