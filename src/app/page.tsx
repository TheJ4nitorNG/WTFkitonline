import Link from "next/link";
import { Globe, Terminal, Shield, FileText, Code2 } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.1a5.8 5.8 0 0 0-1.6-4.06 5.3 5.3 0 0 0-.1-4s-1.3-.4-4 2.1a13.3 13.3 0 0 0-7 0c-2.7-2.5-4-2.1-4-2.1a5.3 5.3 0 0 0-.1 4 5.8 5.8 0 0 0-1.6 4.06c0 5.7 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.03V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-mono flex flex-col items-center selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navigation Header */}
      <nav className="w-full max-w-5xl flex justify-between items-center p-6 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3 text-emerald-400 font-bold text-xl tracking-tight">
          <Terminal size={24} />
          WTFKit
        </div>
        <div className="flex gap-6 items-center text-sm font-medium">
          <a href="https://github.com/TheJ4nitorNG/wtfkit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <GithubIcon size={18} />
            <span>WTFKit Core</span>
          </a>
          <a href="https://orphicnode.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Globe size={18} />
            <span>Orphic Node</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="w-full max-w-5xl flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-8 border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          v0.1.0 CLI Available
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-6 leading-tight">
          Stop guessing why your <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">terminal broke.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          When a command fails, most developers copy the error, Google it, and try random fixes. WTFKit skips that entire process. It reads your recent terminal failure and gives you straight answers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-2xl shadow-emerald-900/20">
            <span className="px-4 text-slate-500 select-none">$</span>
            <code className="px-2 py-4 text-emerald-400 text-sm md:text-base whitespace-nowrap">npm install -g wtf</code>
          </div>
        </div>
      </main>

      {/* Features / Details Section */}
      <section className="w-full max-w-5xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-800/60">
        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
            <span className="font-bold text-lg">wtf</span>
          </div>
          <h3 className="text-xl font-bold text-slate-200">What broke?</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Identify exactly which process, lock, or missing module triggered the failure in the first place.</p>
        </div>

        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
            <span className="font-bold text-lg">why</span>
          </div>
          <h3 className="text-xl font-bold text-slate-200">Why did it happen?</h3>
          <p className="text-slate-400 text-sm leading-relaxed">View a clear timeline of events. Understand root causes like "node.exe left running" instead of opaque error codes.</p>
        </div>

        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
            <span className="font-bold text-lg">fix</span>
          </div>
          <h3 className="text-xl font-bold text-slate-200">How do I fix it?</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Get the safest repair commands recommended for Windows, bypassing the need to search Stack Overflow.</p>
        </div>
      </section>

      {/* Support / Secondary Install */}
      <section className="w-full max-w-5xl px-6 py-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-slate-200 mb-6">Current Support</h2>
        <p className="text-slate-400 max-w-3xl leading-relaxed mb-10">
          WTFKit currently specializes in Windows development environments. It supports npm, Node.js, PowerShell, Windows Terminal, CMD, process detection, file lock detection, Go, pnpm, yarn, Bun, Git diagnostics, Docker, Python, Rust, and Flutter.
        </p>
        
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-slate-500 uppercase tracking-widest">Install CLI Only</span>
          <code className="bg-slate-900 px-6 py-3 rounded-lg border border-slate-800 text-emerald-400 text-sm shadow-inner">
            $ npm install -g wtfkit
          </code>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto border-t border-slate-800/80 bg-slate-950/50 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-500">
            <Terminal size={18} />
            <span className="text-sm font-semibold">WTFKit</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
            <a href="https://github.com/TheJ4nitorNG/wtfkitwebsite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Code2 size={16} />
              Website Source
            </a>
            <Link href="/privacy" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Shield size={16} />
              Privacy Policy
            </Link>
            <Link href="/terms" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <FileText size={16} />
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
