import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono flex flex-col items-center justify-center p-8 sm:p-20">
      <main className="max-w-3xl w-full flex flex-col gap-8">
        <header className="border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-4">Terms of Service</h1>
          <p className="text-gray-400">Effective Date: July 16, 2026</p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-green-300">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By installing and using WTFKit, you agree to these terms. If you do not agree, do not use the tool.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-green-300">2. Use of the Tool</h2>
          <p className="text-gray-300 leading-relaxed">
            WTFKit provides automated diagnostics for terminal errors. It is provided "as-is" without any warranties. You are responsible for any commands you choose to execute based on its recommendations.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-green-300">3. Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            Under no circumstances shall the creators of WTFKit be liable for any damages, loss of data, or system failures resulting from the use or inability to use this software.
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t border-gray-800 max-w-3xl w-full flex gap-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
        <Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
      </footer>
    </div>
  );
}
