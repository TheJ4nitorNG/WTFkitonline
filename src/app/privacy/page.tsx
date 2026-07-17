import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono flex flex-col items-center justify-center p-8 sm:p-20">
      <main className="max-w-3xl w-full flex flex-col gap-8">
        <header className="border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Effective Date: July 16, 2026</p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-green-300">1. Information We Collect</h2>
          <p className="text-gray-300 leading-relaxed">
            WTFKit is a local command-line tool. It analyzes terminal errors directly on your machine. We do not collect, transmit, or store any personal data, source code, or telemetry from your execution environment.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-green-300">2. How We Use Information</h2>
          <p className="text-gray-300 leading-relaxed">
            Since we do not collect your information, we do not use it for any purpose. The tool functions entirely offline or communicates solely with official package registries (e.g., npm) as required for typical development tasks.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-green-300">3. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have questions about this privacy policy, please open an issue in the WTFKit repository.
          </p>
        </section>
      </main>
      
      <footer className="mt-16 pt-8 border-t border-gray-800 max-w-3xl w-full flex gap-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
        <Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
      </footer>
    </div>
  );
}
