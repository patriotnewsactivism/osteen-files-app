// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Osteen Evidence Hub</h1>
          <nav className="flex gap-4 text-sm">
            <a className="hover:underline" href="/">Home</a>
            <a className="hover:underline" href="/evidence">Evidence</a>
            <a className="hover:underline" href="/audio">Audio</a>
            <a className="hover:underline" href="/about">About</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="mb-8">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Status</h2>
            <p className="text-sm text-slate-600">
              Build is healthy. You’re seeing this page because the previous placeholder only rendered a single line.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Recent Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-medium">Item #{i + 1}</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Placeholder card. Replace with your evidence entries.
                </p>
                <button className="mt-4 rounded-xl border px-3 py-2 text-sm hover:bg-slate-50">
                  Open
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
